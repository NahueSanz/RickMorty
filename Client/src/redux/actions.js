import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAV } from "./actionsType";
import axios from "axios";

const URL = "http://localhost:3001/rickandmorty/fav";

export const getFav = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);
      return dispatch({ type: GET_FAV, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const aniadirFavorito = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL, character);
      return dispatch({ type: ADD_FAV, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarFavorito = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL}/${id}`);
      return dispatch({ type: REMOVE_FAV, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
