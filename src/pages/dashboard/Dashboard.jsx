import React, { /* useState */ } from 'react';
import Navbar from "../../component/navigation/Navbar";
import { DashboardContainer } from './styles';
import DashboardCard from '../../component/cards/DashboardCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProfile from '../../hooks/useProfile';
import moment from 'moment';

function Dashboard() {
    const { profileInfo } = useProfile();

    return (
        <div>
            <Navbar />
            <DashboardContainer>
                <div className="wrapper">
                    <div className="stats-wrapper">
                        <DashboardCard title={`Welcome back, ${profileInfo?.username}`} info="Please review your stats here." icon={<i className="fas fa-user" />} link="/dashboard" />
                        <DashboardCard title="Income" count="£1500" icon={<i className="fas fa-wallet" />} link="/income" />
                        <DashboardCard title="Expense" count="£500" icon={<i className="fas fa-pound-sign"/>} link="/expense" />
                    </div>
                    <div className="stats-wrapper2">
                        <div className="profile-info">
                            <h3>{profileInfo?.firstname}'s Details</h3><br />
                            <h4>Name:</h4><p>{profileInfo.firstname} {profileInfo.surname}</p>
                            <h4>Email:</h4><p>{profileInfo.email}</p>
                            <h4>Date Joined:</h4><p>{moment(profileInfo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <input type="submit" value="Edit details" />
                        </div>
                        <div className="stat-chart"></div>
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
