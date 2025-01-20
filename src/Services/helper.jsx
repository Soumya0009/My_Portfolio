import axios from "axios";

// Base URL of the backend API
// export const BASE_URL = "http://localhost:9090";
export const BASE_URL =
  "https://myportfoliobackend-production-7e78.up.railway.app";

// Create public axios instance
export const myAxios = axios.create({
  baseURL: BASE_URL,
});

// Create private axios instance
export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

// Add request interceptor to privateAxios to include the token
privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken(); // Get token from local storage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Interceptor error:", error);
    return Promise.reject(error);
  }
);

// Get token from local storage
export const getToken = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data).token : null;
};

// import axios from "axios";
// import { getToken } from "../auth";

// export const BASE_URL = "http://localhost:9090";

// // Create public axios instance
// export const myAxios = axios.create({
//   baseURL: BASE_URL,
// });

// // Create private axios instance
// export const privateAxios = axios.create({
//   baseURL: BASE_URL,
// });

// // Add request interceptor to privateAxios
// privateAxios.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     console.log("Token:", token);

//     // If token exists, add Authorization header
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config; // Always return the config
//   },
//   (error) => {
//     console.error("Interceptor error:", error);
//     return Promise.reject(error); // Forward error for further handling
//   }
// );
