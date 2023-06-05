import { AiOutlineInbox } from 'react-icons/ai';
import { borderColor } from '../helpers';

const theme = 'dark';

export const ExpenseList = () => {
  return (
    <div className="px-8 md:border-l border-gray-400 min-h-[250px]">
      <div className="flex justify-between px-4 text-teal-500 text-xl py-8 mb-4">
        <p>Total Spending</p>
        <div>GH₵ 100</div>
      </div>
      <div className="container mx-auto">
        <div
          className={`flex justify-center items-center flex-col gap-2 italic border ${borderColor[theme]} text-gray-500 rounded-md h-24`}
        >
          <AiOutlineInbox />
          <p>No Items in your list</p>
        </div>

        <>
          {/* <div className="text-right mb-2">
              <button
                onClick={clearAllExpenses}
                className="text-sm text-gray-400 hover:bg-gray-700 active:bg-gray-600 py-1 px-2 rounded-sm transition-all duration-200"
              >
                Clear All
              </button>
            </div> 
            <div className="overflow-hidden sm:rounded-md">
              <ul>
                {expenses.map((expense) => (
                  <ExpenseItem key={expense.id} expense={expense} />
                ))}
              </ul>
            </div> */}
        </>
      </div>
    </div>
  );
};
