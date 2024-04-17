const express = require('express');
const router = express.Router();
const ehrIntegrationController = require('../controllers/ehrIntegrationController');

// Route for fetching patient records from EHR system
router.get('/patients/:patientId/records', ehrIntegrationController.fetchPatientRecords);

module.exports = router;

