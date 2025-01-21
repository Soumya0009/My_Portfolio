// Check if logged in
export const isLogedIn = () => {
  let data = localStorage.getItem("data");

  // Return true if data exists in local storage, otherwise false
  return data != null;
};

// Do login and set in local storage
export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data)); // Store user data in localStorage
  next();
};

// Do logout and remove from local storage
export const doLogout = (next) => {
  localStorage.removeItem("data"); // Remove user data from localStorage
  next();
};

// Get current user details
export const getCurrentUserDetails = () => {
  if (isLogedIn()) {
    // Call isLogedIn correctly to check login status
    return JSON.parse(localStorage.getItem("data")); // Retrieve and return user data
  } else {
    return undefined; // Return false if not logged in
  }
};

// export const getCurrentUserDetails = () => {
//   const userStr = localStorage.getItem("user");

//   if (userStr) {
//     try {
//       const user = JSON.parse(userStr);
//       // console.log("User details from localStorage:", user);
//       return user;
//     } catch (error) {
//       console.error("Error parsing user data from localStorage:", error);
//     }
//   }

//   return null;
// };

// Get token
export const getToken = () => {
  if (isLogedIn()) {
    return JSON.parse(localStorage.getItem("data")).token; // Retrieve token from stored user data
  } else {
    return null; // Return null if not logged in
  }
};
