import React from "react";
import CountdownTimer from "../CountdownTimer";

const Reminder = (props) => {
    return (
        <div>
            {props.message}
            <CountdownTimer incrementType={props.incrementType} timeIncrement={props.timeIncrement} />
        </div>
    );
}

export default Reminder;