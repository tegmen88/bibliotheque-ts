export function renderBookList(books, container, onBookClick) {
    console.log('Rendering book list...');
    console.log('Books to render:', books);
    container.innerHTML = '';
    books.forEach(book => {
        console.log('Rendering book:', book);
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.style.backgroundColor = book.color;
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
    console.log('Book list rendered.');
}
