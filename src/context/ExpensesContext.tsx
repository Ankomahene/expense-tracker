import { ReactNode, createContext, useState } from 'react';
import { IExpense, IExpensesContext } from '../model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ExpensesContext = createContext<IExpensesContext>(null as any);

interface IAppContextProviderProps {
  children: ReactNode;
}

export const ExpensesContextProvider = ({
  children,
}: IAppContextProviderProps) => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  const addExpense = (expense: IExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const removeExpense = (id: string) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const clearAllExpenses = () => {
    setExpenses([]);
  };

  return (
    <ExpensesContext.Provider
      value={{ expenses, addExpense, removeExpense, clearAllExpenses }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
