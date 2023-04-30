import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import data from "../data";

function Testimonials() {
  const [selectedTest, setSelectedTest] = useState(0);
  const [transition, setTransition] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  const selectedStyle = {
    backgroundColor: "hsl(12, 88%, 59%)"
  }
  const selectedTransition = 0.5;

  const testimonials = data.testimonials;

  const testimonialsList = testimonials.map((testimonial, i) => {
    return (
      <div
        className="testimonials_list_item"
        key={i}
        aria-label={`testimonial ${i + 1} out of ${testimonials.length}`}
      >
        <div className="testimonials_list_item_image">
          <img src={testimonial.image} alt="" />
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
    function handleNextTestimonial() {
      if (i === selectedTest) return;
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
        setSelectedTest(i);
      }, selectedTransition * 1000)
    }
    return (
      <button
        style={selectedTest == i ? selectedStyle : { backgroundColor: "transparent"}}
        href={`#${i}`}
        key={i}
        onClick={handleNextTestimonial}
        aria-label={`see testimonial ${i + 1} out of ${testimonials.length}`}
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

      <div className="testimonials_list" tabIndex="0" aria-label="testimonial carousel">
        {isDesktop && testimonialsList}
        {!isDesktop &&
        <motion.div
          className="testimonials_list_item"
          viewport={{ once: true}}
          animate={transition ? {
            x: [0, -100, -150],
            opacity: [1, 0, 0]
          }
            : 
          {
            opacity: [0, 0, 1]
          }}
          transition={{ duration: selectedTransition }}
        >
          <div className="testimonials_list_item_image">
            <img src={testimonials[selectedTest].image} alt={`headshot of ${testimonials[selectedTest].name}`} />
          </div>

          <h2 className="testimonials_list_item_name">
            {testimonials[selectedTest].name}
          </h2>

          <p className="testimonials_list_item_testimony">
            {testimonials[selectedTest].testimony}
          </p>
        </motion.div>}
      </div>

      {!isDesktop && <div className="testimonials_carousel-nav">
        {carouselItems}
      </div>}

      <button className="button button-primary">Get Started</button>
    </motion.div>
  );
}

export default Testimonials;