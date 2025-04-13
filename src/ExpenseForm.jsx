import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [form, setForm] = useState({
    expense:'',
    description: '',
    amount: '',
    category: '',
    date: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { expense,description, amount, category, date } = form;
    if (expense && description && amount && category && date) {
      onAddExpense({ ...form, id: crypto.randomUUID() });
      setForm({ expense: '',description: '', amount: '', category: '', date: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input name="expense" placeholder='Expense' value={form.expense} onChange={handleChange}/>
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="date" type="date" value={form.date} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
