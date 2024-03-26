import React from "react";

class MyComponent extends React.Component {
    render() {
        const { name } = this.props;

        return (
            <div>
                <p>Hello, {name}!</p>
            </div>
        );
    }
}