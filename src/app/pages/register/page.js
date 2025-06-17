"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../../styles/loginRegister.css';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    router.push('/pages/welcome');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <div className="link">
          Already have an account? <a href="/pages/login">Login</a>
        </div>
      </div>
    </div>
  );
}
