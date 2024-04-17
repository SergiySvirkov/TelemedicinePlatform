# Telemedicine Platform Database Schema

This document describes the database schema used by the telemedicine platform.

## Users Table

The `users` table stores information about users registered on the platform.

| Column    | Type         | Description                     |
| --------- | ------------ | ------------------------------- |
| id        | INT          | Unique identifier for the user |
| name      | VARCHAR(100) | User's name                     |
| email     | VARCHAR(100) | User's email address            |
| password  | VARCHAR(255) | Encrypted password              |
| role      | ENUM         | User's role (patient, doctor)  |
| createdAt | TIMESTAMP    | Timestamp of user creation      |
| updatedAt | TIMESTAMP    | Timestamp of last update        |

## Appointments Table

The `appointments` table stores information about appointments scheduled on the platform.

| Column    | Type         | Description                          |
| --------- | ------------ | ------------------------------------ |
| id        | INT          | Unique identifier for the appointment|
| patientId | INT          | ID of the patient                    |
| doctorId  | INT          | ID of the doctor                     |
| date      | DATETIME     | Date and time of the appointment     |
| reason    | VARCHAR(255) | Reason for the appointment           |
| createdAt | TIMESTAMP    | Timestamp of appointment creation    |
| updatedAt | TIMESTAMP    | Timestamp of last update             |

## Patients Table

The `patients` table stores additional information about patients.

| Column    | Type         | Description                     |
| --------- | ------------ | ------------------------------- |
| id        | INT          | Unique identifier for the patient |
| userId    | INT          | ID of the associated user      |
| gender    | ENUM         | Gender of the patient          |
| dob       | DATE         | Date of birth of the patient   |
| address   | VARCHAR(255) | Address of the patient         |
| phone     | VARCHAR(20)  | Phone number of the patient    |

## Doctors Table

The `doctors` table stores additional information about doctors.

| Column    | Type         | Description                     |
| --------- | ------------ | ------------------------------- |
| id        | INT          | Unique identifier for the doctor |
| userId    | INT          | ID of the associated user      |
| specialization | VARCHAR(100) | Specialization of the doctor |
| licenseNumber  | VARCHAR(50)  | License number of the doctor |


