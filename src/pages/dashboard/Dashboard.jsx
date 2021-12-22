import React, { /* useState */ } from 'react';
import Navbar from "../../component/navigation/Navbar";
// import ExpenseModal from "../../component/modals/ExpenseModal";
// import { motion, AnimatePresence } from 'framer-motion';
// import { StyledModalButton } from '../../component/modals/style';
import { DashboardContainer } from './styles';
import DashboardCard from '../../component/cards/DashboardCard';

function Dashboard() {
    // const [openModal, setOpenModal] = useState(false);
    // const open = () => setOpenModal(true);
    // const close = () => setOpenModal(false);
    return (
        <div>
            <Navbar />
            <DashboardContainer>
                <div className="wrapper">
                    <div className="stats-wrapper">
                        {/*<div className="dashboard-header">*/}
                        {/*    <h2>Dashboard</h2>*/}
                        {/*    <StyledModalButton type="submit" onClick={() => (!openModal ? open() : close())} value="Add Expense" />*/}
                        {/*    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>*/}
                        {/*        {openModal && <ExpenseModal openModal={openModal} handleClose={close} />}*/}
                        {/*    </AnimatePresence>*/}
                        {/*</div>*/}
                        {/*<hr />*/}
                        <DashboardCard title="Welcome back, Emmanuel Okuchukwu" info="Please review your stats." icon={<i className="fas fa-user" />} />
                        <DashboardCard title="Expense" count="£500" icon={<i className="fas fa-pound-sign"/>} />
                        <DashboardCard title="Income" count="£1500" icon={<i className="fas fa-wallet" />} />
                    </div>
                </div>
            </DashboardContainer>
        </div>
    )
}

export default Dashboard;
