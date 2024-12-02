import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookmarksView extends View {
    _parentElement;
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    _message = '';

    constructor() {
        super();
        this._parentElement = document.querySelector('.bookmarks__list');
    }

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }

    _generateMarkup() {
        // If no data or data is empty, show the error message
        if (!this._data || this._data.length === 0) {
            return this.renderError();
        }

        // Render each bookmark using previewView
        return this._data
            .map(bookmark => previewView.render(bookmark, false))
            .join('');
    }
}

export default new BookmarksView();
