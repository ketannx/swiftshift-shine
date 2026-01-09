import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Services from "../Pages/Services"
import AdminLogin from "../admin/AdminLogin"
import AdminDashboard from "../admin/AdminDashboard"
import ProtectedAdmin from "../admin/ProtectedAdmin"
import NotExist from "../Pages/NotExist"
import AIAgentProvider from '../Pages/AIAgentProvider'


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AIAgentProvider><Home /></AIAgentProvider>} />
                <Route path="/about" element={<AIAgentProvider><About /></AIAgentProvider>} />
                <Route path="/contact" element={<AIAgentProvider><Contact /></AIAgentProvider>} />
                <Route path="/services" element={<AIAgentProvider><Services /></AIAgentProvider>} />
                <Route path="/admin/login" element={<AdminLogin />} />
                {/* Protected route for dashboard */}
                <Route path="/admin/dashboard" element={<ProtectedAdmin><AdminDashboard /></ProtectedAdmin>} />
                <Route path="*" element={<NotExist />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter