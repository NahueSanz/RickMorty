import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards, getFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import "./Favorites.css";

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  useEffect(() => {
    dispatch(getFav());
  }, [dispatch]);
  return (
    <div>
      <div className="select-menu">
        <select onChange={handleOrder}>
          <option>Ordenar por id</option>
          <option value="A"> Ascendente</option>
          <option value="D"> Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="none">Ordenar por genero</option>
          <option value="Male"> Hombre</option>
          <option value="Female"> Mujer</option>
          <option value="Genderless"> Sin genero</option>
          <option value="unknown"> Desconocido</option>
        </select>
      </div>
      <div className="cardHolder">
        {myFavorites.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
