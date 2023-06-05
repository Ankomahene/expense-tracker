import { GiMoneyStack } from 'react-icons/gi';
import { Theme } from './Theme';

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-teal-700 text-white">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <GiMoneyStack /> Expense Tracker
      </div>
      <Theme />
    </div>
  );
};
