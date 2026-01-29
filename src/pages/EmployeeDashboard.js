import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    const loadTasks = useCallback(() => {
        const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const myTasks = user
            ? allTasks.filter(t => t.empEmail === user.email)
            : [];
        setTasks(myTasks);
    }, [user]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        loadTasks();
    }, [user, navigate, loadTasks]);

    const handleComplete = (taskId) => {
        const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = allTasks.map(t =>
            t.id === taskId ? { ...t, status: 'Completed' } : t
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        loadTasks();
    };

    const logout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/');
    };

    const completedCount = tasks.filter(t => t.status === 'Completed').length;
    const pendingCount = tasks.length - completedCount;

    return (
        <div className="container-fluid py-5 px-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h2 className="fw-bold mb-0 text-dark">
                            Employee <span className="text-primary">Workspace</span>
                        </h2>
                        <p className="text-muted">Welcome back, {user?.username}!</p>
                    </div>
                    <button
                        onClick={logout}
                        className="btn btn-outline-secondary btn-sm px-3 rounded-pill"
                    >
                        Logout
                    </button>
                </div>

                <div className="row">

                    <div className="col-lg-4 mb-4">
                        <div className="card shadow-sm border-0 rounded-4 p-4 text-center mb-4 bg-white">
                            <div
                                className="mx-auto mb-3 d-flex align-items-center justify-content-center bg-primary text-white rounded-circle shadow-sm"
                                style={{ width: '80px', height: '80px', fontSize: '2rem', fontWeight: 'bold' }}
                            >
                                {user?.username?.charAt(0).toUpperCase()}
                            </div>
                            <h4 className="fw-bold mb-1">{user?.username}</h4>
                            <p className="text-muted small mb-3">{user?.email}</p>
                            <span className="badge bg-light text-primary border border-primary border-opacity-25 px-3 py-2 rounded-pill">
                                {user?.role?.toUpperCase()}
                            </span>
                        </div>

                        <div className="row g-3">
                            <div className="col-6">
                                <div className="card border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                                    <h3 className="fw-bold text-primary mb-0">{pendingCount}</h3>
                                    <small className="text-muted fw-bold">Pending</small>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                                    <h3 className="fw-bold text-success mb-0">{completedCount}</h3>
                                    <small className="text-muted fw-bold">Done</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="d-flex align-items-center mb-4">
                            <h5 className="fw-bold mb-0 me-3">Active Assignments</h5>
                            <div className="flex-grow-1 border-bottom"></div>
                        </div>

                        {tasks.length > 0 ? tasks.map(t => (
                            <div key={t.id} className="card shadow-sm mb-3 border-0 rounded-4 overflow-hidden">
                                <div className="card-body p-4 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className={`p-3 rounded-3 me-3 ${t.status === 'Completed' ? 'bg-success-subtle' : 'bg-primary-subtle'}`}>
                                            {t.status === 'Completed' ? '✅' : '📝'}
                                        </div>
                                        <div>
                                            <h6 className={`mb-1 fw-bold ${t.status === 'Completed' ? 'text-decoration-line-through text-muted' : ''}`}>
                                                {t.title}
                                            </h6>
                                            <div className="d-flex gap-2">
                                                <small className="text-muted">ID: #{t.id.toString().slice(-4)}</small>
                                                <small className="text-muted">• Assigned: {t.assignedAt || 'Today'}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {t.status !== 'Completed' ? (
                                            <button
                                                onClick={() => handleComplete(t.id)}
                                                className="btn btn-primary btn-sm px-4 rounded-pill fw-bold shadow-sm"
                                            >
                                                Complete Task
                                            </button>
                                        ) : (
                                            <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                                                Finalized
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="text-center py-5 bg-white rounded-4 shadow-sm">
                                <p className="text-muted mb-0">
                                    No tasks currently assigned to you. Enjoy your day! ☕
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
