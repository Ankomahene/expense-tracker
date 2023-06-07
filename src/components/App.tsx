import { ExpensesContextProvider } from '../context/ExpensesContext';
import { ThemeContextProvider } from '../context/ThemeContext';
import { ExpenseList } from './ExpenseList';
import { Form } from './Form';
import { Header } from './Header';

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-start">
        <ExpensesContextProvider>
          <Form />
          <div className="md:col-span-2">
            <ExpenseList />
          </div>
        </ExpensesContextProvider>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
