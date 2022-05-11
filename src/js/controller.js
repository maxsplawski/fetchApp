import * as model from './model.js';
import againButtonView from './views/againButtonView.js';
import breedsView from './views/breedsView.js';
import imageView from './views/imageView.js';

const controlBreeds = async function () {
  try {
    const id = 'api/breeds/list/all';

    breedsView.renderSpinner();

    await model.loadBreeds(id);

    breedsView.render(model.state.breeds.data);
  } catch (err) {
    alert(err);
  }
};

const controlImage = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    imageView.renderSpinner();

    await model.loadImage(id);

    imageView.render(model.state.image);
  } catch (err) {}
};

const init = function () {
  breedsView.addHandlerLoad(controlBreeds);
  breedsView.addHandlerClick(controlImage);
  imageView.addHandlerRender(controlImage);
  againButtonView.addHandlerClick(controlImage);
};

init();
