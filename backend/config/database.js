const mongoose = require('mongoose');

// Connect to MongoDB database
const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

