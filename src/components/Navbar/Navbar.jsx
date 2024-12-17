import "./Navbar.css";
import React from "react";
import { useState ,useEffect} from "react";

import logo from "../../assets/logo.png";
import Icons from "../utilsComponenets/Icons";

import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const Navbar = () => {
  const [select, setSelect] = useState("Home");
  const [search, setSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(menuOpen);

  const handleClick = (e) => {
    // console.log(e.target.innerText);
    setSelect(e.target.innerText);
  };
  const handleSearch = () => {
    setSearch(!search);
    setMenuOpen(false);
  };
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearch(false);
  };

  const [scrolled, setScrolled] = useState(false);
console.log(scrolled);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <>
      <div className={`Navbar ${menuOpen?"black":""} ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">
          <div className="logo">
            <img
              src={logo}
              width={"145px"}
              height={"23px"}
              // src="../../assets/The_IMG_Media_broadcasting_company_logo.png"
              alt="logo"
            />
          </div>
          <div className="nav-items">
            <div
              className={`nav-links .nav-display-none ${
                menuOpen ? "" : "nav-display-none"
              }`}
            >
              <a
                href="#"
                onClick={handleClick}
                className={select === "Home" ? "active" : ""}
              >
                Home
              </a>
              <a
                href="#"
                className={select === "Hardware" ? "active" : ""}
                onClick={handleClick}
              >
                Hardware
              </a>
              <a
                href="#"
                className={select === "Software" ? "active" : ""}
                onClick={handleClick}
              >
                Software
              </a>
              <a
                href="#"
                className={select === "Community" ? "active" : ""} // add active class if current tab is active
                onClick={handleClick}
              >
                Community
              </a>
              <a
                href="#"
                className={select === "Store" ? "active" : ""} // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if
                onClick={handleClick}
              >
                Store
              </a>
              <a
                href="#"
                className={select === "Support" ? "active" : ""} // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if current tab is active  // add active class if
                onClick={handleClick}
              >
                Support
              </a>
            </div>

            <div className="nav-icons">

              {/* Search Icons */}
              <div
                className={`search-icon icon ${search ? "display-none" : ""}`}
                onClick={handleSearch}
              >
                <SearchIcon />
              </div>
              <div
                className={`search-icon search-off-icon icon green ${
                  !search ? "display-none" : ""
                }`}
                onClick={handleSearch}
              >
                <SearchOffIcon />

                {search && (
                  <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                  </div>
                )}
              </div>


              {/* MenuIcon */}

              <div className=" icon MenuIcon">
                {menuOpen ? (
                  <MenuOpenIcon
                    className="green"
                    onClick={handleMenu}
                  />
                ) : (
                  <MenuIcon onClick={handleMenu} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
