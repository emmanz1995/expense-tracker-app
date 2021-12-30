import React, { useEffect, useState } from 'react';
import Navbar from '../../component/navigation/Navbar';
import { Card, IncomeContainer } from './styles';
import IncomeModal from '../../component/modals/IncomeModal';
import { AnimatePresence } from 'framer-motion';
import { StyledModalButton } from '../../component/modals/style';
import IncomeAPI from '../../api/IncomeAPI';
import moment from 'moment';
import useOpen from '../../hooks/useOpen';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { toast, ToastContainer } from 'react-toastify';
import truncate from '../../util/truncate';

function IncomeView() {
    const [openModal, setOpenModal] = useState(false);
    const [incomeData, setIncomeData] = useState([]);
    const [loading, setLoading] = useState(false);
    const open = () => setOpenModal(true);
    const close = () => setOpenModal(false);
    useEffect(() => {
        setLoading(true)
        IncomeAPI.getIncome().then((results) => {
            setIncomeData(results?.docs);
            console.log(results);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })    }, [])
    const handleDeleteIncome = (id) => {
        IncomeAPI.onDeleteIncome(id).then((results) => {
            if(results) {
                console.log(results)
                const deleteIncome = incomeData?.filter(doc => {
                    return doc._id !== results._id;
                })
                setIncomeData(deleteIncome)
                toast(`Successfully deleted id: ${results?._id}`)
            } else {
                return null;
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    const handleAddIncome = (formData) => {
        IncomeAPI.onCreateIncome(formData).then((results) => {
            toast('Successfully posted new Income!');
            console.log(incomeData);
            setIncomeData([ ...incomeData, results ]);
            close()
        }, (error) => {
            console.log(error.response.data.msg);
        })
    }
    const { openClose, toggle } = useOpen;
    return (
        <div>
            <Navbar />
            <IncomeContainer>
                <div className="dashboard-header">
                    <h3>Emmanuel's Income</h3>
                    <StyledModalButton type="submit" onClick={() => (!openModal ? open() : close())} value="Add Income" />
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {openModal && <IncomeModal openModal={openModal} handleClose={close} onAddIncome={handleAddIncome} />}
                    </AnimatePresence>
                </div>
                <br />
                {!loading ?
                    <div className="card-flex">
                        {incomeData?.length > 0 ? incomeData?.map(income => (
                            <Card key={income?.id}>
                                <div className="header">
                                    <h4>{income?.title}</h4>
                                    {/*<i className="fas fa-ellipsis-v" onClick={() => toggle()} />*/}
                                    <span>
                                        <i className="far fa-edit" />{' '}
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
                {openClose &&
                    <div className="dropdown-menu">
                        <span><i className="far fa-edit"> Update</i></span><br />
                        <i className="fas fa-trash"> Delete</i>
                    </div>
                }
            </IncomeContainer>
            <ToastContainer
                position="top-center"
            />
        </div>
    );
}

export default IncomeView;
