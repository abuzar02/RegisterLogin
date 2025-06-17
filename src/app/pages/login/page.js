"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../../styles/loginRegister.css';


export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored?.email === form.email && stored?.password === form.password) {
      router.push('/pages/welcome');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <div className="link">
          <a href="/pages/forgot">Forgot Password?</a><br />
          Don’t have an account? <a href="/pages/register">Register</a>
        </div>
      </div>
    </div>
  );
}
