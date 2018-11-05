import React from "react";
import Typography from "../general/Typography";
import Button from "../general/Button";
import { requestNotificationPermission } from "../../notifications";
import styles from "./RemindMe.css";

const RemindMe = (props) => {
    return (
        <div className={styles.RemindMeContainer}>
            <div className={styles.RemindMe}>
                <Typography color="#f5f6fa" type="subtitle">Remind me...</Typography>
                <Typography color="#f5f6fa" type="body2">
                    Do you forget things? Send yourself a reminder! 
                </Typography>
                <Typography color="#f5f6fa" type="body2">This app will send you reminders via notifications so please allow them!</Typography>
                <Button className={styles.AllowNotificationsButton} onClick={requestNotificationPermission}>
                    <Typography color="#f5f6fa" type="body" >Allow notifications</Typography>
                </Button>
            </div>
            <div className={styles.Instructions}>
                <Typography color="#f5f6fa" type="body2">Step 1: Enter a reminder for yourself. </Typography>
                <Typography color="#f5f6fa" type="body2">Step 2: Choose when you want to receive the reminder e.g. in 2 hours, every 5 minutes or at 09:30 AM!</Typography>
                <Typography color="#f5f6fa" type="body2">Step 3: Click on the + button and you will get a notification at the right time!</Typography>
            </div>
        </div>
    );
}

export default RemindMe;