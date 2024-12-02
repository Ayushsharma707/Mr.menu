import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement;

  constructor() {
    super();
    this._parentElement = document.querySelector('.pagination');
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // Utility function to generate buttons
    const createButton = (page, direction) => `
            <button data-goto="${page}" class="btn--inline pagination__btn--${direction}">
                ${direction === 'prev' ? `
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>` : ''}
                <span>Page ${page}</span>
                ${direction === 'next' ? `
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>` : ''}
            </button>
        `;

    // Page 1 and other pages exist
    if (curPage === 1 && numPages > 1) {
      return createButton(curPage + 1, 'next');
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return createButton(curPage - 1, 'prev');
    }

    // Any other page
    if (curPage < numPages) {
      return `
                ${createButton(curPage - 1, 'prev')}
                ${createButton(curPage + 1, 'next')}
            `;
    }

    // Only one page exists
    return '';
  }
}

export default new PaginationView();
