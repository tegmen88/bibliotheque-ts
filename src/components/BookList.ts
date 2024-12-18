import { Book } from "../interfaces/Book";

export function renderBookList(books: Book[], container: HTMLElement, onBookClick: (id: number) => void): void {
    container.innerHTML = '';
    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.className = 'book';
      bookElement.style.backgroundColor = book.color; // Använd färg från API
      bookElement.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="${book.title}" />
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Publisher: ${book.publisher}</p>
        <p>Audience: ${book.audience}</p>
      `;
      bookElement.addEventListener('click', () => onBookClick(book.id));
      container.appendChild(bookElement);
    });
  }
  