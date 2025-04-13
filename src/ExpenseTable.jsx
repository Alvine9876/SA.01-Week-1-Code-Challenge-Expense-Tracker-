const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        <tr>
            <td>Grocery Shopping</td>
            <td>Weekly groceries from the market</td>
            <td>$80</td>
            <td>food</td>
            <td>6-12-2025</td>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.expense}</td>
            <td>{exp.description}</td>
            <td>${exp.amount}</td>
            <td>{exp.category}</td>
            <td>{exp.date}</td>
            <td>
              <button onClick={() => onDelete(exp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
