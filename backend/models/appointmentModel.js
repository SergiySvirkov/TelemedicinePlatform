const mongoose = require('mongoose');

// Define the schema for the Appointment model
const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

// Define and export the Appointment model
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;

