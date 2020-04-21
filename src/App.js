import React from 'react';
import './App.css';

import Incomes from './components/Incomes/Incomes.js';
import Expenses from './components/Expenses/Expenses.js';
import Calendar from './components/Calendar/Calendar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onDayClick = (e, day) => {
    alert(day);
  }

  render() {
    return (
      <div className="App">
        <h1>budgit</h1>
        <Calendar onDayClick={(e, day)=>this.onDayClick(e, day)}/>
        <Incomes />
        <Expenses />
      </div>
    );
  }
}

export default App;