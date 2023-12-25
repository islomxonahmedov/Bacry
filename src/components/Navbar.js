import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleNavbar}>Menu<FaBars /></div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="brend">OurBrend</Link>
        <Link to="/use">AboutUse</Link>
      </div>
      <Link className="navbar-logo" to="/">TARTINE</Link>
      < button className="button">Order</ button>
    </nav>
  )
}

export default Navbar