export function renderSearchBar(container: HTMLElement, onSearch: (query: string) => void): void {
    container.innerHTML = `
      <input type="text" id="searchInput" placeholder="Search for a book by title..." />
      <button id="searchButton">Search</button>
    `;
  
    const searchButton = container.querySelector('#searchButton') as HTMLButtonElement;
    const searchInput = container.querySelector('#searchInput') as HTMLInputElement;
  
    searchButton.addEventListener('click', () => onSearch(searchInput.value));
  }
  