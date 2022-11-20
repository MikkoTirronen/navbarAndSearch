import React, { useState } from "react";
import SearchIcon from "./components/SearchIcon";
import HamburgerIcon from "./components/HamburgerIcon";

export default function NavbarComponent() {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleNavToggle = () => {
    if (searchBarOpen) {
      setSearchBarOpen(false);
    }
    setNavBarOpen((prev) => !prev);
  };
  const handleSearchToggle = () => {
    if (navBarOpen) {
      setNavBarOpen(false);
    }
    setSearchBarOpen((prev) => !prev);
  };
  const handleSubMenuToggle = () => {
    if (subMenuOpen) {
      setSearchBarOpen(false);
    }
    setSubMenuOpen((prev) => !prev);
  };

  return (
    <nav className="Navbar">
      <input
        type="checkbox"
        className="SearchIcon"
        onClick={handleSearchToggle}
      ></input>

      <div className="iconContainer">
        <div>
          <button onClick={handleSearchToggle}>
            <SearchIcon />
          </button>
        </div>
        <div>
          <button onClick={handleNavToggle}>
            <HamburgerIcon />
          </button>
        </div>
      </div>
      <ul className={`menuNav ${searchBarOpen ? "showMenu" : "closeMenu"}`}>
        <li>
          <form>
            <input type="text" placeholder="Search..."></input>
            <input type="submit" value="Search"></input>
          </form>
        </li>
      </ul>
    
      <ul className={`menuNav ${navBarOpen ? "showMenu" : "closeMenu"} `}>
        <div className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <button onClick={handleSubMenuToggle}>
            Services
            </button>
          </li>
          <div>
   
            <ul className={`menuNav ${subMenuOpen ? "showMenu" : "closeMenu"} subMenu` }>
              <li>service 1</li>
              <li>service 2</li>
              <li>service 3</li>
            </ul>
          </div>
          <li className={`${subMenuOpen ? "showMenu moveDown" : ""}`}>
            <a href="/">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
