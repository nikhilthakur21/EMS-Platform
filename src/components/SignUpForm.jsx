import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    navigate("/");
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Employee profile created successfully!");
    setFormData({ username: "", email: "", password: "", role: "user" });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-10 col-lg-8 d-flex shadow-lg rounded-4 overflow-hidden"
            style={{ minHeight: "550px" }}
          >
            <div
              className="d-none d-md-flex col-md-5 flex-column justify-content-center align-items-center text-white p-5"
              style={{ background: "linear-gradient(45deg, #3b82f6, #2563eb)" }}
            >
              <h2 className="fw-bold mb-3">EMS Portal</h2>
              <p className="text-center opacity-75">
                Streamline your workforce management with our integrated
                enterprise solution.
              </p>
              <div className="mt-4 p-3 bg-white bg-opacity-10 rounded-3 border border-white border-opacity-25">
                <small>Internal Use Only • Secure Access</small>
              </div>
            </div>

            <div className="col-12 col-md-7 bg-white p-5">
              <div className="mb-4">
                <h3 className="fw-bold text-dark">Create Account</h3>
                <p className="text-muted small">
                  Enter credentials to register a new employee.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-uppercase text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg border-0 bg-light"
                    placeholder="e.g. John Doe"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-uppercase text-muted">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg border-0 bg-light"
                    placeholder="name@company.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-semibold text-uppercase text-muted">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg border-0 bg-light"
                      placeholder="••••••••"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      style={{ fontSize: "0.9rem" }}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label small fw-semibold text-uppercase text-muted">
                      System Role
                    </label>
                    <select
                      className="form-select form-select-lg border-0 bg-light"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      style={{ fontSize: "0.9rem" }}
                    >
                      <option value="user">Employee</option>
                      <option value="admin">Administrator</option>
                      <option value="manager">HR Manager</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-3 fw-bold shadow-sm"
                  style={{
                    borderRadius: "10px",
                    background: "#2563eb",
                    letterSpacing: "0.5px",
                  }}
                >
                  REGISTER EMPLOYEE
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted small">
                  Already have an account?{" "}
                  <NavLink to="/" className="text-decoration-none fw-bold">
                    Login here
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
