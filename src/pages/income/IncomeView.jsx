import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navigation/Navbar';
import { IncomeContainer } from './styles';
import ExpenseModal from "../../component/modals/ExpenseModal";
import { motion, AnimatePresence } from 'framer-motion';
import { StyledModalButton } from '../../component/modals/style';
import IncomeAPI from '../../api/IncomeAPI';

function IncomeView() {
    const [openModal, setOpenModal] = useState(false);
    const [incomeData, setIncomeData] = useState([]);
    const [loading, setLoading] = useState(false);
    const open = () => setOpenModal(true);
    const close = () => setOpenModal(false);
    useEffect(() => {
        setLoading(true)
        IncomeAPI.getIncome().then((results) => {
            setIncomeData(results);
            console.log(results);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }, [])
    return (
        <div>
            <Navbar />
            <IncomeContainer>
                <div className="dashboard-header">
                    <h3>Emmanuel's Income</h3>
                    <StyledModalButton type="submit" onClick={() => (!openModal ? open() : close())} value="Add Income" />
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {openModal && <ExpenseModal openModal={openModal} handleClose={close} />}
                    </AnimatePresence>
                </div>
                {!loading ?
                    <div>
                        {incomeData?.docs.length > 0 ? incomeData?.docs?.map(income => (
                            <div key={income.id}>
                                £{income?.amount}
                            </div>
                        )): <p>No Income found</p>}
                    </div> : <p>Income Loading...</p>
                }
            </IncomeContainer>
        </div>
    );
}

export default IncomeView;
