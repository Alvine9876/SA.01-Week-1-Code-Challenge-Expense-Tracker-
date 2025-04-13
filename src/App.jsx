import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import SearchBar from './SearchBar';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.description.toLowerCase().includes(search.toLowerCase()) ||
    exp.category.toLowerCase().includes(search.toLowerCase()) ||
    exp.expense.toLowerCase().includes(search.toLowerCase())

  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>
  );
};

export default App;
