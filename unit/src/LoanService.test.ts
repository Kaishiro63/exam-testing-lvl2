import { describe, it, expect, beforeEach } from 'vitest';
import { LoanService } from './LoanService';
import { Book } from './Book';
import { User } from './User';

describe('Classe LoanService', () => {
  let loanService: LoanService;
  let book: Book;
  let user: User;

  beforeEach(() => {
    loanService = new LoanService();
    book = new Book('1', 'Titre du livre', 'Nom de l\'auteur');
    user = new User('1', 'John Doe', 'john.doe@example.com');
    loanService.addBook(book);
    loanService.addUser(user);
  });

  describe('emprunter un livre', () => {
    it('devrait emprunter un livre avec succès si disponible et que l\'utilisateur peut emprunter', () => {
      const result = loanService.borrowBook('1', '1');
      expect(result).toBe(true);
      expect(book.status).toBe('borrowed');
      expect(book.borrowedBy).toBe('1');
    });

    it('devrait échouer si le livre n\'est pas disponible', () => {
      book.status = 'borrowed';
      const result = loanService.borrowBook('1', '1');
      expect(result).toBe(false);
    });

    it('devrait échouer si l\'utilisateur a atteint la limite de prêts', () => {
      user.addLoan('book1');
      user.addLoan('book2');
      user.addLoan('book3');
      const result = loanService.borrowBook('1', '1');
      expect(result).toBe(false);
    });

    it('devrait retourner false si l\'utilisateur n\'existe pas', () => {
      const result = loanService.borrowBook('1', 'inexistant');
      expect(result).toBe(false);
    });

    it('devrait retourner false si le livre n\'existe pas', () => {
      const result = loanService.borrowBook('inexistant', '1');
      expect(result).toBe(false);
    });
  });

  describe('retourner un livre', () => {
    it('devrait retourner un livre avec succès et calculer aucune pénalité', () => {
      loanService.borrowBook('1', '1');
      const returnDate = new Date();
      const penalty = loanService.returnBook('1', returnDate);
      expect(penalty).toBe(0);
      expect(book.status).toBe('available');
    });

    it('devrait retourner -1 si l\'on tente de retourner un livre qui n\'a pas été emprunté', () => {
      const penalty = loanService.returnBook('1');
      expect(penalty).toBe(-1);
    });

    it('devrait calculer correctement la pénalité en fonction des jours de retard', () => {
        loanService.borrowBook('1', '1');
      
        const borrowDate = new Date();
        const dueDate = new Date(borrowDate);
        dueDate.setDate(dueDate.getDate() + 15);
    
        book.dueDate = dueDate;
      
        const returnDate = new Date(dueDate);
        returnDate.setDate(returnDate.getDate() + 15);
      
        returnDate.setHours(returnDate.getHours() + 1);
        const penalty = loanService.returnBook('1', returnDate);
    
        expect(penalty).toBe(8);
    });
  });
});
