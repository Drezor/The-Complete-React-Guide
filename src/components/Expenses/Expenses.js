import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2022");
  const [expenses, setExpenses] = useState(props.expenses);

  const YearChangeHandler = (chosenYear) => {
    setChosenYear(chosenYear);

    setExpenses(
      expenses.filter((prevExpenses) => {
        return prevExpenses.date.getFullYear() === chosenYear;
      })
    );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={chosenYear} onYearChange={YearChangeHandler} />
      {expenses.map((expense) => {
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
