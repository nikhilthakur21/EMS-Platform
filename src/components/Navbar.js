import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('session'));

    const handleLogout = () => {
        localStorage.removeItem('session');
        navigate('/');
    };

    if (!user) return null;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
            {/* Changed href="#" to Link to fix ESLint warning */}
            <Link className="navbar-brand font-weight-bold" to="/"> <span
            className="navbar-brand fw-bolder fs-3 text-primary"
            style={{ letterSpacing: "-1.5px" }}
          >
            EMS<span className="text-dark">PRO</span>
          </span></Link>
            <div className="ms-auto d-flex align-items-center">
                <span className="text-light me-3 small">Role: <strong className="text-info uppercase">{user.role}</strong></span>
                <span className="text-light me-3">User: <strong>{user.name}</strong></span>
                <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;