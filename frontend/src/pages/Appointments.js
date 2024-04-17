import React, { useState, useEffect } from 'react';
import appointmentService from '../services/appointmentService';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments when component mounts
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsData = await appointmentService.getAllAppointments();
        setAppointments(appointmentsData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <div>Date: {appointment.date}</div>
            <div>Time: {appointment.time}</div>
            <div>Doctor: {appointment.doctor}</div>
            <div>Patient: {appointment.patient}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
