
import { useState } from 'react';
import axios from 'axios';
import './Sign.css'

function SignIn({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      alert('Login successful');
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      onSwitch("home");
      location.reload();
    } catch (err) {
      alert('Login failed');
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        <p>Don't have an account? <span onClick={() => onSwitch("signup")}>Sign Up</span></p>
      </form>
    </div>
  );
}

export default SignIn;
