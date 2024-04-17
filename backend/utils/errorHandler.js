// Utility function for handling errors
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Set status code based on error type
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Check if error is a Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = 400;
  }

  // Check if error is a JWT verification error
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    statusCode = 401;
  }

  // Send error response
  res.status(statusCode).json({ error: err.message || 'Internal server error' });
};

module.exports = errorHandler;
