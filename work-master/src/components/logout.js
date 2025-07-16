import React from "react";

const Logout = () => {
  // Clear specific item from localStorage if you have a token
  localStorage.clear();

  // Redirect to the home page
  window.location.href = "/";

  // This component doesn't render anything, so you can return null
  return null;
};

export default Logout;
