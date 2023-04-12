import { useState, useEffect } from "react";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [])

  function handleToggleNav() {
    if (navOpen) {
      return setNavOpen(false);
    }
    return setNavOpen(true);
  }

  return (
    <div className='nav'>
      <div className="nav_logo">
        <img
          src="logo.svg"
          alt="manage logo"
        />
      </div>

      <div
        className="nav_mobile-menu"
        onClick={handleToggleNav}
      >
        <img
          src={`icon-${navOpen ? "close" : "hamburger"}.svg`}
          alt="manage logo"
        />
      </div>

      {navOpen && <div className="nav_items">
        <a href="">Pricing</a>
        <a href="">Product</a>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Community</a>
      </div>}

      <button className="nav_button">Get Started</button>
    </div>
  );
}

export default Nav;