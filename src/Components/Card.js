import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addorder, resetfilter, resettablenumber } from "../Actions/actions";

const Card = ({
  filter_name,
  tablenumber,
  addorder,
  resetfilter,
  resettablenumber,
}) => {
  const [data, setData] = useState([]);
  const [cloneData, setCloneData] = useState([]);
  useEffect(() => {
    fetch(
      "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
        setCloneData(json.items);
      });
  }, []);

  useEffect(() => {
    if (filter_name != "All Items") {
      let specific = cloneData.filter((item) => item.category === filter_name);
      setData(specific);
    } else {
      setData(cloneData);
    }
  }, [filter_name]);

  const Handler = async (id, name, prize, url) => {
    if (tablenumber != null) {
      await addorder(id, name, prize, tablenumber, url);
      await resettablenumber();
      await resetfilter();
      alert("Order Placed successfully!");
    } else {
      alert("Please select table number");
    }
  };
  return (
    <div>
      {data.length > 0 ? (
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div
                className="col-md-4"
                style={{ padding: "5px" }}
                key={item.id}
              >
                <div
                  className="card"
                  style={{ width: "35rem", padding: "3px" }}
                >
                  <img src={item.url} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="card-text">Rs. {item.prize}</div>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        Handler(item.id, item.name, item.prize, item.url)
                      }
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        "Data not found"
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter_name: state.filterreducer.filter_name,
  tablenumber: state.tablereducer.tablenumber,
});
export default connect(mapStateToProps, {
  addorder,
  resetfilter,
  resettablenumber,
})(Card);
