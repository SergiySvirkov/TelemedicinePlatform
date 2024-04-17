import React, { useState } from 'react';
import appointmentService from '../services/appointmentService';

const AppointmentForm = ({ onCreate }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [patient, setPatient] = useState('');
  const [error, setError] = useState(null);

  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    try {
      const appointmentData = { date, time, doctor, patient };
      await appointmentService.createAppointment(appointmentData);
      onCreate(); // Notify parent component about successful appointment creation
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h2>Create Appointment</h2>
      <form onSubmit={handleCreateAppointment}>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <label>Doctor:</label>
          <input type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} required />
        </div>
        <div>
          <label>Patient:</label>
          <input type="text" value={patient} onChange={(e) => setPatient(e.target.value)} required />
        </div>
        <button type="submit">Create Appointment</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AppointmentForm;
