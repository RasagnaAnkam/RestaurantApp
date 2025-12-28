import { connect } from "react-redux";
import Header from "./Header";

const Orders = ({ list }) => {
  return (
    <div>
      <center>
        <Header />
        {list.length > 0 ? (
          <div className="container">
            <div className="row">
              {list.map((item) => (
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
                      <div className="card-text">
                        Billing Amount Rs. {item.prize}
                      </div>
                      <p>Table Number : {item.tablenumber}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          "No order placed yet"
        )}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.orderreducer,
  tablenumber: state.tablereducer.tablenumber,
});

export default connect(mapStateToProps)(Orders);
