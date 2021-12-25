import React, { useState } from 'react';
import { ModalContainer, ModalInput } from './style';
import Backdrop from './Backdrop';
import { StyledButton } from '../../pages/auth/styles';
import IncomeAPI from "../../api/IncomeAPI";
import { toast, ToastContainer } from "react-toastify";

const UpdateModal = ({ handleClose, updateTitle }) => {

    const dropIn2 = {
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
            <ModalContainer onClick={(evt) => evt.stopPropagation()} variants={dropIn2} initial="hidden" animate="visible" exit="exit">
                <div className="modal-header-container">
                    <h2>{updateTitle}</h2>
                    <i className="far fa-times-circle fa-1x" onClick={handleClose} />
                </div>
                <hr />
                <div className="modal-content-wrapper">
                    <form>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <ModalInput type="text" name="title" placeholder="Meal Deal..." />
                        </div><br />
                        <div>
                            <label htmlFor="description">Description:</label>
                            <ModalInput type="text" name="description" placeholder="Meal Deal from Tesco..." />
                        </div><br />
                        <div>
                            <label htmlFor="amount">Amount:</label>
                            <ModalInput type="text" name="amount" placeholder="£3.50..." />
                        </div><br />
                        <StyledButton type="submit" value={updateTitle} />
                    </form>
                </div>
            </ModalContainer>
            <ToastContainer
                position="top-center"
            />
        </Backdrop>
    );
}

export default UpdateModal;
