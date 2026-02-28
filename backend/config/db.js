// backend/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace 'myDB' with your actual database name
    await mongoose.connect('mongodb://localhost:27017/Huddle', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
