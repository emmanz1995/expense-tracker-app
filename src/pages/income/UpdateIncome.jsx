import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navigation/Navbar';
import { IncomeContainer } from './styles';
import { updateIncome } from '../../app/actions/incomes';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StyledButton, StyledInput, StyledLink } from '../../config/reusableStyles';

function UpdateIncome() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const initialState = {
        title: '',
        description: '',
        amount: ''
    }
    const [incomeFields, setIncomeFields] = useState(initialState);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setIncomeFields({ ...incomeFields, [name]: value });
    }
    useEffect(() => {
        return getSingleIncome()
    }, [])

    const getSingleIncome = () => {
        return axios.get(`${process.env.REACT_APP_URL_API}/api/income/getincome/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`
            }
        }).then((response) => {
            setIncomeFields(response.data)
        })
    }
    const handleUpdateIncome = (evt) => {
        evt.preventDefault();
        const formValue = {
            title: incomeFields.title,
            description: incomeFields.description,
            amount: incomeFields.amount,
        }
        dispatch(updateIncome(id, formValue))
    }
    return (
        <IncomeContainer>
            <Navbar />
            <h3>Update Income</h3><br />
            <form onSubmit={handleUpdateIncome}>
                <StyledInput type="text" name="title" value={incomeFields.title} onChange={handleChange} />
                <StyledInput type="text" name="description" value={incomeFields.description} onChange={handleChange} />
                <StyledInput type="text" name="amount" value={incomeFields.amount} onChange={handleChange} />
                <input type="submit" value="Update Income" />
            </form>
        </IncomeContainer>
    )
}

export default UpdateIncome;
