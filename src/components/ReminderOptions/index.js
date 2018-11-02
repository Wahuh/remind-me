import React from "react";
import Select from "../general/Select";
import * as constants from "../../constants";

const ReminderOptions = (props) => {
    const options = [
        {name: "in", value: constants.IN},
        {name: "every", value: constants.EVERY},
        {name: "at", value: constants.AT}
    ];

    return (
        <Select onChange={props.onChange} options={options} />
    );
}

export default ReminderOptions;