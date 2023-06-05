import { ExpenseList } from './ExpenseList';
import { Form } from './Form';
import { Header } from './Header';

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-start">
        <Form />
        <div className="md:col-span-2">
          <ExpenseList />
        </div>
      </div>
    </>
  );
}

export default App;
