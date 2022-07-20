import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    if(props.expenses.length===0) {
        return ( <p className="expenses-list__fallback">Found no expenses</p> );
    }

    return (<ul className="expenses-list">
        {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          cost={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>);
};

export default ExpenseList;