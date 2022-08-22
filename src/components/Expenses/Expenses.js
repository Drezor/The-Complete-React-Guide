import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2022");

  const YearChangeHandler = (chosenYear) => {
    setChosenYear(chosenYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == chosenYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={chosenYear} onYearChange={YearChangeHandler} />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
