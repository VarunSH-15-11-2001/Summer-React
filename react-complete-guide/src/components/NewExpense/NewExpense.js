import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const changeExpenseDataHandler = (enteredData) => {
    const expenseData = { ...enteredData, id: Math.random().toString() };
    console.log(expenseData);
    props.onNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onChangeExpenseData={changeExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
