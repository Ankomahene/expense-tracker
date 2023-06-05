import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { borderColor } from '../helpers';

const theme = 'dark';

export const Form = () => {
  const [item, setItem] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const handleAddExpense = () => {
    // handle adding of new expense
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-xl mb-4">New Expense</h1>
      <div>
        <input
          className={`rounded-md p-3 ${borderColor[theme]} border my-1 w-full`}
          type="text"
          placeholder="Item"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div>
        <input
          className={`rounded-md p-3  ${borderColor[theme]} border my-1 w-full`}
          type="number"
          placeholder="Amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      {message && (
        <div className="italic border border-red-300 text-center py-1 my-2 text-red-300 rounded-sm transition-all duration-1000">
          {message}
        </div>
      )}
      <div>
        <button
          className="flex justify-center gap-2 items-center px-4 py-3 bg-teal-700 text-white font-semibold rounded-md w-full my-1"
          type="submit"
          onClick={handleAddExpense}
        >
          <FaPlus /> Add Expense
        </button>
      </div>
    </div>
  );
};
