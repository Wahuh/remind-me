import React from "react";
import styles from "./ReminderList.css";
import Reminder from "../Reminder";

const ReminderList = (props) => {
    const reminders = props.reminders.map(reminder => {
        return (
        <li className={styles.ReminderItem}><Reminder message={reminder.message} timeIncrement={reminder.timeIncrement} incrementType={reminder.incrementType} /></li>
    );
});

    console.log(reminders)
    return (
        <ul className={styles.ReminderList}>
            {reminders}
        </ul>
    );
}

export default ReminderList;