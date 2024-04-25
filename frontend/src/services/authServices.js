import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;

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
