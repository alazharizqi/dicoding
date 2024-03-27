import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        // object parameter
        // this.setState = {
        //     count: 0
        // };

        // function parameter
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                {/* display data counut */}
                <p>{this.state.count}</p>
            </div>
        )
    }
}