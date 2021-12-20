import React from 'react';
import Navbar from '../../component/navigation/Navbar';
import HomeBanner from '../../component/banner/HomeBanner';
import { CardContainer } from './styles';
import HomeCard from "../../component/cards/HomeCard";
import LoginImg from '../../assets/attack-6806140.svg';
import StatsImg from '../../assets/traffic-1597342.svg';
import TrackerImg from '../../assets/wallet-2292428_1920.jpg';

function Home() {
    return (
        <div>
            <Navbar />
            <HomeBanner />
            <CardContainer>
                <HomeCard img={LoginImg} title="Login to gain access" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi enim expedita, incidunt iste magni qui quis rerum sunt voluptates?" />
                <HomeCard img={TrackerImg} title="Create new expenses or incomes" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi enim expedita, incidunt iste magni qui quis rerum sunt voluptates?" />
                <HomeCard img={StatsImg} title="Track your stats and account info" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi enim expedita, incidunt iste magni qui quis rerum sunt voluptates?" />
            </CardContainer>
        </div>
    );
}

export default Home;
