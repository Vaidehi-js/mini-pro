import { Formik } from "formik";
import React from "react";

const Plugin = () => {
  const subscribe = (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <div className="col-md-4 mx-auto">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h1>Subscribe to newsletter</h1>
            <Formik
              onSubmit={subscribe}
              initialValues={{ ownerid: '', username: "", email: "" }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <label>Fullname</label>
                  <input
                    className="form-control mb-4"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    required
                  />
                  <label>Email</label>
                  <input
                    className="form-control mb-4"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />

                  <button className="btn btn-danger">Subscribe</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plugin;
