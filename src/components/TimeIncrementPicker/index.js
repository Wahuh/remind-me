import React from "react";
import Input from "../general/Input";

const TimeIncrementPicker = (props) => {
    return (
        <Input value={props.value} onChange={props.onChange} type="number" min={0} defaultValue={0} />
    );
}

export default TimeIncrementPicker;