import data from "../data";
import { motion } from "framer-motion";

function Offers() {

  const offers = data.offers;

  const offersList = offers.map((offer, i) => {
    return (
      <motion.div
        className="offers_list_item"
        key={i}
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 * i }}
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
      <motion.div
        className="offers_main"
        viewport={{ once: true }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      >
        <h1 className="offers_main_header">
          What's different about Manage?
        </h1>

        <p className="offers_main_description">
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
        </p>
      </motion.div>

      <div className="offers_list">
        {offersList}
      </div>
    </div>
  );
}

export default Offers;