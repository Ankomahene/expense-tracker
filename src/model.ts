export type Theme = 'light' | 'dark';

export interface IExpense {
  id: string;
  item: string;
  amount: number;
}

export interface IExpensesContext {
  expenses: IExpense[];
  addExpense: (newExpense: IExpense) => void;
  removeExpense: (id: string) => void;
  clearAllExpenses: () => void;
}

export interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}
