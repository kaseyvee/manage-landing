import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

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

        {!isDesktop && <button
          className="nav_container_mobile-menu"
          // tabIndex="0"
          onClick={handleToggleNav}
        >
          <img
            src={`icon-${navOpen ? "close" : "hamburger"}.svg`}
            alt="manage logo"
          />
        </button>}

        {(navOpen || isDesktop) &&
          <motion.div
            className="nav_container_items"
            animate={{ y: [10, 0], opacity: [0, 1] }}
          >
            <a href="">Pricing</a>
            <a href="">Product</a>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Community</a>
          </motion.div>
        }

        <button className="button button-primary nav_container_button">Get Started</button>

      </div>
      
      {navOpen && <div className="nav_overlay"></div>}
    </nav>
  );
}

export default Nav;