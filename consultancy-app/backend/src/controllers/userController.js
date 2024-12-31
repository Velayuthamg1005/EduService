const bcrypt = require('bcrypt');
const User = require('../models/User'); 
const saltRounds = 10;

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  return passwordRegex.test(password);
};

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({
        message: 'Password must contain at least one special character and a combination of numbers and letters',
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    console.log('User registered successfully!');
    return res.status(200).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during signup:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log('User login successful!');
    return res.status(200).json({ message: 'User login successful!' });
  } catch (error) {
    console.error('Error during login:', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error during getAllUsers:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  signup,
  login,
  getAllUsers,
};
