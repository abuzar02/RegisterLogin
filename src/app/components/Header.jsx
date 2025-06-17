import React from 'react'
import '../styles/header.css'
const Header = () => {
  return (
    <>
        <section className='main-header'>
                <div className="countainer">
                    <header>
                        <div className="logo">
                            <h4>Job Portal </h4>
                        </div>
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Jobs</li>
                                <li>About</li>
                                <li>Contact Us</li>
                            </ul>
                        </nav>
                        <div className="login-icons">
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                    </header>
                </div>
        </section>
    </>
  )
}

export default Header