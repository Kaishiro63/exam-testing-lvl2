import { describe, it, expect } from 'vitest';
import { User } from './User';

describe('Classe User', () => {
  
  it('devrait créer un utilisateur avec les propriétés données', () => {
    const user = new User('1', 'John Doe', 'john.doe@example.com', 'premium');
    
    expect(user.id).toBe('1');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
    expect(user.category).toBe('premium');
    expect(user.currentLoans).toEqual([]);
  });

  it('devrait permettre d\'emprunter quand les limites de prêt ne sont pas dépassées', () => {
    const user = new User('1', 'John Doe', 'john.doe@example.com', 'premium');
    user.addLoan('book1');
    user.addLoan('book2');
    user.addLoan('book3');
    
    expect(user.canBorrow()).toBe(true);
  });

  it('ne devrait pas permettre d\'emprunter quand les limites de prêt sont dépassées', () => {
    const user = new User('1', 'John Doe', 'john.doe@example.com', 'premium');
    user.addLoan('book1');
    user.addLoan('book2');
    user.addLoan('book3');
    user.addLoan('book4');
    user.addLoan('book5');

    expect(user.canBorrow()).toBe(false);
  });

  it('devrait ajouter un emprunt lorsqu\'il n\'est pas déjà emprunté', () => {
    const user = new User('1', 'John Doe', 'john.doe@example.com', 'premium');
    user.addLoan('book1');

    expect(user.currentLoans).toContain('book1');
  });

  it('ne devrait pas ajouter un emprunt en double', () => {
    const user = new User('1', 'John Doe', 'john.doe@example.com', 'premium');
    user.addLoan('book1');
    user.addLoan('book1');

    expect(user.currentLoans.length).toBe(1);
  });

  it('devrait retirer un emprunt correctement', () => {
    const user = new User('1', 'John Doe', 'john.doe@example.com', 'premium');
    user.addLoan('book1');
    user.removeLoan('book1');

    expect(user.currentLoans).not.toContain('book1');
  });

  it('ne devrait pas retirer un emprunt inexistant', () => {
    const user = new User('1', 'John Doe', 'john.doe@example.com', 'premium');
    user.addLoan('book1');
    user.removeLoan('book2');

    expect(user.currentLoans).toContain('book1');
  });

  it('devrait échouer si un utilisateur avec une catégorie "standard" dépasse la limite de prêt', () => {
    const user = new User('1', 'Jane Doe', 'jane.doe@example.com', 'standard');
    user.addLoan('book1');
    user.addLoan('book2');
    user.addLoan('book3');
    user.addLoan('book4');

    expect(user.canBorrow()).toBe(false);
  });

  it('devrait échouer si un utilisateur ajoute un prêt en double', () => {
    const user = new User('1', 'Jane Doe', 'jane.doe@example.com', 'premium');
    user.addLoan('book1');
    user.addLoan('book1');

    expect(user.currentLoans.length).toBe(1);
  });
});
