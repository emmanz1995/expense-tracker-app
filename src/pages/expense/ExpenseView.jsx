import React, { useState, useEffect } from 'react';
import Navbar from "../../component/navigation/Navbar";
import { ExpenseContainer, Card } from './style';
import useProfile from '../../hooks/useProfile';
import ExpenseAPI from '../../api/ExpenseAPI';
import {DropdownMenu, MenuItem} from "react-bootstrap-dropdown-menu";
import truncate from "../../util/truncate";

function ExpenseView() {
    const { profileInfo } = useProfile();
    const [data, setData] = useState([]);
    useEffect(() => {
        return getExpenses();
    }, [])
    function getExpenses() {
        ExpenseAPI.get().then((results) => {
            setData(results?.docs);
            console.log(results.docs);
        }).catch((error) => console.log(error));
    }
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
                                <i className="fas fa-trash" />{' '}
                                <i className="far fa-edit" />
                            </span>
                        </div>
                        <p>{truncate(expense?.description, 35)}</p>
                        <p>£{expense?.amount}</p>
                    </Card>
                )): <span>No Expenses found!</span>}
            </div>
        </ExpenseContainer>
    )
}

export default ExpenseView;
