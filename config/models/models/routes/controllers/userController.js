const User = require('../models/userModel');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Basic check
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ name, email, password });
  res.status(201).json(user);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { registerUser, loginUser };