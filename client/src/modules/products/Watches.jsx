import React from "react";
import imageOne from "../../assets/img/products/watches/watch_1.jpg";
import imageTwo from "../../assets/img/products/watches/watch_2.jpg";
import imageThree from "../../assets/img/products/watches/watch_3.jpg";
import imageFour from "../../assets/img/products/watches/watch_4.jpg";

let Watches = () => {
  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Watches - Trending</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white">
                  <img
                    src={imageOne}
                    alt="Rolex Watch"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Redux Watch</li>
                    <li className="list-group-item">6000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white">
                  <img
                    src={imageTwo}
                    alt="Rolex Watch"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Sonata Watch</li>
                    <li className="list-group-item">2000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white">
                  <img
                    src={imageThree}
                    alt="Rolex Watch"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Titan Watch</li>
                    <li className="list-group-item">10000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white">
                  <img
                    src={imageFour}
                    alt="Rolex Watch"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Timex Watch</li>
                    <li className="list-group-item">1000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Watches;
