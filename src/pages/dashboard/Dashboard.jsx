import React, { /* useState */ } from 'react';
import Navbar from "../../component/navigation/Navbar";
import { DashboardContainer } from './styles';
import DashboardCard from '../../component/cards/DashboardCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
    return (
        <div>
            <Navbar />
            <DashboardContainer>
                <div className="wrapper">
                    <div className="stats-wrapper">
                        <DashboardCard title="Welcome back, Emmanuel Okuchukwu" info="Please review your stats here." icon={<i className="fas fa-user" />} link="/dashboard" />
                        <DashboardCard title="Income" count="£1500" icon={<i className="fas fa-wallet" />} link="/income" />
                        <DashboardCard title="Expense" count="£500" icon={<i className="fas fa-pound-sign"/>} link="/expense" />
                    </div>
                </div>
            </DashboardContainer>
            <ToastContainer
                position="top-center"
            />
        </div>
    )
}

export default Dashboard;
