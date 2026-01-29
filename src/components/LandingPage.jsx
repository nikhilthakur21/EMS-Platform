import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Dynamic Tasking",
      desc: "Deploy and track workloads across your entire organization instantly.",
      icon: "⚡",
      bg: "#f0f7ff",
    },
    {
      title: "Smart Hierarchy",
      desc: "Define roles and permissions with enterprise-grade security protocols.",
      icon: "🛡️",
      bg: "#f0fff4",
    },
    {
      title: "Live Analytics",
      desc: "Monitor team velocity and project health with real-time data feeds.",
      icon: "📈",
      bg: "#fff9f0",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        color: "#0f172a",
      }}
    >
      <nav
        className="navbar navbar-expand-lg sticky-top py-3"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div className="container">
          <span
            className="navbar-brand fw-bolder fs-3 text-primary"
            style={{ letterSpacing: "-1.5px" }}
          >
            EMS<span className="text-dark">PRO</span>
          </span>
          <div className="d-flex gap-2">
            <button
              onClick={() => navigate("/Home")}
              className="btn btn-outline-dark border-0 fw-bold px-4"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/SignUpForm")}
              className="btn btn-primary px-4 rounded-pill fw-bold shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <header
        className="py-5"
        style={{
          background:
            "radial-gradient(circle at 50% -20%, #e0f2fe 0%, #ffffff 50%)",
        }}
      >
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 mb-4 fw-bold">
                Trusted by 5,000+ Teams
              </span>
              <h1
                className="display-2 fw-bolder mb-4"
                style={{ letterSpacing: "-3px", lineHeight: "1" }}
              >
                Workforce management <br />
                <span style={{ color: "#3b82f6" }}>reimagined.</span>
              </h1>
              <p className="lead text-muted mb-5 px-lg-5 fs-4">
                The precision-engineered platform for modern HR operations and
                high-output teams.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button
                  onClick={() => navigate("/SignUpForm")}
                  className="btn btn-dark btn-lg px-5 py-3 rounded-4 fw-bold shadow-lg"
                >
                  Deploy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {features.map((f, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="p-5 h-100 rounded-5 transition-card border-0 shadow-sm"
                  style={{ backgroundColor: f.bg }}
                >
                  <div className="display-5 mb-4">{f.icon}</div>
                  <h4 className="fw-bold mb-3">{f.title}</h4>
                  <p className="text-muted mb-0 lh-lg">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white my-5 rounded-0">
        <div className="container py-4 text-center">
          <div className="row align-items-center opacity-50">
            <div className="col fw-bold fs-4 italic">MICROSOFT</div>
            <div className="col fw-bold fs-4 italic">STRIPE</div>
            <div className="col fw-bold fs-4 italic">NETFLIX</div>
            <div className="col fw-bold fs-4 italic">TESLA</div>
          </div>
        </div>
      </section>

      <footer className="py-5">
        <div className="container text-center">
          <p className="text-muted small mb-0">
            © 2026 EMSPro Enterprise. Built for Performance.
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        
        .transition-card {
          transition: all 0.3s ease-in-out;
          border: 1px solid transparent !important;
        }
        
        .transition-card:hover {
          transform: translateY(-10px);
          background-color: #ffffff !important;
          border-color: #e2e8f0 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
        }

        .btn-primary {
          background-color: #2563eb;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
