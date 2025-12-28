import { useState } from "react";
import { connect } from "react-redux";
import { setfilter, resetfilter } from "../Actions/actions";

const Filter = ({ filter_name, setfilter, resetfilter }) => {
  const items = [
    "All Items",
    "Rice Items",
    "Cool Drinks",
    "Pizza",
    "Hot Drinks",
  ];
  return (
    <div>
      <center className="mt-2">
        <span className="h5 m-2">Filter:</span>
        <select onChange={(e) => setfilter(e.target.value)}>
          {items.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter_name: state.filterreducer.filter_name,
});
export default connect(mapStateToProps, { setfilter, resetfilter })(Filter);
