# Telemedicine Platform API Documentation

This document provides detailed information about the RESTful API endpoints available in the telemedicine platform.

## Authentication

All API endpoints require authentication using JSON Web Tokens (JWT). Clients must include the JWT token in the `Authorization` header of each request.

### Authentication Endpoints

- **POST /api/auth/login**
  - Description: Authenticates a user and returns a JWT token.
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "<JWT_TOKEN>"
    }
    ```

## User Management

### User Registration

- **POST /api/users/register**
  - Description: Registers a new user.
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123",
      "role": "patient"
    }
    ```
  - Response:
    ```json
    {
      "id": "123",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "patient"
    }
    ```

### User Profile

- **GET /api/users/profile**
  - Description: Retrieves the profile of the authenticated user.
  - Response:
    ```json
    {
      "id": "123",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "patient",
      "createdAt": "2024-04-17T12:00:00Z",
      "updatedAt": "2024-04-17T12:00:00Z"
    }
    ```

## Appointments

### Create Appointment

- **POST /api/appointments**
  - Description: Creates a new appointment.
  - Request Body:
    ```json
    {
      "patientId": "123",
      "doctorId": "456",
      "date": "2024-04-18T14:00:00Z",
      "reason": "Checkup"
    }
    ```
  - Response:
    ```json
    {
      "id": "789",
      "patientId": "123",
      "doctorId": "456",
      "date": "2024-04-18T14:00:00Z",
      "reason": "Checkup",
      "createdAt": "2024-04-17T12:00:00Z",
      "updatedAt": "2024-04-17T12:00:00Z"
    }
    ```

### Get Appointments

- **GET /api/appointments**
  - Description: Retrieves a list of appointments for the authenticated user.
  - Response:
    ```json
    [
      {
        "id": "789",
        "patientId": "123",
        "doctorId": "456",
        "date": "2024-04-18T14:00:00Z",
        "reason": "Checkup"
      }
    ]
    ```

## Error Responses

In case of errors, the API will return an appropriate HTTP status code along with a JSON response containing an error message.

Example:
```json
{
  "error": "Unauthorized",
  "message": "Invalid JWT token"
}
