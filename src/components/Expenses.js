import ExpenseItem from "./ExpenseItem";

function Expenses(){

    // let data = require('./expense.json');
    //let expenses = require('./expense.json');
    // for (let expense of data) {
    //     console.log(expense);
    //     let dateString = expense.date;
    //     const date = dateString.split("/");
    //     console.log(date);
    //     const year = date[0];
    //     const month = date[1];
    //     const day = date[2];
    //     expense.date = new Date(year,month,day);
    //     console.log(expense.date);
    //     expenses.push(expense);
    // }

    const expenses = [
        {
            id: "e1",
            title: "Groceries",
            amount: 115,
            date: new Date(2022,2,1)
        },
        {
            id: "e2",
            title: "Culvers",
            amount: 36,
            date: new Date(2022,2,2)
        },
        {
            id: "e3",
            title: "Costco",
            amount: 100,
            date: new Date(2022,2,1)
        },
        {
            id: "e4",
            title: "Subway",
            amount: 6,
            date: new Date(2022,2,5)
        }
    ]

   // console.log(expenses);

    // for (const expense of props) {
    //     expenses.push(<ExpenseItem props={expense} />);
    // }

    return(
        <div>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        </div>
    );

}

export default Expenses;