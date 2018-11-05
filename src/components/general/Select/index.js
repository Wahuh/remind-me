import React from "react";
import styles from "./Select.css"

const Select = (props) => {
    let className = styles.Select;
    if (props.className) {
        className += ` ${props.className}`;
    }

    const options = props.options.map(option => <option key={option.value} value={option.value}>{option.name}</option>);

    return (
        <select onChange={props.onChange} className={className}>
            {options}
        </select>
    );
}

export default Select;