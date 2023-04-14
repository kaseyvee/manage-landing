import { motion } from "framer-motion";

function BottomBanner() {
  return (
    <motion.div
      className="bottom-banner"
      viewport={{ once: true }}
      whileInView={{ scaleY: [0, 1] }}
    >
      <div className="bottom-banner_container">
        <h1 className="bottom-banner_container_header">
          Simplify how your team works today.
        </h1>

        <button className="button button-secondary">
          Get Started
        </button>
      </div>
    </motion.div>
  );
}

export default BottomBanner;