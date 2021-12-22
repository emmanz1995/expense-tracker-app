import React from 'react';
import { ModalContainer, ModalInput, StyledModalButton } from './style';
import Backdrop from './Backdrop';
import { StyledButton } from '../../pages/auth/styles';

const ExpenseModal = ({ handleClose }) => {
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
            y: "100vh",
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
                    <form>
                        <div>
                            <label htmlFor="">Title:</label>
                            <ModalInput type="text" name="title" placeholder="Meal Deal..." />
                        </div><br />
                        <div>
                            <label htmlFor="">description:</label>
                            <ModalInput type="text" name="description" placeholder="Meal Deal from Tesco..." />
                        </div><br />
                        <div>
                            <label htmlFor="">Amount:</label>
                            <ModalInput type="text" name="Amount" placeholder="£3.50..." />
                        </div><br />
                        <StyledButton type="submit" value="Add Expense" />
                    </form>
                </div>
                <hr />
                <div className="modal-footer">
                    <StyledModalButton type="submit" value="Close" onClick={handleClose} />
                </div>
            </ModalContainer>
        </Backdrop>
    );
}

export default ExpenseModal;
