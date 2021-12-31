import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navigation/Navbar';
import { ExpenseContainer, Card } from './style';
import useProfile from '../../hooks/useProfile';
import ExpenseAPI from '../../api/ExpenseAPI';
import truncate from '../../util/truncate';
import { toast, ToastContainer } from 'react-toastify';
import useHistoryHook from "../../hooks/useHistory";


function ExpenseView() {
    const { profileInfo } = useProfile();
    const [data, setData] = useState([]);
    useEffect(() => {
        return getExpenses();
    }, [])
    function getExpenses() {
        ExpenseAPI.get().then((results) => {
            setData(results?.docs);
            console.log(results?.docs);
        }).catch((error) => console.log(error));
    }

    function handleDelete(id) {
        ExpenseAPI.delete(id).then((results) => {
            if(results) {
                console.log(results)
                const deleteExpense = data?.filter(doc => {
                    return doc?._id !== results?._id;
                })
                setData(deleteExpense);
            } else {
                return null
            }
            toast(`Successfully deleted ${results?._id}`);
        }).catch((error) => console.log(error));
    }
    const { navigate } = useHistoryHook();
    return (
        <ExpenseContainer>
            <Navbar />
            <div className="dashboard-header">
                <h3>{profileInfo.username}'s Expenses</h3>
                {/*<span></span>*/}
            </div><br />
            <div className="card-flex">
                {data?.length > 0 ? data?.map(expense => (
                    <Card key={expense?._id}>
                        <div className="header">
                            <h4>{expense?.title}</h4>
                            <span>
                                <i className="fas fa-trash" onClick={() => handleDelete(expense?._id)} />{' '}
                                <i className="far fa-edit" onClick={() => navigate(`/update-expense/${expense?._id}`)} />
                            </span>
                        </div>
                        <p>{truncate(expense?.description, 35)}</p>
                        <p>£{expense?.amount}</p>
                    </Card>
                )): <span>No Expenses found!</span>}
            </div>
            <ToastContainer
                position="top-center"
            />
        </ExpenseContainer>
    )
}

export default ExpenseView;
