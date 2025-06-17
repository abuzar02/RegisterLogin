"use client"
import { useState } from 'react';
import '../../styles/loginRegister.css';

export default function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert("If this email exists, a reset link will be sent.");
  };

  return (
    <div className="auth-container login-bg">
      <div className="auth-box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
          <button type="submit">Send Reset Link</button>
        </form>
        <div className="link">
          <a href="/pages/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
}
