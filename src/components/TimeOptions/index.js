import React, { Fragment } from "react";
import * as constants from "../../constants";
import NumberPicker from "../NumberPicker";
import IncrementPicker from "../IncrementPicker";
import styles from "./TimeOptions.css";

const TimeOptions = (props) => {
        let picker;
        const { 
            mode, 
            timeIncrement, 
            onChangeIncrementType, 
            onChangeTimeIncrement
        } = props;

        if (mode === constants.AT) {

        } else {
            picker = (
                <Fragment>
                    <NumberPicker value={timeIncrement} onChange={onChangeTimeIncrement} />
                    <IncrementPicker onChange={onChangeIncrementType}/>
                </Fragment>
            );
        }
    
        return (
            <Fragment>
                {picker}
            </Fragment>
        );
}

export default TimeOptions;