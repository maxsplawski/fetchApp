import View from './View';

class ImageView extends View {
  _parentElement = document.querySelector('.imageContainer');

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  _generateMarkup() {
    return `
        <div>
            <img src="${this._data}"
        <div>
      `;
  }
}

export default new ImageView();
