import icons from '../../img/icons.svg';

export default class View {
  _data;

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
            <svg>
            <use href="${icons}#icon-loader"></use>
            </svg>
        </div<
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  render(data) {
    this._data = data;

    const markup = this._generateMarkup(data);

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
