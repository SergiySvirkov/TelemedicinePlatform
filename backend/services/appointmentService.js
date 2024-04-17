const Appointment = require('../models/appointmentModel');

// Service for appointment-related operations
class AppointmentService {
  // Method to create a new appointment
  static async createAppointment(patientId, doctorId, date, reason) {
    try {
      // Create new appointment object
      const newAppointment = new Appointment({
        patientId,
        doctorId,
        date,
        reason,
      });

      // Save appointment to database
      await newAppointment.save();

      return newAppointment;
    } catch (error) {
      throw error;
    }
  }

  // Method to fetch all appointments
  static async getAppointments() {
    try {
      // Fetch appointments from database
      const appointments = await Appointment.find();

      return appointments;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AppointmentService;
