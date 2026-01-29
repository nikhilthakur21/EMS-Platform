
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/Home" element={<Home />} />

          
          <Route path="/login/admin" element={<Login />} />
          <Route path="/login/employee" element={<Login />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
