import React from 'react';
import { StyledDashboardCard } from './styles';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, count, info, icon, link }) => {
    return (
        <StyledDashboardCard>
            <Link to={link} style={{ textDecoration: 'none', color: '#000' }}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{count || info}</p>
            </Link>
        </StyledDashboardCard>
    );
}

export default DashboardCard;
