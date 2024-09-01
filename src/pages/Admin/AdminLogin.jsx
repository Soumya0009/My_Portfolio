import React, { useState } from "react";
import "../CSS/AdminLogin.css"; // Import the custom CSS file
import { Outlet, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    let status;
    if (email === "soumya@123" && password === "unknown") {
      // Redirect to a different route upon successful login
      navigate("/dashboard"); 
      status = true;
    } else {
      console.info("Please enter a valid user ID and password!!!");
      status = false;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mt-5 login-card">
              <div className="card-body">
                <h3 className="card-title text-center">Admin Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control login-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control login-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminLogin;
