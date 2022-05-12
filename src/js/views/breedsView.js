import View from './View';

class BreedsView extends View {
  _parentElement = document.querySelector('.searchResultsContainer__results');

  addHandlerLoad(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerClick(handler) {
    const parentElement = this._parentElement;

    parentElement.addEventListener('click', function (e) {
      const btns = parentElement.querySelectorAll(
        '.searchResultsContainer__breedLink'
      );
      const btnsArr = [...btns];

      const btn = e.target.closest('.searchResultsContainer__breedLink');

      if (!btn) return;

      btnsArr.forEach(btn => {
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
        }
      });

      btn.classList.add('active');

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
