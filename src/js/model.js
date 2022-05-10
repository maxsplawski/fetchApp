import { API_URL, API_URL_ALL_BREEDS, API_URL_IMAGE } from './config';
import { getJSON } from './helpers';

export const state = {
  breeds: {},
};

export const loadBreeds = async function (id) {
  try {
    const data = await getJSON(`${API_URL_ALL_BREEDS}/${id}`);

    const { message } = data;

    state.breeds = {
      results: Object.keys(message).length,
      data: Object.keys(message),
    };
  } catch (err) {
    console.error(`X ${err} X`);
    throw err;
  }
};

export const loadImage = async function (id) {
  try {
    const data = await getJSON(`${API_URL_IMAGE}/${id}`);
    const { message } = data;
    state.breeds = {
      results: Object.keys(message).length,
      data: Object.keys(message),
    };
  } catch (err) {
    console.error(`X ${err} X`);
    throw err;
  }
};
