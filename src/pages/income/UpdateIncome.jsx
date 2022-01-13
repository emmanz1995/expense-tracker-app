import React from 'react';
import Navbar from '../../component/navigation/Navbar';
import {IncomeContainer} from "./styles";

function UpdateIncome() {
    return (
        <IncomeContainer>
            <Navbar />
            <h3>Update Income</h3>
        </IncomeContainer>
    )
}

export default UpdateIncome;
