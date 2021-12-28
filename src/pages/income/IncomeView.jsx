import React, { useEffect, useState } from 'react';
import Navbar from '../../component/navigation/Navbar';
import { Card, IncomeContainer } from './styles';
import ExpenseModal from '../../component/modals/ExpenseModal';
import { AnimatePresence } from 'framer-motion';
import { StyledModalButton } from '../../component/modals/style';
import IncomeAPI from '../../api/IncomeAPI';
import moment from 'moment';
import useOpen from '../../hooks/useOpen';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { toast, ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { fetchIncomes } from '../../app/actions/incomes';
// import incomes from "../../app/reducers/incomes";

function IncomeView(props) {
    const [openModal, setOpenModal] = useState(false);
    // const [incomeData, setIncomeData] = useState([]);
    const [loading, setLoading] = useState(false);
    const open = () => setOpenModal(true);
    const close = () => setOpenModal(false);
    useEffect(() => {
        setLoading(true)
        // IncomeAPI.getIncome().then((results) => {
        //     setIncomeData(results?.docs);
        //     console.log(results);
        //     setLoading(false);
        // }).catch((error) => {
        //     setLoading(false);
        //     console.log(error);
        // })
        props.fetchIncomes().then((res) => {
           setLoading(false);
        }).catch((error) => {
            console.log(error)
            setLoading(false);
        })
    }, [])
    // const handleDeleteIncome = (id) => {
    //     IncomeAPI.onDeleteIncome(id).then((results) => {
    //         if(results) {
    //             console.log(results)
    //             const deleteIncome = incomeData?.filter(doc => {
    //                 return doc._id !== results._id;
    //             })
    //             setIncomeData(deleteIncome)
    //             toast(`Successfully deleted id: ${results?._id}`)
    //         } else {
    //             return null;
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }
    const handleAddIncome = (formData) => {
        IncomeAPI.onCreateIncome(formData).then((results) => {
            toast('Successfully posted new Income!');
            console.log(props?.incomes);
            // setIncomeData([ ...incomeData, results ]);
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
                        {openModal && <ExpenseModal openModal={openModal} handleClose={close} onAddIncome={handleAddIncome} />}
                    </AnimatePresence>
                </div>
                <br />
                {!loading ?
                    <div className="card-flex">
                        {props?.incomes?.length > 0 ? props?.incomes?.map(income => (
                            <Card key={income?.id}>
                                <div className="header">
                                    <h4>{income?.title}</h4>
                                    {/*<i className="fas fa-ellipsis-v" onClick={() => toggle()} />*/}
                                    <DropdownMenu triggerType='icon' trigger='glyphicon glyphicon-option-vertical'>
                                        <MenuItem text={<i className="far fa-edit">{' '}Update</i>} />
                                        {/*<MenuItem text={<i className="fas fa-trash" onClick={() => handleDeleteIncome(income?._id)}>{' '}Delete</i>} />*/}
                                    </DropdownMenu>
                                </div><br />
                                <p>{income?.description}</p>
                                <p>£{income?.amount}</p><br />
                                <p>Paid at: {moment(income?.createdAt).format('DD/MM/YY, hh:mm:ss')}</p>
                                <p>Updated at: {moment(income?.updatedAt).format('DD/MM/YY, hh:mm:ss')}</p>
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

const mapStateToProps = (state) => {
    return {
        incomes: state.incomes
    }
}

export default connect(mapStateToProps, {
    fetchIncomes
})(IncomeView);
