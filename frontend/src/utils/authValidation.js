// validation.js

export const validateLogin = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return "Email field is required.";
  }

  if (!password) {
    return "Password field is required.";
  }

  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }

  if (password.length < 2) {
    return "Password must be at least 2 characters long.";
  }

  return null;
};

export const validateSignup = (username, email, password, confirmPassword) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!username) {
    return "Username field is required.";
  }

  if (!email) {
    return "Email field is required.";
  }

  if (!password) {
    return "Password field is required.";
  }

  if (!confirmPassword) {
    return "Confirm password field is required.";
  }

  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }

  if (password.length < 2) {
    return "Password must be at least 2 characters long.";
  }

  if (password !== confirmPassword) {
    return "Confirm password must be equal password";
  }

  return null;
};
