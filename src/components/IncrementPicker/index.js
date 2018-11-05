import React from "react";
import Select from "../general/Select";
import * as constants from "../../constants";
import styles from "./IncrementPicker.css";

const IncrementPicker = (props) => {
    const options = [
        {name: "minutes", value: constants.MINUTES},
        {name: "seconds", value: constants.SECONDS},
        {name: "hours", value: constants.HOURS},
        {name: "days", value: constants.DAYS},
    ]

    return (
        <Select className={styles.IncrementPicker} onChange={props.onChange} options={options} />
    );
}

export default IncrementPicker;