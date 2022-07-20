import React, { useState } from "react";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setYear] = useState("2022");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const yearUpdateHandler = (filteredYear) => {
    setYear(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onUpdateYear={yearUpdateHandler} />
      <ExpensesList expenses={filteredExpenses} />

      {/* <ExpenseItem
        title={props.expenses[0].title}
        cost={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        cost={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        cost={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        cost={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
