import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { aniadirFavorito, eliminarFavorito } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(eliminarFavorito(props.id));
    } else {
      setIsFav(true);
      dispatch(aniadirFavorito(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} border-animation`}
      onClick={handleClick}
    >
      <div className="front">
        <img src={props.image} alt="" />
      </div>
      <div className="back">
        {isFav ? (
          <button className="fav-button" onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className="fav-button" onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className="buttonClose" onClick={() => props.onClose(props.id)}>
          X
        </button>
        <Link className="linkNombre" to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <h2>{props.status}</h2>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
        <h2>{props.origin}</h2>
        <h2>{props.id}</h2>
      </div>
    </div>
  );
}

export default Card;
