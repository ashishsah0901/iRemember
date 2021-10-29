import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
    const location = useLocation()
    const handleLogout = () => {
        localStorage.removeItem('token')
    }
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img className="mx-2" src="../../ms-icon-70x70.png" height="25vw" alt="/" />
                <Link className="navbar-brand" to="/">i-Remember</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link className="btn btn-light mx-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-light" to="/signup" role="button">Sign Up</Link>
                    </form> : <Link onClick={handleLogout} role="button" to="/login" className="btn btn-light">Logout</Link>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
