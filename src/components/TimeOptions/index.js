import React, { Fragment } from "react";
import * as constants from "../../constants";
import NumberPicker from "../NumberPicker";
import IncrementPicker from "../IncrementPicker";

const TimeOptions = ({ 
    mode, 
    timeIncrement, 
    onChangeIncrementType, 
    onChangeTimeIncrement
}) => {
        return (
            <Fragment>
                <NumberPicker value={timeIncrement} onChange={onChangeTimeIncrement} />
                <IncrementPicker onChange={onChangeIncrementType}/>
            </Fragment>
        );
}

export default TimeOptions;