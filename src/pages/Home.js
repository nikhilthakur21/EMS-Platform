import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#f1f5f9",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="container">
        <div className="text-center mb-4">
          <h2
            className="fw-bold text-dark mb-1"
            style={{ letterSpacing: "-1px" }}
          >
            EMS<span className="text-primary">PRO</span>
          </h2>
          <p
            className="small text-muted text-uppercase fw-semibold"
            style={{ letterSpacing: "1px" }}
          >
            Workforce Management Gateway
          </p>
        </div>

        <div
          className="row justify-content-center g-3 mx-auto"
          style={{ maxWidth: "850px" }}
        >
          <div className="col-md-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center compact-card">
              <div
                className="mb-3 mx-auto d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3"
                style={{ width: "60px", height: "60px", fontSize: "1.8rem" }}
              >
                🛡️
              </div>
              <h5 className="fw-bold mb-2">Admin Portal</h5>
              <p
                className="text-muted mb-4 px-2"
                style={{ fontSize: "0.85rem", lineHeight: "1.4" }}
              >
                Control panel for department oversight and system analytics.
              </p>
              <button
                onClick={() => navigate("/login/admin")}
                className="btn btn-primary w-100 py-2 fw-bold rounded-3 transition-btn shadow-sm"
              >
                Login as Admin
              </button>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center compact-card">
              <div
                className="mb-3 mx-auto d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3"
                style={{ width: "60px", height: "60px", fontSize: "1.8rem" }}
              >
                👤
              </div>
              <h5 className="fw-bold mb-2">Employee Portal</h5>
              <p
                className="text-muted mb-4 px-2"
                style={{ fontSize: "0.85rem", lineHeight: "1.4" }}
              >
                Personal dashboard for tasks, attendance, and reporting.
              </p>
              <button
                onClick={() => navigate("/login/employee")}
                className="btn btn-success w-100 py-2 fw-bold rounded-3 transition-btn shadow-sm text-white"
              >
                Login as Employee
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <div className="d-inline-flex align-items-center gap-2 py-1 px-3 bg-white rounded-pill border shadow-sm">
            <span
              className="bg-success rounded-circle"
              style={{ width: "8px", height: "8px" }}
            ></span>
            <small
              className="text-muted fw-bold"
              style={{ fontSize: "0.7rem" }}
            >
              SECURE SERVER V2.0
            </small>
          </div>
        </div>
      </div>

      <style>{`
                .compact-card {
                    transition: all 0.25s ease;
                    border: 1px solid transparent !important;
                }
                .compact-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(0,0,0,0.05) !important;
                    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1) !important;
                }
                .transition-btn {
                    font-size: 0.9rem;
                    transition: transform 0.1s ease;
                }
                .transition-btn:active {
                    transform: scale(0.96);
                }
            `}</style>
    </div>
  );
};

export default Home;
