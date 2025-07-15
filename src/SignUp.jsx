import { useState } from 'react';
import axios from 'axios';
import './Sign.css';

function SignUp({ onSwitch }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', {username, email, password });
      alert('Registration successful');
      onSwitch("signin");
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <input type="username" placeholder="Name" onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
        <p>Already have an account? <span onClick={() => onSwitch("signin")}>Sign In</span></p>
      </form>
    </div>
  );
}

export default SignUp;
