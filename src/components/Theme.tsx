import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="mx-2">
      <button
        onClick={toggleTheme}
        className={`border ${
          theme === 'light' ? 'border-teal-600' : 'border-gray-800'
        } text-gray-900 p-2 rounded-full`}
      >
        {theme === 'dark' ? (
          <BsMoonFill />
        ) : (
          <span className="text-gray-200">
            <BsSunFill />
          </span>
        )}
      </button>
    </div>
  );
};
