import { motion } from "framer-motion";

function Hero() {
  return (
    <div className='hero'>
      <motion.div
        className="hero_main"
        animate={{ x: [-100, 0], opacity: [0, 1] }}
      >
        <h1 className="hero_main_header">
          Bring everyone together to build better products.
        </h1>

        <p className="hero_main_description">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </p>

        <button className="button button-primary hero_main_button">Get Started</button>
      </motion.div>

      <motion.div
        className='hero_image'
        animate={{ x: [100, 0], opacity: [0, 1] }}
      >
        <img
          src="illustration-intro.svg"
          alt="variety of charts"
        />
      </motion.div>
    </div>
  );
}

export default Hero;