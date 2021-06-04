import React from "react";
import imageOne from "../../assets/img/products/laptops/acer.jpeg";
import imageTwo from "../../assets/img/products/laptops/hp.jpeg";
import imageThree from "../../assets/img/products/laptops/hp-original.jpeg";
import imageFour from "../../assets/img/products/laptops/nokia.jpeg";

let Laptop = () => {
  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Trending Laptops</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-4">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={imageOne}
                    alt="Oppo Laptop"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Oppo Laptop</li>
                    <li className="list-group-item">25000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={imageTwo}
                    alt="Redi Laptop"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Redmi Laptop</li>
                    <li className="list-group-item">5000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={imageThree}
                    alt="Oppo Laptop"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Poco Laptop</li>
                    <li className="list-group-item">35000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={imageFour}
                    alt="Samsung Laptop"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Samsung Laptop</li>
                    <li className="list-group-item">25000</li>
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
export default Laptop;
