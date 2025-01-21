import React, { useState } from "react";
import "../../CSS/AdminLogin.css";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../Services/user-service";
import { doLogin } from "../../auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material"; // Add CircularProgress

const AdminLogin = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event, field) => {
    const actualValue = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (loginDetails.username === "" || loginDetails.password === "") {
      toast.error("Username and Password are required!");
      return;
    }

    setIsLoading(true);

    loginUser(loginDetails)
      .then((data) => {
        toast.success("Login Success");
        doLogin(data, () => {
          navigate("/admin");
        });
        setLoginDetails({ username: "", password: "" });
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred. Please try again later.";
        toast.error(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={loginDetails.username}
              onChange={(e) => handleChange(e, "username")}
              className="login-input"
            />
          </div>
          <div className="form-group">
            <TextField
              type={isPasswordVisible ? "text" : "password"}
              label="Password"
              variant="outlined"
              fullWidth
              value={loginDetails.password}
              onChange={(e) => handleChange(e, "password")}
              className="login-input"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setPasswordVisible(!isPasswordVisible)}
                      edge="end"
                    >
                      {isPasswordVisible ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <button type="submit" className="btn-login" disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={24} style={{ color: "white" }} />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminLogin;
