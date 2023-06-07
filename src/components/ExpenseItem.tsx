import { FaTrashAlt } from 'react-icons/fa';
import { borderColor } from '../helpers';
import { IExpense } from '../model';
import { useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesContext';
import { ThemeContext } from '../context/ThemeContext';

interface IExpenseItemProps {
  expense: IExpense;
}

export const ExpenseItem = ({ expense }: IExpenseItemProps) => {
  const { removeExpense } = useContext(ExpensesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <li className={`mb-2 border ${borderColor[theme]} rounded-md`}>
      <div className="flex justify-between py-5 px-6">
        <div>{expense.item}</div>
        <div className="flex">
          <div className="mx-6">GH₵ {expense.amount}</div>
          <button
            onClick={() => removeExpense(expense.id)}
            className="text-red-400 px-1 rounded-sm"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
};
