class SearchView {
    // Cache the search form element
    _parentEl = document.querySelector('.search');
    _searchField = this._parentEl?.querySelector('.search__field'); // Safely cache the search field

    // Method to retrieve the user's query from the search input field
    getQuery() {
        const query = this._searchField?.value || ''; // Safely access value
        this._clearInput();
        return query;
    }

    // Method to clear the search input field
    _clearInput() {
        if (this._searchField) this._searchField.value = ''; // Clear field if exists
    }

    // Add event listener for search form submission
    addHandlerSearch(handler) {
        this._parentEl?.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    }
}

export default new SearchView();
