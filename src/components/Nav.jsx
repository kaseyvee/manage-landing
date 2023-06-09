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
          onClick={handleToggleNav}
        >
          <img
            src={`icon-${navOpen ? "close" : "hamburger"}.svg`}
            alt="manage logo"
          />
        </button>}

        {(navOpen || isDesktop) &&
          <motion.ul
            className="nav_container_items"
            animate={{ y: [10, 0], opacity: [0, 1] }}
          >
            <li><a href="">Pricing</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Community</a></li>
          </motion.ul>
        }

        <button className="button button-primary nav_container_button">Get Started</button>

      </div>
      
      {navOpen && <div className="nav_overlay"></div>}
    </nav>
  );
}

export default Nav;