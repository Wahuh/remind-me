import React from "react";
import styles from "./ReminderList.css";
import Reminder from "../Reminder";

const ReminderList = ({ reminders }) => {
    return (
        <ul className={styles.ReminderList}>
            {reminders.map(
                reminder => <Reminder 
                        key={reminder.id}
                        message={reminder.message} 
                        timeIncrement={reminder.timeIncrement} 
                        incrementType={reminder.incrementType} 
                    />
            )}
        </ul>
    );
}

export default ReminderList;