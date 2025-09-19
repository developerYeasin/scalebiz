"use client";

import axios from "axios";
import { getToken, logout } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1", // Base URL for your backend API
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add the auth token
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 Unauthorized errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // If 401 Unauthorized, log out the user
      logout();
      // Redirect to login page (you might want to use a toast here too)
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;