const axios = require('axios');
const { EHR_API_BASE_URL, EHR_API_KEY } = require('../config/ehrConfig');

// Service for Electronic Health Record (EHR) integration
class EHRIntegrationService {
  // Method to fetch patient records from EHR system
  static async fetchPatientRecords(patientId) {
    try {
      // Make request to EHR API to fetch patient records
      const response = await axios.get(`${EHR_API_BASE_URL}/patients/${patientId}/records`, {
        headers: {
          'X-API-Key': EHR_API_KEY,
        },
      });

      // Extract patient records from response
      const patientRecords = response.data;

      return patientRecords;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EHRIntegrationService;

