import { FaTrashAlt } from 'react-icons/fa';
import { borderColor } from '../helpers';
import { IExpense } from '../model';

interface IExpenseItemProps {
  expense: IExpense;
}

const theme = 'dark';

export const ExpenseItem = () => {
  return (
    <li className={`mb-2 border ${borderColor[theme]} rounded-md`}>
      <div className="flex justify-between py-5 px-6">
        <div>Water Bill</div>
        <div className="flex">
          <div className="mx-6">GH₵ 65</div>
          <button className="text-red-400 px-1 rounded-sm">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
};
