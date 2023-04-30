import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import data from "../data";

function Testimonials() {
  const [selectedTest, setSelectedTest] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  const selectedStyle = {
    backgroundColor: "hsl(12, 88%, 59%)"
  }

  const testimonials = data.testimonials;

  const testimonialsList = testimonials.map((testimonial, i) => {
    return (
      <div
        className="testimonials_list_item"
        id={i}
        key={i}
      >
        <div className="testimonials_list_item_image">
          <img src={testimonial.image} alt={`headshot of ${testimonial.name}`} />
        </div>

        <h2 className="testimonials_list_item_name">
          {testimonial.name}
        </h2>

        <p className="testimonials_list_item_testimony">
          {testimonial.testimony}
        </p>
      </div>
    )
  })

  const carouselItems = testimonials.map((testimonial, i) => {
    return (
      <button
        style={selectedTest == i ? selectedStyle : { backgroundColor: "transparent"}}
        href={`#${i}`}
        key={i}
        onClick={() => setSelectedTest(i)}
        aria-label={`testimonial ${i + 1} out of ${testimonials.length}`}
      ></button>
    )
  })

  return (
    <motion.div
      className="testimonials"
      viewport={{ once: true }}
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
    >
      <h1 className="testimonials_header">
        What they've said
      </h1>

      <div className="testimonials_list" tabIndex="0">
        {isDesktop && testimonialsList}
        {!isDesktop && <div className="testimonials_list_item">
          <div className="testimonials_list_item_image">
            <img src={testimonials[selectedTest].image} alt={`headshot of ${testimonials[selectedTest].name}`} />
          </div>

          <h2 className="testimonials_list_item_name">
            {testimonials[selectedTest].name}
          </h2>

          <p className="testimonials_list_item_testimony">
            {testimonials[selectedTest].testimony}
          </p>
        </div>}
      </div>

      {!isDesktop && <div className="testimonials_carousel-nav">
        {carouselItems}
      </div>}

      <button className="button button-primary">Get Started</button>
    </motion.div>
  );
}

export default Testimonials;