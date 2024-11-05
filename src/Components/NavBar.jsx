import React from 'react'
import { Link } from 'react-router-dom'
import { userAlreadyLoggedIn } from './AuthMiddleware'

const NavBar = ({ app_name }) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <Link to="/" className="navbar-brand fw-bold">{app_name}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="index.php">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        
                            {userAlreadyLoggedIn ? (
                                <>
                                    <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                                </>
                            )}
                            
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar