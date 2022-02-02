import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {

    const expenses = [
        {
            id: 'e1',
            title: 'Groceries',
            amount: 115,
            date: new Date(2022,2,1)
        },
        {
            id: 'e2',
            title: 'Culvers',
            amount: 36,
            date: new Date(2022,2,1)
        },
        {
            id: 'e3',
            title: 'Costco',
            amount: 100,
            date: new Date(2022,2,1)
        }
    ];

  return (
    <div className="App">
      <body>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>

      </body>
    </div>
  );
}

export default App;
