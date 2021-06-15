import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadProductAction } from "../../redux/products/product.action";
let Upload = () => {
  let dispatch = useDispatch();
  let [product, setProduct] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    qty: "",
    category: "",
    desc: "",
    usage: "",
  });

  let inputHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    dispatch(uploadProductAction(product));
    event.preventDefault();
  };
  return (
    <>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3> Upload Products - By Admin</h3>
            </div>
          </div>
        </div>
      </section>
      <pre>{JSON.stringify(product)}</pre>
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h4> Upload Products</h4>
                </div>

                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={inputHandler}
                        value={product.name}
                        placeholder="Product Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="brand"
                        onChange={inputHandler}
                        value={product.brand}
                        placeholder="Brand Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        onChange={inputHandler}
                        value={product.price}
                        placeholder="Price"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="qty"
                        onChange={inputHandler}
                        value={product.qty}
                        placeholder="QTY"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        placeholder="Product Image"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="category"
                        onChange={inputHandler}
                      >
                        <option value="">Select Category</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Watches">Watches</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="desc"
                        onChange={inputHandler}
                        value={product.desc}
                        placeholder="Product Description"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="usage"
                        onChange={inputHandler}
                        value={product.usage}
                        placeholder="Product Usage"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="form-control btn btn-success"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Upload;
