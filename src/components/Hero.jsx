function Hero() {
  return (
    <div className='hero'>
      <div className="hero_main">
        <h1 className="hero_main_header">
          Bring everyone together to build better products.
        </h1>

        <p className="hero_main_description">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </p>

        <button className="button button-primary hero_main_button">Get Started</button>
      </div>

      <div className='hero_image'>
        <img
          src="illustration-intro.svg"
          alt="variety of charts"
        />
      </div>
    </div>
  );
}

export default Hero;