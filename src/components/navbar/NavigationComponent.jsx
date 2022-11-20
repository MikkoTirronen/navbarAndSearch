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
    <nav className="NAVIGATION">
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
      <div>
        <ul
          className={`MainMenu ${searchBarOpen ? "show_menu" : "close_menu"}`}
        >
          <li>
            <form>
              <input type="text" placeholder="Search..."></input>
              <input type="submit" value="Search"></input>
            </form>
          </li>
        </ul>
      </div>

      <ul className={`MainMenu ${navBarOpen ? "show_menu" : "close_menu"} `}>
        <div className="Menu btn:hover a-link:hover">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <button onClick={handleSubMenuToggle}>Services</button>
            <DropDownIcon />
          </li>
          <div className="apply_transition">
            <ul
              className={`MainMenu ${
                subMenuOpen ? "show_menu" : "close_menu"
              } SubMenu`}
            >
              <li>
                <a href="/">service 1</a>
              </li>
              <li>
                <a href="/">service 2</a>
              </li>
              <li>
                <a href="/">service 3</a>
              </li>
            </ul>
          </div>
          <li className={`${subMenuOpen ? "show_menu move_down" : ""} `}>
            <a href="/">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
