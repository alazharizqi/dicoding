import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        };

        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    }

    onEmailChangeHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    render() {
        return (
            <form action="">
                <input type="text" value={this.state.email} onChange={this.onEmailChangeHandler} />
            </form>
        )
    }
}