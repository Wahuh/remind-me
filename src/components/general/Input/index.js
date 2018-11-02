import React from "react";
import styles from "./Input.css";
import { bool, func, string } from "prop-types";

const Input = (props) => {
    let className = styles.Input;
    if (props.className) {
        className += ` ${props.className}`;
    }

    return (
        <input 
        className={className} 
        type={props.type} 
        autoFocus={props.autoFocus} 
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        max={props.max}
        min={props.min}
        />
    );
}

Input.propTypes = {
    autoFocus: bool,
    className: string,
    onClick: func.isRequired,
    type: string,
    placeholder: string,
}

export default Input;