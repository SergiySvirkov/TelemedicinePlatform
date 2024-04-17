const mongoose = require('mongoose');

// Define the schema for the EHR Integration model
const ehrIntegrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  apiUrl: {
    type: String,
    required: true,
  },
  apiKey: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Define and export the EHR Integration model
const EHRIntegration = mongoose.model('EHRIntegration', ehrIntegrationSchema);
module.exports = EHRIntegration;

