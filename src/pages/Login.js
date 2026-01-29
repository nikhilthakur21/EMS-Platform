import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    // get user
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // chek mail pass
    const foundUser = storedUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      // Store
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      // Role-based redirect
      if (foundUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/EmployeeDashboard");
      }
    } else {
      alert("Invalid Credentials! Please check your email and password.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div
        className="card border-0 shadow-lg p-4"
        style={{ width: "420px", borderRadius: "20px" }}
      >
        <div className="text-center mb-4">
          <div className="d-inline-block p-3 rounded-circle bg-primary bg-opacity-10 mb-3">
            <span style={{ fontSize: "2rem" }}>🏢</span>
          </div>
          <h3 className="fw-bold text-dark mb-1">Welcome Back</h3>
          <p className="text-muted small">EMS Portal Secure Access</p>
        </div>

        <form onSubmit={onLogin}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-muted text-uppercase">
              Work Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg border-0 bg-light"
              placeholder="name@company.com"
              style={{ fontSize: "0.9rem" }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold text-muted text-uppercase">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg border-0 bg-light"
              placeholder="••••••••"
              style={{ fontSize: "0.9rem" }}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-3 fw-bold shadow-sm"
            style={{ borderRadius: "12px", letterSpacing: "1px" }}
          >
            AUTHENTICATE
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-muted small">New to the team? </span>
          <button
            onClick={() => navigate("/SignUpForm")}
            className="btn btn-link btn-sm text-decoration-none fw-bold p-0"
          >
            Register Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
