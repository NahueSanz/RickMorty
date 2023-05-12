import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const showNav = useLocation().pathname !== "/";
  const [character, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "nahue.p.sanz@gmail.com";
  const PASSWORD = "asdASD123@";

  function logIn(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logOut() {
    setAccess(false);
    navigate("/");
  }
  function repetido(id) {
    return character.some((char) => char.id === id);
  }
  function onSearch(id) {
    if (isNaN(id)) {
      return window.alert("Por favor, ingrese un número válido.");
    }
    if (id > 826) return window.alert("¡No hay personajes con este ID!");
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && !repetido(data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          return window.alert("Es repetido");
        }
      }
    );
  }
  function onClose(id) {
    const charactersFiltrados = character.filter((value) => {
      if (parseInt(id) !== value.id) return true;
      return false;
    });
    setCharacters(charactersFiltrados);
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {showNav && <NavBar onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path="/" element={<Form logIn={logIn} />} />
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/home"
          element={<Cards characters={character} onClose={onClose} />}
        ></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
