"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../styles/loginRegister.css";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    loginEmail: "",
    loginPassword: ""
  });
  const [message, setMessage] = useState("");
  const router = useRouter(); // 👈 for routing

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { fullName, email, password, confirmPassword } = form;
    if (!fullName || !email || !password || !confirmPassword) {
      return setMessage("Please fill all fields.");
    }
    if (password !== confirmPassword) {
      return setMessage("Passwords do not match.");
    }

    localStorage.setItem("user", JSON.stringify({ fullName, email, password }));
    setMessage("Signup successful! You can now login.");
    setActiveTab("login");
  };

  const handleLogin = () => {
    const { loginEmail, loginPassword } = form;
    const stored = localStorage.getItem("user");
    if (!stored) return setMessage("No user found. Please sign up first.");

    const user = JSON.parse(stored);
    if (user.email === loginEmail && user.password === loginPassword) {
      router.push("/pages/welcome"); // ✅ redirect to welcome page
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="tabs">
          <span
            className={activeTab === "login" ? "active" : ""}
            onClick={() => {
              setActiveTab("login");
              setMessage("");
            }}
          >
            Login
          </span>
          <span
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => {
              setActiveTab("signup");
              setMessage("");
            }}
          >
            Sign Up
          </span>
        </div>

        <h2>{activeTab === "login" ? "Login" : "Sign Up"}</h2>

        {message && <p style={{ color: "#4285f4" }}>{message}</p>}

        {activeTab === "login" ? (
          <>
            <input
              type="email"
              name="loginEmail"
              placeholder="Email"
              value={form.loginEmail}
              onChange={handleChange}
            />
            <input
              type="password"
              name="loginPassword"
              placeholder="Password"
              value={form.loginPassword}
              onChange={handleChange}
            />
            <div className="forgot">
              <a href="/pages/forgot">Forgot Password?</a> {/* ✅ Link to forgot */}
            </div>
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <button className="login-btn" onClick={handleSignup}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
}
