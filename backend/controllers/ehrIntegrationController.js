const axios = require('axios');
const { EHR_API_BASE_URL, EHR_API_KEY } = require('../config/ehrConfig');

// Controller for fetching patient records from EHR system
exports.fetchPatientRecords = async (req, res) => {
  try {
    // Extract patientId from request parameters
    const { patientId } = req.params;

    // Make request to EHR API to fetch patient records
    const response = await axios.get(`${EHR_API_BASE_URL}/patients/${patientId}/records`, {
      headers: {
        'X-API-Key': EHR_API_KEY,
      },
    });

    // Extract patient records from response
    const patientRecords = response.data;

    // Send response with patient records
    res.json(patientRecords);
  } catch (error) {
    console.error('Error fetching patient records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

