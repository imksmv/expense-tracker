import Form from "../components/Form.tsx";
import ExpenseList from "../components/ExpenseList.tsx";
import { useState } from "react";

export default function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 12, category: "utilities" },
    { id: 2, description: "bbb", amount: 12, category: "utilities" },
    { id: 3, description: "ccc", amount: 12, category: "utilities" },
  ]);

  return (
    <>
      <Form />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}
