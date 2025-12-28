import { useState } from "react";
import { connect } from "react-redux";
import { settablenumber } from "../Actions/actions";

const Table = ({ tablenumber, settablenumber }) => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const inactivebtn = "btn btn-outline-primary m-2";
  const activebtn = "btn btn-outline-primary m-2 active";
  return (
    <div>
      <center>
        <h3>Please select your table number:</h3>

        {number.map((num, index) => (
          <div style={{ display: "inline" }} key={index}>
            <button
              className={tablenumber === num ? activebtn : inactivebtn}
              onClick={() => settablenumber(num)}
            >
              {num}
            </button>
          </div>
        ))}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tablenumber: state.tablereducer.tablenumber,
});
export default connect(mapStateToProps, { settablenumber })(Table);
