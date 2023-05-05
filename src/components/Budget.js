import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { totalExpenses } from './ExpenseTotal';


const Budget = () => {
    const { expenses } = useContext(AppContext);
    totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span><input type="number" name="Budget" defaultValue={budget} min={totalExpenses} max={20000} step={10}></input>
            

        </div>
        
    );
    
};





export default Budget;
