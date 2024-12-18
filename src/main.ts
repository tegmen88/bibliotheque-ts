import {  renderBookList } from "./components/BookList";
import { renderBookDetails } from "./components/BookDetails";
import { renderSearchBar } from "./components/SearchBar";
import { Book } from "./interfaces/Book";

const bookListContainer = document.getElementById('bookList')!;
const bookDetailsContainer = document.getElementById('bookDetails')!;
const searchBarContainer = document.getElementById('searchBar')!;

let books: Book[] = [];

async function init() {
  try {
    books = await fetchBooks();

    renderSearchBar(searchBarContainer, handleSearch);
    renderBookList(books, bookListContainer, handleBookClick);
  } catch (error) {
    console.error(error);
  }
}

function handleBookClick(bookId: number) {
  const selectedBook = books.find(book => book.id === bookId);
  if (selectedBook) {
    renderBookDetails(selectedBook, bookDetailsContainer);
  }
}

function handleSearch(query: string) {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
  renderBookList(filteredBooks, bookListContainer, handleBookClick);
}

init();
function fetchBooks(): Book[] | PromiseLike<Book[]> {
    throw new Error("Function not implemented.");
}

