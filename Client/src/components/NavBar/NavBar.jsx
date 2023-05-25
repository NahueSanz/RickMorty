import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <Link to="/home">
        <button className="btnNavBar">Home</button>
      </Link>
      <Link to="/favorites">
        <button className="btnNavBar">Favorites</button>
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/about">
        <button className="btnNavBar">About</button>
      </Link>
      <Link to="/">
        <button onClick={props.logOut} className="btnNavBar">
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
