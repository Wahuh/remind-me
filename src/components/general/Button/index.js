import React from "react";
import styles from "./Button.css";
import { func, string } from "prop-types";

const Button = (props) => {
    let className = styles.Button;
    if (props.className) {
        className += ` ${props.className}`;
    }

    return (
        <button type={props.type} onClick={props.onClick} className={className} >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    className: string,
    type: string,
    onClick: func.isRequired,
}

export default Button;