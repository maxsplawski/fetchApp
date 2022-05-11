import View from './View';

class BreedsView extends View {
  _parentElement = document.querySelector('.searchResultsContainer__results');

  addHandlerLoad(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.searchResultsContainer__breedLink');

      if (!btn) return;

      handler();
    });
  }

  _generateMarkup() {
    const markup = `
            ${this._data
              .map(breed => {
                return `
                  <li><a class="searchResultsContainer__breedLink" href="#${breed}">${breed}</a></li>
              `;
              })
              .join('')}
      `;

    return markup;
  }
}

export default new BreedsView();
