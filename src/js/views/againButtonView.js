import View from './View';

class AgainButtonView {
  _parentElement = document.querySelector('.againBtn');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', handler);
  }
}

export default new AgainButtonView();
