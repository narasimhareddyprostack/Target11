import React from "react";
import { Link } from "react-router-dom";
let Register = () => {
  return (
    <>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> SignUp Details</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="m-auto">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  <h4> New User Registration </h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="User Name"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="form-control btn btn-success"
                        value="Sign Up"
                      />
                    </div>
                  </form>

                  <Link to="/login"> Login </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
