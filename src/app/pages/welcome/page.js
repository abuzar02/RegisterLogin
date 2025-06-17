"use client"
import '../../styles/loginRegister.css';

export default function Welcome() {
  const user = JSON.parse(typeof window !== 'undefined' ? localStorage.getItem("user") : "{}");

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome, {user?.name || "User"} 🎉</h2>
        <p>You have successfully logged in or registered.</p>
        <div className="link">
          <a href="/pages/login">Logout</a>
        </div>
      </div>
    </div>
  );
}
