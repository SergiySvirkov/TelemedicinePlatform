const Appointment = require('../models/appointmentModel');
const User = require('../models/userModel');

// Controller for creating a new appointment
exports.createAppointment = async (req, res) => {
  try {
    // Extract appointment details from request body
    const { patientId, doctorId, date, reason } = req.body;

    // Check if patient and doctor exist
    const patient = await User.findById(patientId);
    const doctor = await User.findById(doctorId);
    if (!patient || !doctor) {
      return res.status(400).json({ error: 'Patient or doctor not found' });
    }

    // Create new appointment object
    const newAppointment = new Appointment({
      patientId,
      doctorId,
      date,
      reason,
    });

    // Save appointment to database
    await newAppointment.save();

    // Send response
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for fetching appointments
exports.getAppointments = async (req, res) => {
  try {
    // Fetch appointments from database
    const appointments = await Appointment.find();

    // Send response
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

