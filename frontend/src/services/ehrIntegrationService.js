import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Base URL of the backend API

const ehrIntegrationService = {
  // Method for fetching patient records from EHR system
  fetchPatientRecords: async (patientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/ehr/records/${patientId}`);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  }
};

export default ehrIntegrationService;

