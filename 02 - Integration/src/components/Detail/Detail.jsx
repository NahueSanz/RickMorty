import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <img src={character.image && character.image} alt="" />
      <h1>Nombre: "{character.name && character.name}"</h1>
      <h1>Estado: "{character.status && character.status}"</h1>
      <h1>Especie: {character.species && character.species}</h1>
      <h1>Genero: "{character.gender && character.gender}"</h1>
      <h1>Origen: "{character.origin?.name && character.origin?.name}"</h1>
    </div>
  );
};

export default Detail;
