import React, { useState } from 'react';
import Navbar from "../../component/navigation/Navbar";
import ExpenseModal from "../../component/modals/ExpenseModal";
import { motion, AnimatePresence } from 'framer-motion';
import { StyledModalButton } from '../../component/modals/style';
import { DashboardContainer } from './styles';

function Dashboard() {
    const [openModal, setOpenModal] = useState(false);
    const open = () => setOpenModal(true);
    const close = () => setOpenModal(false);
    return (
        <div>
            <Navbar />
            <DashboardContainer>
                <div className="wrapper">
                    <div className="dashboard-header">
                        <h1>Dashboard</h1>
                        <StyledModalButton type="submit" onClick={() => (!openModal ? open() : close())} value="Add Expense" />
                        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                            {openModal && <ExpenseModal openModal={openModal} handleClose={close} />}
                        </AnimatePresence>
                    </div>
                    <hr />
                </div>
            </DashboardContainer>
        </div>
    )
}

export default Dashboard;
