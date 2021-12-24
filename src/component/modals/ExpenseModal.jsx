import React, { useState } from 'react';
import { ModalContainer, ModalInput, StyledModalButton } from './style';
import Backdrop from './Backdrop';
import { StyledButton } from '../../pages/auth/styles';
import IncomeAPI from "../../api/IncomeAPI";
import {toast} from "react-toastify";

const ExpenseModal = ({ handleClose }) => {
    const initialValues = {
        title: '',
        description: '',
        amount: ''
    }
    const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleCreateIncome = (evt) => {
        evt.preventDefault();
        const formData = {
            title: formValues.title,
            description: formValues.description,
            amount: formValues.amount
        }
        IncomeAPI.onCreateIncome(formData).then((results) => {
            toast('Successfully posted new Income!');
            console.log(results);
        }, (error) => {
            console.log(error.response.data.msg);
        })
    }
    const dropIn = {
        hidden: {
            y : "-100vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            y: "-100vh",
            opacity: 0
        }
    }
    return (
        <Backdrop onClick={handleClose}>
            <ModalContainer onClick={(evt) => evt.stopPropagation()} variants={dropIn} initial="hidden" animate="visible" exit="exit">
                <div className="modal-header">
                    <h2>Add Income</h2>
                    <i className="far fa-times-circle fa-1x" onClick={handleClose} />
                </div>
                <hr />
                <div className="modal-content">
                    <form onSubmit={handleCreateIncome}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <ModalInput type="text" name="title" placeholder="Meal Deal..." value={formValues.title} onChange={handleChange} />
                        </div><br />
                        <div>
                            <label htmlFor="description">Description:</label>
                            <ModalInput type="text" name="description" placeholder="Meal Deal from Tesco..." value={formValues.description} onChange={handleChange} />
                        </div><br />
                        <div>
                            <label htmlFor="amount">Amount:</label>
                            <ModalInput type="text" name="amount" placeholder="£3.50..." value={formValues.amount} onChange={handleChange} />
                        </div><br />
                        <StyledButton type="submit" value="Add Expense" />
                    </form>
                </div>
                {/*<hr />*/}
                {/*<div className="modal-footer">*/}
                {/*    <StyledModalButton type="submit" value="Close" onClick={handleClose} />*/}
                {/*</div>*/}
            </ModalContainer>
        </Backdrop>
    );
}

export default ExpenseModal;
