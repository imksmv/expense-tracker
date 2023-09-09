import ExpenseForm from "../components/ExpenseForm.tsx";
import ExpenseList from "../components/ExpenseList.tsx";
import ExpenseFilter from "../components/ExpenseFilter.tsx";
import { useState } from "react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 12, category: "Utilities" },
    { id: 2, description: "bbb", amount: 8.32, category: "Entertainment" },
    { id: 3, description: "ccc", amount: 6, category: "Groceries" },
    { id: 4, description: "ddd", amount: 2, category: "Groceries" },
  ]);

  const visibleCategory = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <h1 className="title d-flex justify-content-center my-5">
        Expense Tracker
      </h1>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}
