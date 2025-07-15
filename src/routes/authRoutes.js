import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './User.js';
import { authenticateToken } from './auth.js';

const router = express.Router();

// Register
router.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) return res.status(409).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully ✅' });
  } catch (err) {
    res.status(500).json({ error: 'Registration error ❌' });
  }
});

// Login
router.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json({ message: 'Login successful ✅', token });
  } catch (err) {
    res.status(500).json({ error: 'Login error ❌' });
  }
});

// Protected Route
router.get('/api/profile', authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.userId).select('-password');
  res.json(user);
});

export default router;
