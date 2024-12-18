import { renderBookList } from "./components/BookList.js";
import { renderBookDetails } from "./components/BookDetails.js";
import { renderSearchBar } from "./components/SearchBar.js";
import { Book } from "./interfaces/Book";

const bookListContainer = document.getElementById('bookList')!;
const bookDetailsContainer = document.getElementById('bookDetails')!;
const searchBarContainer = document.getElementById('searchBar')!;

let books: Book[] = [];

async function init() {
  try {
    console.log('Initializing application...');
    books = await fetchBooks();
    console.log('Books fetched:', books);

    renderSearchBar(searchBarContainer, handleSearch);
    console.log('Search bar rendered.');

    renderBookList(books, bookListContainer, handleBookClick);
    console.log('Book list rendered.');
  } catch (error) {
    console.error('Error initializing application:', error);
  }
}


function handleBookClick(bookId: number) {
  console.log('Book clicked with ID:', bookId);
  const selectedBook = books.find(book => book.id === bookId);
  if (selectedBook) {
    console.log('Selected book:', selectedBook);
    renderBookDetails(selectedBook, bookDetailsContainer);
  } else {
    console.error('Book not found with ID:', bookId);
  }
}


function handleSearch(query: string) {
  console.log('Search query:', query);
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
  console.log('Filtered books:', filteredBooks);
  renderBookList(filteredBooks, bookListContainer, handleBookClick);
}


async function fetchBooks(): Promise<Book[]> {
  try {
    console.log('Fetching books from API...');
    const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
    console.log('API response:', response);

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }

    const books: Book[] = await response.json();
    console.log('Books fetched:', books);
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}


init();
