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
