import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
    _parentElement = document.querySelector('.upload');
    _message = 'Recipe was successfully uploaded :)';

    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    constructor() {
        super();
        // Bind event listeners for opening and closing the modal window
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }

    toggleWindow() {
        // Ensure window and overlay elements exist before toggling
        if (this._overlay && this._window) {
            this._overlay.classList.toggle('hidden');
            this._window.classList.toggle('hidden');
        }
    }

    _addHandlerShowWindow() {
        if (this._btnOpen) {
            this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
        }
    }

    _addHandlerHideWindow() {
        if (this._btnClose) {
            this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        }
        if (this._overlay) {
            this._overlay.addEventListener('click', this.toggleWindow.bind(this));
        }
    }

    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            const dataArr = [...new FormData(this)];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }

    _generateMarkup() {
        // Placeholder for future markup generation if needed
    }
}

export default new AddRecipeView();
