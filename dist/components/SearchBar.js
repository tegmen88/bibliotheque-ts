export function renderSearchBar(container, onSearch) {
    container.innerHTML = `
      <input type="text" id="searchInput" placeholder="Search for a book by title..." />
      <button id="searchButton">Search</button>
    `;
    const searchButton = container.querySelector('#searchButton');
    const searchInput = container.querySelector('#searchInput');
    searchButton.addEventListener('click', () => onSearch(searchInput.value));
}
