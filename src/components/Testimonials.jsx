import data from "../data";

function Testimonials() {

  const testimonials = data.testimonials;

  const testimonialsList = testimonials.map((testimonial) => {
    return (
      <div className="testimonials_list_item">
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

  return (
    <div className="testimonials">
      <h1 className="testimonials_header">
        What they've said
      </h1>

      <div className="testimonials_list">
        {testimonialsList}
      </div>

      <button className="button button-primary">Get Started</button>
    </div>
  );
}

export default Testimonials;