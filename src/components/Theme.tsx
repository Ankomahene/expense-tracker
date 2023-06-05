import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const theme = 'dark';

export const Theme = () => {
  return (
    <div className="mx-2">
      <button className="border border-teal-600 text-gray-900 p-2 rounded-full">
        {theme === 'dark' ? <BsMoonFill /> : <BsSunFill />}
      </button>
    </div>
  );
};
