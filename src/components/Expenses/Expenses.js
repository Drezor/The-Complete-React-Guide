import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2022");

  const YearChangeHandler = (chosenYear) => {
    setChosenYear(chosenYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === chosenYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={chosenYear} onYearChange={YearChangeHandler} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
