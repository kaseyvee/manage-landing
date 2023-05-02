import data from "../data";
import { motion } from "framer-motion";

function Offers() {

  const offers = data.offers;

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      x: [100, 0],
      transition: {
        duration: 1.5
      }
    }
  }

  const offersList = offers.map((offer, i) => {
    return (
      <motion.div
        className="offers_list_item"
        key={i}
        variants={itemVariants}
      >
        <div className="offers_list_item_header">
          <h2 className="offers_list_item_header_number">
            0{i + 1}
          </h2>

          <h2 className="offers_list_item_header_title">
            {offer.header}
          </h2>
        </div>

        <p className="offers_list_item_description">
          {offer.description}
        </p>
      </motion.div>
    )
  })

  return (
    <div className="offers">
      <div className="offers_main">
        <h1 className="offers_main_header">
          What's different about Manage?
        </h1>

        <p className="offers_main_description">
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
        </p>
      </div>

      <motion.div
        className="offers_list"
        viewport={{ once: true }}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {offersList}
      </motion.div>
    </div>
  );
}

export default Offers;