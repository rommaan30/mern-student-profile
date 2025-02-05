const jwt = require('jsonwebtoken');
const User = require('../models/studentModel'); // Replace with your user model

// Middleware to authenticate the user based on JWT token
const authenticate = async (req, res, next) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Replace 'JWT_SECRET' with your secret key

    // Find the user based on the decoded user ID
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach user info to request object
    req.user = user;
    next();  // Call the next middleware or route handler
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;
