import React from "react";
import CountdownTimer from "../CountdownTimer";
import Typography from "../general/Typography";
import styles from "./Reminder.css";

const Reminder = (props) => {
    return (
        <div className={styles.Reminder}>
            <div className={styles.ReminderMessage}>
                <Typography type="body">{props.message}</Typography>
            </div>

            <div className={styles.ReminderTimer}>
                <CountdownTimer incrementType={props.incrementType} timeIncrement={props.timeIncrement} />
            </div>
        </div>
    );
}

export default Reminder;