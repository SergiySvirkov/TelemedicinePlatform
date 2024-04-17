import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Base URL of the backend API

const userService = {
  // Method for user registration
  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  },

  // Method for user login
  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  },

  // Method for fetching user profile
  getProfile: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/profile`);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  },

  // Method for logging out user
  logout: async () => {
    try {
      await axios.post(`${BASE_URL}/auth/logout`);
    } catch (error) {
      throw error.response.data.error;
    }
  }
};

export default userService;
