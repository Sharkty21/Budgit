import React from 'react';
import './App.css';

import Inputs from './components/Inputs/Inputs.js';
import Calendar from './components/Calendar/Calendar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomes: [{key: 1, type: 'income', name: 'name', amount: 0, repeats: 'repeats', date: 0,},{key: 1, type: 'income', name: 'name', amount: 0, repeats: 'repeats', date: 0,}],
      expenses: []
    };
    this.handleIncomeSubmit = this.handleIncomeSubmit.bind(this);
    this.handleExpenseSubmit = this.handleExpenseSubmit.bind(this);
  }

  onDayClick = (e, day) => {
    alert(day);
  }

  handleIncomeSubmit(income) {
    this.state.incomes.push(income);
  }

  handleExpenseSubmit(expense) {
    this.state.expenses.push(expense);
  }

  render() {
    return (
      <div className="App">
        <h1>budgit</h1>
        <Calendar onDayClick={(e, day) => this.onDayClick(e, day)} />
        <Inputs
          incomes={this.state.incomes}
          expenses={this.state.expenses}
          handleIncomeSubmit={this.handleIncomeSubmit}
          handleExpenseSubmit={this.handleExpenseSubmit}
        />
        <div><div>Incomes: {this.state.incomes.map(incomes => {return <div>{incomes.name}</div>})}</div>
            <div>Expenses: {this.state.expenses.map(expenses => {return <div>{expenses.name}</div>})}</div></div>
      </div>
    );
  }
}

export default App;