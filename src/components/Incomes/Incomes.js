import React from "react";
import './Incomes.css';

class Incomes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Incomes">
                <div className="Incomes-fields">
                    <input placeholder="Name" type="text" required />
                    <input placeholder="Amount" type="number" required />
                </div>

                <div className="Incomes-type">
                    <input id="weekly" type="radio" name="answer" value="weekly" required />
                    <label htmlFor="weekly">Weekly</label>
                    <input id="biweekly" type="radio" name="answer" value="biweekly" required />
                    <label htmlFor="biweekly">Bi-Weekly</label>
                </div>

                <div className="Incomes-submit">
                    <a>Add Income</a>
                </div>

            </div>
        );
    }
}

export default Incomes;