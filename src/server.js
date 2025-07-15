import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Question from './Question.js';
const app = express();
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './User.js';
import { authenticateToken } from './auth.js';
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.get('/api/questions/:testId', async (req, res) => {
  try {
    const { testId } = req.params;
    const questions = await Question.find({ testId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});


// ✅ Register
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) return res.status(409).json({ message: 'Email already registered' });

    const newUser = new User({ username, email, password }); // no manual bcrypt.hash here!
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully ✅' });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: 'Registration error ❌' });
  }
});


// ✅ Login
app.post('/api/login', async (req, res) => {
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
    res.status(500).json({ error: 'Login error ❌', err });
  }
});

// ✅ Protected route example
app.get('/api/profile', authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.userId).select('-password');
  res.json(user);
});



app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
