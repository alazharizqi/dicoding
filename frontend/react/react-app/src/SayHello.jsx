import React from "react";

function SayHello(props) {
    const name = props.name;
    const company = props.company;

    return (
        <p>
            Hello, {name} from {company}!
        </p>
    )
}