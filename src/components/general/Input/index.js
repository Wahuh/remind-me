
import React, { Fragment } from "react";
import styles from "./Input.css";

const Input = ({
    autoFocus, 
    className, 
    contentEditable, 
    floatLabel, 
    label, 
    max, 
    min, 
    name, 
    onEnter, 
    onChange, 
    placeholder, 
    required, 
    type, 
    value, 
    validation, 
    successMessage, 
    onKeyPress,
    onBlur
}) => {
    function onEnterPress(event) {
        if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }
        let handled = false;
        if (event.key !== undefined) {
            if (event.key === "Enter") {
                onEnter();
                handled = true;
            } else {
                onKeyPress && onKeyPress();
            }
        } else if (event.keyCode !== undefined) {
            if (event.keyCode == 13) {
                onEnter();
                handled = true;
            } else {
                onKeyPress && onKeyPress();
            }
        }

        if (handled) {
            event.preventDefault();
        }
    }

    return (
        <Fragment>

            <input 
            className={className ? `${styles.Input} ` + className : styles.Input} 
            type={type} 
            contentEditable={contentEditable}
            autoFocus={autoFocus} 
            // ref={focus && (input => input && input.focus())}
            placeholder={placeholder}
            value={value}
            max={max}
            min={min}
            id={name}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onKeyPress={onEnterPress}
            data-success-message={successMessage}
            />
        </Fragment>
    );
}

export default Input;