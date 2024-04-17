const { body } = require('express-validator');

// Validation rules for user registration
exports.userRegistrationValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('role').isIn(['patient', 'doctor']).withMessage('Role must be either patient or doctor'),
  ];
};

// Validation rules for user login
exports.userLoginValidationRules = () => {
  return [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required'),
  ];
};

