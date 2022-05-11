import View from './View';

class ImageView extends View {
  _parentElement = document.querySelector('.imageContainer');

  addHandlerRender(handler) {
    window.addEventListener('hashchange', handler);
  }

  _generateMarkup() {
    return `
        <div class="imageContainer__img">
            <img src="${this._data}"
        <div>
      `;
  }
}

export default new ImageView();
