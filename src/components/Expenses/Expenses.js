import React from "react";
import './Expenses.css';

class Expenses extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Expenses">
                <div className="Expenses-fields">
                    <input placeholder="Name" type="text" required />
                    <input placeholder="Amount" type="number" required />
                </div>

                <div className="Expenses-type">
                    <input id="weekly" type="radio" name="answer" value="weekly" required />
                    <label htmlFor="weekly">Monthly</label>
                    <input id="biweekly" type="radio" name="answer" value="biweekly" required />
                    <label htmlFor="biweekly">Weekly</label>
                </div>

                <div className="Expenses-submit">
                    <a>Add Expense</a>
                </div>

            </div>
        );
    }
}

export default Expenses;