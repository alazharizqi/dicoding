import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("component created");
    }

    render() {
        // const { name } = this.props;

        // return (
        //     <div>
        //         <p>Hello, {name}!</p>
        //     </div>
        // );

        return <p>Hello, {this.props.name}!</p>;
    }
}

export default MyComponent;