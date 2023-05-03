import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import totalExpenses from './ExpenseTotal.js';

const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span><input type="number" defaultValue={budget} min={totalExpenses}></input>
        </div>
    );
};
export default Budget;
