import axios from "axios";

export const loginServ = async (userData) => {
  try {
    const response = await axios.post("http://localhost:8081/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post("http://localhost:8081/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
