import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

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
    <nav className='nav'>
      <div className="nav_container">
        <img
          className="nav_container_logo"
          src="logo-nav.svg"
          alt="manage logo"
        />

        {!isDesktop && <div
          className="nav_container_mobile-menu"
          onClick={handleToggleNav}
        >
          <img
            src={`icon-${navOpen ? "close" : "hamburger"}.svg`}
            alt="manage logo"
          />
        </div>}

        {(navOpen || isDesktop) && <div className="nav_container_items">
          <a href="">Pricing</a>
          <a href="">Product</a>
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Community</a>
        </div>}

        <button className="button button-primary nav_container_button">Get Started</button>

      </div>
    </nav>
  );
}

export default Nav;