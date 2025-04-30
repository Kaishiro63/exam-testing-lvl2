import { describe, it, expect } from 'vitest';
import { Book } from './Book';

describe('Classe Book', () => {

  it('devrait créer un livre avec les propriétés données', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');

    expect(book.id).toBe('1');
    expect(book.title).toBe('Le Grand Livre');
    expect(book.author).toBe('John Doe');
    expect(book.status).toBe('available');
  });

  it('devrait retourner vrai lorsque le livre est emprunté', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');
    book.status = 'borrowed';

    expect(book.isBorrowed()).toBe(true);
  });

  it('devrait retourner faux lorsque le livre n\'est pas emprunté', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');

    expect(book.isBorrowed()).toBe(false);
  });

  it('devrait retourner vrai lorsque le livre est disponible', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');
    book.status = 'available';

    expect(book.isAvailable()).toBe(true);
  });

  it('devrait retourner faux lorsque le livre n\'est pas disponible', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');
    book.status = 'borrowed';

    expect(book.isAvailable()).toBe(false);
  });

  it('devrait retourner vrai lorsque le livre est en maintenance', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');
    book.status = 'maintenance';

    expect(book.isInMaintenance()).toBe(true);
  });

  it('devrait retourner faux lorsque le livre n\'est pas en maintenance', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');
    
    expect(book.isInMaintenance()).toBe(false);
  });

  it('devrait retourner faux lorsque le livre est emprunté et donc pas disponible', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');
    book.status = 'borrowed';

    expect(book.isAvailable()).toBe(false);
  });

  it('devrait retourner faux lorsque le livre est en maintenance et donc pas emprunté', () => {
    const book = new Book('1', 'Le Grand Livre', 'John Doe');
    book.status = 'maintenance';

    expect(book.isBorrowed()).toBe(false);
  });

});
