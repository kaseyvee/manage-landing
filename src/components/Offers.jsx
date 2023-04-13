import data from "../data";

function Offers() {

  const offers = data.offers;

  const offersList = offers.map((offer, i) => {
    return (
      <div className="offers_list_item" key={i}>
        <div className="offers_list_item_header">
          <h2 className="button offers_list_item_header_number">
            0{i + 1}
          </h2>

          <h2 className="offers_list_item_header_title">
            {offer.header}
          </h2>
        </div>

        <p className="offers_list_item_description">
          {offer.description}
        </p>
      </div>
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

      <div className="offers_list">
        {offersList}
      </div>
    </div>
  );
}

export default Offers;