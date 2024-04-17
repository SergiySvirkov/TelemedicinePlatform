import React, { useState, useEffect } from 'react';
import ehrIntegrationService from '../services/ehrIntegrationService';

const PatientProfile = ({ userId }) => {
  const [patientRecords, setPatientRecords] = useState(null);

  // Fetch patient records when component mounts
  useEffect(() => {
    const fetchPatientRecords = async () => {
      try {
        const records = await ehrIntegrationService.fetchPatientRecords(userId);
        setPatientRecords(records);
      } catch (error) {
        console.error('Error fetching patient records:', error);
      }
    };

    fetchPatientRecords();
  }, [userId]);

  return (
    <div>
      <h2>Patient Profile</h2>
      {patientRecords ? (
        <div>
          <p>Name: {patientRecords.name}</p>
          <p>Age: {patientRecords.age}</p>
          <p>Gender: {patientRecords.gender}</p>
          <p>Medical History: {patientRecords.medicalHistory}</p>
        </div>
      ) : (
        <p>Loading patient profile...</p>
      )}
    </div>
  );
};

export default PatientProfile;

