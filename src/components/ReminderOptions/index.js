import React from "react";
import Select from "../general/Select";
import * as constants from "../../constants";
import styles from "./ReminderOptions.css";

const ReminderOptions = (props) => {
    const options = [
        {name: "in", value: constants.IN},
        {name: "every", value: constants.EVERY},
        {name: "at", value: constants.AT}
    ];

    return (
        <Select className={styles.ReminderOptions} onChange={props.onChange} options={options} />
    );
}

export default ReminderOptions;