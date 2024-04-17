const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Route for creating a new appointment
router.post('/', appointmentController.createAppointment);

// Route for fetching all appointments
router.get('/', appointmentController.getAppointments);

module.exports = router;

