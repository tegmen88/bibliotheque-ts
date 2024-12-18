var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { renderBookList } from "./components/BookList.js";
import { renderBookDetails } from "./components/BookDetails.js";
import { renderSearchBar } from "./components/SearchBar.js";
const bookListContainer = document.getElementById('bookList');
const bookDetailsContainer = document.getElementById('bookDetails');
const searchBarContainer = document.getElementById('searchBar');
let books = [];
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Initializing application...');
            books = yield fetchBooks();
            console.log('Books fetched:', books);
            renderSearchBar(searchBarContainer, handleSearch);
            console.log('Search bar rendered.');
            renderBookList(books, bookListContainer, handleBookClick);
            console.log('Book list rendered.');
        }
        catch (error) {
            console.error('Error initializing application:', error);
        }
    });
}
function handleBookClick(bookId) {
    console.log('Book clicked with ID:', bookId);
    const selectedBook = books.find(book => book.id === bookId);
    if (selectedBook) {
        console.log('Selected book:', selectedBook);
        renderBookDetails(selectedBook, bookDetailsContainer);
    }
    else {
        console.error('Book not found with ID:', bookId);
    }
}
function handleSearch(query) {
    console.log('Search query:', query);
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    console.log('Filtered books:', filteredBooks);
    renderBookList(filteredBooks, bookListContainer, handleBookClick);
}
function fetchBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Fetching books from API...');
            const response = yield fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
            console.log('API response:', response);
            if (!response.ok) {
                throw new Error(`Failed to fetch books: ${response.statusText}`);
            }
            const books = yield response.json();
            console.log('Books fetched:', books);
            return books;
        }
        catch (error) {
            console.error('Error fetching books:', error);
            throw error;
        }
    });
}
init();
