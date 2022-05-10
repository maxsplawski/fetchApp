import View from './View';

class BreedsView extends View {
  _parentElement = document.querySelector('.searchResultsContainer__results');

  _generateMarkup() {
    const markup = `
        <div class="breed">
            ${this._data
              .map(breed => {
                return `
                        <a class="breedLink" href="#${breed}">${breed}</a>
              `;
              })
              .join('')}
        </div>
      `;

    console.log('hi');

    return markup;
  }
}

export default new BreedsView();
