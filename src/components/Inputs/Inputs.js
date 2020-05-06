import React from "react";
import './Inputs.css';

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 2,
            type: 'income',
            name: 'name',
            amount: 0,
            repeats: 'repeats',
            date: 0,
        };
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleAmountChange(event) {
        this.setState({ amount: event.target.value });
    }

    handleTypeChange(event) {
        this.setState({ type: event.target.value });
    }

    handleTimeChange(event) {
        this.setState({ repeats: event.target.value })
    }

    handleSubmit() {
        if (this.state.type === "income") {
            return this.props.handleIncomeSubmit(this.state);
        } else if (this.state.type === "expense") {
            return this.props.handleExpenseSubmit(this.state);
        }
    }

    render() {
        return (
            <div className="Inputs">
                    <select className="Inputs-type" onChange={this.handleTypeChange}>
                        <option name="type" value="income" >Income</option>
                        <option name="type" value="expense" >Expense</option>
                    </select>
                <div className="Inputs-fields">
                    <input placeholder="Name" type="text" onChange={this.handleNameChange}/>
                    <input placeholder="Amount" type="number" onChange={this.handleAmountChange} />
                </div>
                <div className="Inputs-time" onChange={this.handleTimeChange}>
                    <input type="radio" id="weekly" name="repeat" value="weekly"/>
                    <label htmlFor="weekly">Weekly</label>
                    <input type="radio" id="monthly" name="repeat" value="monthly"/>
                    <label htmlFor="monthly">Monthly</label>
                </div>
                <div className="Inputs-submit">
                    <a onClick={this.handleSubmit} >Add Input</a>
                </div>
                <div>
                    Hello world {this.state.name} {this.state.amount} {this.state.type} {this.state.repeats} {this.state.date}
                </div>
            </div>
        );
    }
}

export default Inputs;