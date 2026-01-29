import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [allTasks, setAllTasks] = useState([]);
    const [empForm, setEmpForm] = useState({ username: '', email: '', password: '', role: 'user' });
    const [taskForm, setTaskForm] = useState({ title: '', empEmail: '', status: 'Active' });

    useEffect(() => {

        // 1. LOGIN LOGIC CHECK
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        
        // Verify if user is logged in AND is an admin
        if (!loggedInUser || loggedInUser.role !== 'admin') {
            alert("Access Denied: Admins Only!");
            navigate("/login");
            return;
        }

        refreshData();
    }, [navigate]);

    const refreshData = () => {
        // Fetch users and tasks from localStorage
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setEmployees(storedUsers);
        setAllTasks(storedTasks);
    };

    const handleAddEmployee = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        // Add new employee to the list
        const updatedUsers = [...users, { ...empForm, id: Date.now() }];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        
        setEmpForm({ username: '', email: '', password: '', role: 'user' });
        refreshData();
        alert("Employee Added!");
    };

    const handleAssignTask = (e) => {
        e.preventDefault();
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        
        // Create task object
        const newTask = { 
            ...taskForm, 
            id: Date.now(),
            assignedAt: new Date().toLocaleDateString() 
        };
        
        const updatedTasks = [...tasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        
        setTaskForm({ title: '', empEmail: '', status: 'Active' });
        refreshData();
        alert("Task Assigned!");
    };

    return (
        <div className="container py-5" style={{ minHeight: '100vh', backgroundColor: '#f4f7f6' }}>
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h2 className="fw-bold text-dark">EMS <span className="text-primary">Admin Panel</span></h2>
                <button className="btn btn-outline-danger btn-sm" onClick={() => { localStorage.removeItem("loggedInUser"); navigate("/"); }}>Logout</button>
            </div>

            <div className="row g-4 mb-5">
              
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 p-4 rounded-4">
                        <h5 className="mb-3 fw-bold">Register New Staff</h5>
                        <form onSubmit={handleAddEmployee}>
                            <input type="text" className="form-control mb-2 bg-light border-0" placeholder="Username" value={empForm.username} onChange={e => setEmpForm({...empForm, username: e.target.value})} required />
                            <input type="email" className="form-control mb-2 bg-light border-0" placeholder="Email" value={empForm.email} onChange={e => setEmpForm({...empForm, email: e.target.value})} required />
                            <input type="password" className="form-control mb-2 bg-light border-0" placeholder="Password" value={empForm.password} onChange={e => setEmpForm({...empForm, password: e.target.value})} required />
                            <select className="form-select mb-3 bg-light border-0" value={empForm.role} onChange={e => setEmpForm({...empForm, role: e.target.value})}>
                                <option value="user">Employee</option>
                                <option value="admin">Admin</option>
                            </select>
                            <button className="btn btn-primary w-100 fw-bold">Add to System</button>
                        </form>
                    </div>
                </div>

             
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 p-4 rounded-4">
                        <h5 className="mb-3 fw-bold">Assign Project Task</h5>
                        <form onSubmit={handleAssignTask}>
                            <input type="text" className="form-control mb-2 bg-light border-0" placeholder="Task Description" value={taskForm.title} onChange={e => setTaskForm({...taskForm, title: e.target.value})} required />
                            <select className="form-select mb-3 bg-light border-0" value={taskForm.empEmail} onChange={e => setTaskForm({...taskForm, empEmail: e.target.value})} required>
                                <option value="">Assign to...</option>
                                {employees.filter(e => e.role !== 'admin').map(e => (
                                    <option key={e.email} value={e.email}>{e.username} ({e.email})</option>
                                ))}
                            </select>
                            <button className="btn btn-dark w-100 fw-bold">Deploy Task</button>
                        </form>
                    </div>
                </div>
            </div>

            
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 fw-bold text-secondary">Global Performance Monitor</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Task Detail</th>
                                <th>Assignee</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTasks.length > 0 ? allTasks.map(t => (
                                <tr key={t.id}>
                                    <td className="fw-semibold">{t.title}</td>
                                    <td>{t.empEmail}</td>
                                    <td className="text-muted">{t.assignedAt}</td>
                                    <td>
                                        <span className={`badge rounded-pill ${t.status === 'Completed' ? 'bg-success' : 'bg-primary'}`}>
                                            {t.status}
                                        </span>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-muted">No tasks assigned yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;