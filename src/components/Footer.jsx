import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

function Footer() {
  const [message, setMessage] = useState("");
  const email = useRef();

  function handleOnSubmit(e) {
    e.preventDefault();

    const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.current.value.match(valid)) {
      return setMessage("You have subscribed to updates :)");
    }
    return setMessage("Please insert a valid email");
  }

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_container_subscribe">
          <form
            className="footer_container_subscribe_form"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              placeholder="Updates in your inbox..."
              ref={email}
            />
            <button className="button button-primary">GO</button>
          </form>

          {message &&
            <motion.p
              className={`footer_container_subscribe_message${message === "Please insert a valid email" ? "-error" : ""}`}
              animate={{ x: [-10, 0], opacity: [0, 1] }}
            >
              {message}
            </motion.p>
          }
        </div>

        <div className="footer_container_items">
          <div className="footer_container_items_left">
            <a href="">Home</a>
            <a href="">Pricing</a>
            <a href="">Products</a>
            <a href="">About Us</a>
          </div>
          <div className="footer_container_items_right">
            <a href="">Careers</a>
            <a href="">Community</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>

        <div className="footer_container_socials">
          <a href="">
            <img src="icon-facebook.svg" alt="facebook icon" />
          </a>
          <a href="">
            <img src="icon-youtube.svg" alt="youtube icon" />
          </a>
          <a href="">
            <img src="icon-twitter.svg" alt="twitter icon" />
          </a>
          <a href="">
            <img src="icon-pinterest.svg" alt="pinterest icon" />
          </a>
          <a href="">
            <img src="icon-instagram.svg" alt="instagram icon" />
          </a>
        </div>

        <div className="footer_container_logo">
          <img src="logo-footer.svg" alt="manage logo" />
        </div>

        <p className="footer_container_copyright">Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;