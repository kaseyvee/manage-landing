function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_container_subscribe">
          <input
            type="email"
            placeholder="Updates in your inbox..."
          />
          <button className="button button-primary">GO</button>
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
          <img src="icon-facebook.svg" alt="facebook icon" />
          <img src="icon-youtube.svg" alt="youtube icon" />
          <img src="icon-twitter.svg" alt="twitter icon" />
          <img src="icon-pinterest.svg" alt="pinterest icon" />
          <img src="icon-instagram.svg" alt="instagram icon" />
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