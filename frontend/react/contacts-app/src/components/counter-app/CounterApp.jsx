import React from "react";

function CounterDisplay({ count }) {
    if (count === 0) {
        return <p>{count}</p>;
    }

    if (count % 5 === 0 && count % 7 === 0) {
        return <p>FizzBuzz</p>;
    }

    if (count % 5 === 0) {
        return <p>Fizz</p>
    }

    if (count % 7 === 0) {
        return <p>Buzz</p>
    }

    return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
    return (
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    )
}

function ResetButton({ reset }) {
    return (
        <div>
            <button onClick={reset}>- reset</button>
        </div>
    )
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        // init count value inside state
        this.state = {
            count: 0
        };

        // binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventhandler = this.onResetEventhandler.bind(this);
    }

    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }

    onResetEventhandler() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventhandler} />
            </div>
        );
    }
}

export default CounterApp;