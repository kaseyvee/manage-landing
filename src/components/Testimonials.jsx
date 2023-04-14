import { useState } from "react";
import data from "../data";
import { motion } from "framer-motion";

function Testimonials() {
  const [selectedTest, setSelectedTest] = useState(0)

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
      <a
        style={selectedTest == i ? selectedStyle : {}}
        href={`#${i}`}
        key={i}
        onClick={() => setSelectedTest(i)}
      ></a>
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

      <div className="testimonials_list">
        {testimonialsList}
      </div>

      <div className="testimonials_carousel-nav">
        {carouselItems}
      </div>

      <button className="button button-primary">Get Started</button>
    </motion.div>
  );
}

export default Testimonials;