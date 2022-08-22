import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  let classes = props.className;

  const formSubmitHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onNewExpenseCreate(newExpenseData);
  }

  return (
    <div className={classes}>
      <ExpenseForm className="new-expense__form" onFormSubmit={formSubmitHandler}/>
    </div>
  );
}

export default NewExpense;
