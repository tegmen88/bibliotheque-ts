var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { renderBookList } from "./components/BookList";
import { renderBookDetails } from "./components/BookDetails";
import { renderSearchBar } from "./components/SearchBar";
const bookListContainer = document.getElementById('bookList');
const bookDetailsContainer = document.getElementById('bookDetails');
const searchBarContainer = document.getElementById('searchBar');
let books = [];
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            books = yield fetchBooks();
            renderSearchBar(searchBarContainer, handleSearch);
            renderBookList(books, bookListContainer, handleBookClick);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleBookClick(bookId) {
    const selectedBook = books.find(book => book.id === bookId);
    if (selectedBook) {
        renderBookDetails(selectedBook, bookDetailsContainer);
    }
}
function handleSearch(query) {
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    renderBookList(filteredBooks, bookListContainer, handleBookClick);
}
init();
function fetchBooks() {
    throw new Error("Function not implemented.");
}
