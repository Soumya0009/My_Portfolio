import { myAxios } from "./helper";

export const loginUser = (loginDetails) => {
  return myAxios
    .post("/api/v1/auth/login", loginDetails)
    .then((response) => {
      // console.log("Login successful:", response.data);
      return response.data; // Return response data on success
    })
    .catch((error) => {
      console.error("Login failed:", error.response?.data || error.message);
      throw error; // Rethrow error for further handling in components
    });
};
