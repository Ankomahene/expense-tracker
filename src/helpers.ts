import { IExpense, Theme } from './model';

export const calculateTotalExpenses = (expenses: IExpense[]) => {
  return expenses.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );
};

const lightBgPercentage = '100%';
const darkTextPercentage = '10%';

const darkBgPercentage = '14%';
const lightTextPercentage = '100%';

export const setCssTheme = (theme: Theme) => {
  document.documentElement.style.setProperty('--theme', theme);

  if (theme === 'light') {
    document.documentElement.style.setProperty(
      '--bg-lightness',
      lightBgPercentage
    );
    document.documentElement.style.setProperty(
      '--text-lightness',
      darkTextPercentage
    );
  }

  if (theme === 'dark') {
    document.documentElement.style.setProperty(
      '--bg-lightness',
      darkBgPercentage
    );
    document.documentElement.style.setProperty(
      '--text-lightness',
      lightTextPercentage
    );
  }
};

export const borderColor = {
  light: 'border-gray-300',
  dark: 'border-gray-500',
};
