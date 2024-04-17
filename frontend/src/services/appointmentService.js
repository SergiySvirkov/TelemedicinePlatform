import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Base URL of the backend API

const appointmentService = {
  // Method for creating a new appointment
  createAppointment: async (appointmentData) => {
    try {
      const response = await axios.post(`${BASE_URL}/appointments`, appointmentData);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  },

  // Method for fetching all appointments
  getAllAppointments: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/appointments`);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  }
};

export default appointmentService;

