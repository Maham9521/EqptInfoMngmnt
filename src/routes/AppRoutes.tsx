import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import ViewData from '../pages/viewData';
import AddData from '../pages/addData';
import Info from '../pages/info';
import Layout from '../pages/mainLayout';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="preview_data" element={<ViewData />} />
                    <Route path="add_data" element={<AddData />} />
                    <Route path="info" element={<Info />} />
                </Route>

            </Routes>
        </Router>
    );
};

export default AppRouter;
