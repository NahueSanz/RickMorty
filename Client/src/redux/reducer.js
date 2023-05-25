import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAV } from "./actionsType";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_FAV:
      return {
        ...state,
        myFavorites: actions.payload,
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: actions.payload,
        allCharacters: actions.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: actions.payload,
        allCharacters: actions.payload,
        // myFavorites: state.myFavorites.filter(
        //   //me gusta mas este filtro
        //   (user) => user.id !== parseInt(actions.payload.id)
        // ),
      };
    case FILTER:
      const filteredCharacters = state.allCharacters.filter(
        //lo mismo que arriba pero de otra forma
        (character) => character.gender === actions.payload
      );
      return {
        ...state,
        myFavorites:
          actions.payload === "none"
            ? [...state.allCharacters]
            : filteredCharacters,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          actions.payload === "A"
            ? [...state.allCharacters].sort((a, b) => a.id - b.id)
            : [...state.allCharacters].sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
