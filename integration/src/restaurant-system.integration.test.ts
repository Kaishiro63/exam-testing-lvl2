import { describe, it, expect, beforeEach } from 'vitest';
import { IProduct, ICustomer, IOrder, IInvoice } from './types';
import  {RestaurantSystem } from './RestaurantService';

describe('Tests d\'intégration du système de restaurant', () => {
  let system: RestaurantSystem;
  let customer: ICustomer;
  let pizza: IProduct;
  let soda: IProduct;
  
  beforeEach(() => {
    system = new RestaurantSystem();
    
    customer = system.getCustomerService().createCustomer({
      name: 'Jean Dupont',
      email: 'jean@example.com',
      address: '123 Rue de Paris, 75001 Paris',
      phone: '+33123456789'
    });
    
    pizza = system.getProductService().createProduct({
      name: 'Margherita',
      description: 'Tomate, mozzarella, basilic',
      price: 12.5,
      category: 'main',
      available: true,
      preparationTimeMinutes: 20
    });
    
    soda = system.getProductService().createProduct({
      name: 'Cola',
      description: 'Boisson gazeuse',
      price: 3.5,
      category: 'drink',
      available: true,
      preparationTimeMinutes: 1
    });
  });

  it('Le processus complet de commande doit fonctionner correctement', () => {
    const orderItems = [
      { productId: pizza.id, quantity: 1 },
      { productId: soda.id, quantity: 2 }
    ];
    
    const result = system.processOrder(customer.id, orderItems);
    
    expect(result.order).not.toBeNull();
    expect(result.invoice).not.toBeNull();
    
    const order = result.order as IOrder;
    const invoice = result.invoice as IInvoice;
    
    expect(order.customerId).toBe(customer.id);
    expect(order.status).toBe('pending');
    expect(order.items.length).toBe(2);
    expect(order.totalAmount).toBe(pizza.price + (soda.price * 2));
    
    expect(invoice.orderId).toBe(order.id);
    expect(invoice.customerId).toBe(customer.id);
    expect(invoice.totalAmount).toBe(order.totalAmount);
    expect(invoice.tax).toBe(order.totalAmount * 0.1);
    expect(invoice.paid).toBe(false);
    
    const paymentResult = system.getInvoiceService().payInvoice(invoice.id, 'credit_card');
    expect(paymentResult).toBe(true);
    
    const updatedInvoice = system.getInvoiceService().getInvoice(invoice.id);
    expect(updatedInvoice?.paid).toBe(true);
    expect(updatedInvoice?.paymentMethod).toBe('credit_card');
    expect(updatedInvoice?.paidAt).toBeDefined();
    
    const updatedCustomer = system.getCustomerService().getCustomer(customer.id);
    expect(updatedCustomer?.loyaltyPoints).toBe(1);
  });

  it('Les points de fidélité sont correctement ajoutés lors de la commande', () => {
    const orderItems = [
      { productId: pizza.id, quantity: 2 },
      { productId: soda.id, quantity: 1 }
    ];
    
    system.processOrder(customer.id, orderItems);
    
    const updatedCustomer = system.getCustomerService().getCustomer(customer.id);
    expect(updatedCustomer?.loyaltyPoints).toBe(2);
  });

  it('La commande doit échouer si un produit est indisponible', () => {
    system.getProductService().updateProductAvailability(pizza.id, false);
    
    const orderItems = [
      { productId: pizza.id, quantity: 1 },
      { productId: soda.id, quantity: 1 }
    ];
    
    const result = system.processOrder(customer.id, orderItems);
    
    expect(result.order).toBeNull();
    expect(result.invoice).toBeNull();
  });

  it('Le changement de disponibilité des produits doit affecter les commandes', () => {
    system.getProductService().updateProductAvailability(pizza.id, false);
    
    const orderItems = [
      { productId: pizza.id, quantity: 1 },
      { productId: soda.id, quantity: 1 }
    ];
    
    const result = system.processOrder(customer.id, orderItems);
    
    expect(result.order).toBeNull();
    expect(result.invoice).toBeNull();
    
    system.getProductService().updateProductAvailability(pizza.id, true);
    
    const newOrderItems = [
      { productId: pizza.id, quantity: 1 },
      { productId: soda.id, quantity: 1 }
    ];
    
    const newResult = system.processOrder(customer.id, newOrderItems);
    
    expect(newResult.order).not.toBeNull();
    expect(newResult.invoice).not.toBeNull();
  });

  it('Le statut de la commande doit être modifié correctement', () => {
    const orderItems = [
      { productId: pizza.id, quantity: 1 },
      { productId: soda.id, quantity: 1 }
    ];
    
    const result = system.processOrder(customer.id, orderItems);
    const order = result.order as IOrder;
    
    const statusUpdateResult = system.getOrderService().updateOrderStatus(order.id, 'delivered');
    expect(statusUpdateResult).toBe(true);
    
    const updatedOrder = system.getOrderService().getOrder(order.id);
    expect(updatedOrder?.status).toBe('delivered');
  });

  it('La commande ne peut être annulée que si le statut est "pending"', () => {
    const orderItems = [
      { productId: pizza.id, quantity: 1 },
      { productId: soda.id, quantity: 1 }
    ];
    
    const result = system.processOrder(customer.id, orderItems);
    const order = result.order as IOrder;
    
    const cancelResultPending = system.getOrderService().cancelOrder(order.id);
    expect(cancelResultPending).toBe(true);
    
    const cancelledOrder = system.getOrderService().getOrder(order.id);
    expect(cancelledOrder?.status).toBe('cancelled');
    
    const statusUpdateResult = system.getOrderService().updateOrderStatus(order.id, 'delivered');
    expect(statusUpdateResult).toBe(true);
    
    const cancelResultDelivered = system.getOrderService().cancelOrder(order.id);
    expect(cancelResultDelivered).toBe(false);
  });

  it('Les montants et les taxes doivent être calculés correctement', () => {
    const orderItems = [
      { productId: pizza.id, quantity: 1 },
      { productId: soda.id, quantity: 1 }
    ];
    
    const result = system.processOrder(customer.id, orderItems);
    const order = result.order as IOrder;
    const invoice = result.invoice as IInvoice;
    
    expect(invoice.totalAmount).toBe(order.totalAmount);
    expect(invoice.tax).toBe(order.totalAmount * 0.1);
  });

});
