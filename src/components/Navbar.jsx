import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <div className="logo-icon">RC</div>
        <div>
          <h3>Renardo</h3>
          <p>Christian</p>
        </div>
      </a>

      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#works">Works</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#testimonials">Reviews</a>
        <a href="#bts">Behind</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-btn">
        Let’s Talk
      </a>

      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#works" onClick={closeMenu}>Works</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#testimonials" onClick={closeMenu}>Reviews</a>
        <a href="#bts" onClick={closeMenu}>Behind</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <a href="#contact" className="mobile-btn" onClick={closeMenu}>
          Let’s Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;