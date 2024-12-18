export function renderBookDetails(book, container) {
    var _a;
    console.log('Rendering book details for:', book);
    container.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Publisher:</strong> ${book.publisher}</p>
    <p><strong>Year:</strong> ${book.year}</p>
    <p><strong>Pages:</strong> ${(_a = book.pages) !== null && _a !== void 0 ? _a : 'Not specified'}</p>
    <p><strong>Plot:</strong> ${book.plot}</p>
    <p><strong>Audience:</strong> ${book.audience}</p>
  `;
    console.log('Book details rendered.');
}
