import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionsType";

export const aniadirFavorito = (data) => {
  return { type: ADD_FAV, payload: data };
};

export const eliminarFavorito = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
