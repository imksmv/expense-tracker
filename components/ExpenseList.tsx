interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
}

export default function ExpenseList({ expenses }: Props) {
  return (
    <table className="table table-border">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => <tr key={expense.id}>
          <td>{expense.description}</td>
          <td>{expense.amount}</td>
          <td>{expense.category}</td>
          <td>
            <button className="btn btn-outline-danger"></button>
          </td>
        </tr>)}
      </tbody>
    </table>
  );
}
