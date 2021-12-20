import React from 'react';
import { Card } from './styles';

const HomeCard = ({ img, info, title }) => {
    return (
        <Card>
            <div>
                <img className="home-img" src={img} alt="img" height="400" width="600" />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <span>{info}</span>
            </div>
        </Card>
    );
}

export default HomeCard;
