<<<<<<< HEAD
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"]
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6
  }
});

// ✅ Pre-save middleware: hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ✅ Method to compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ✅ Method to generate JWT token (optional utility)
userSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

const User = mongoose.model('User', userSchema);
export default User;
=======
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"]
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6
  }
});

// ✅ Pre-save middleware: hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ✅ Method to compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ✅ Method to generate JWT token (optional utility)
userSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

const User = mongoose.model('User', userSchema);
export default User;
>>>>>>> 42f78361ced614b42bedf5bae1314bb6c7577a25
