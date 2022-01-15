import React, { useEffect, useState } from 'react';
import Navbar from '../../component/navigation/Navbar';
import { Card, IncomeContainer } from './styles';
import IncomeModal from '../../component/modals/IncomeModal';
import { AnimatePresence } from 'framer-motion';
import { StyledModalButton } from '../../component/modals/style';
import useOpen from '../../hooks/useOpen';
import { toast, ToastContainer } from 'react-toastify';
import truncate from '../../util/truncate';
import useHistoryHook from '../../hooks/useHistory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncomes, deleteIncome, addIncome } from '../../app/actions/incomes';
import useProfile from '../../hooks/useProfile';

function IncomeView() {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const { profileInfo } = useProfile();

    const income = useSelector(state => state.incomes);
    const dispatch = useDispatch();

    const open = () => setOpenModal(true);
    const close = () => setOpenModal(false);
    useEffect(() => {
        setLoading(true)
        dispatch(fetchIncomes()).then(() => {
            setLoading(false)
        }, (error) => {
            setLoading(false)
            console.log(error);
        })
    }, [])
    const handleDeleteIncome = (id) => {
        setLoading(true)
        dispatch(deleteIncome(id)).then(() => {
            setLoading(false);
            toast(`Income successfully deleted!`)
        }, (error) => {
            console.log(error);
            setLoading(false);
        })
    }
    const { openClose, toggle } = useOpen;
    const { navigate } = useHistoryHook();
    return (
        <div>
            <Navbar />
            <IncomeContainer>
                <div className="dashboard-header">
                    <h3>{profileInfo?.username}'s Income</h3>
                    <StyledModalButton type="submit" onClick={() => (!openModal ? open() : close())} value="Add Income" />
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {openModal && <IncomeModal openModal={openModal} handleClose={close} />}
                    </AnimatePresence>
                </div>
                <br />
                {!loading ?
                    <div className="card-flex">
                        {income?.length > 0 ? income?.map(income => (
                            <Card key={income?.id}>
                                <div className="header">
                                    <h4>{income?.title}</h4>
                                    {/*<i className="fas fa-ellipsis-v" onClick={() => toggle()} />*/}
                                    <span>
                                        <i className="far fa-edit" onClick={() => navigate(`/update-income/${income?._id}`)}/>{' '}
                                        <i className="fas fa-trash" onClick={() => handleDeleteIncome(income?._id)} />
                                    </span>
                                </div>
                                <p>{truncate(income?.description, 35)}</p>
                                <p>£{income?.amount}</p>
                            </Card>
                        )): <p>No Income found</p>
                        }
                    </div> : <p>Income Loading...</p>
                }
                {/*{openClose &&*/}
                {/*    <div className="dropdown-menu">*/}
                {/*        <span><i className="far fa-edit"> Update</i></span><br />*/}
                {/*        <i className="fas fa-trash"> Delete</i>*/}
                {/*    </div>*/}
                {/*}*/}
            </IncomeContainer>
            <ToastContainer
                position="top-center"
            />
        </div>
    );
}

export default IncomeView;
