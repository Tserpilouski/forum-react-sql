// validation.js

export const validateLogin = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const alphanumericRegex = /^[a-zA-Z0-9@.]+$/;

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

  if (!alphanumericRegex.test(password)) {
    return "Field should contain only letters and numbers.";
  }

  if (!alphanumericRegex.test(email)) {
    return "Field should contain only letters and numbers.";
  }

  return null;
};

export const validateSignup = (username, email, password, confirmPassword) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const alphanumericRegex = /^[a-zA-Z0-9@.]+$/;

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

  if (!alphanumericRegex.test(password)) {
    return "Field should contain only letters and numbers.";
  }

  if (!alphanumericRegex.test(email)) {
    return "Field should contain only letters and numbers.";
  }

  return null;
};
