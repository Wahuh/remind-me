import React from "react";
import styles from "./PermissionsGranted.css";
import Button from "../general/Button";

const PermissionsGranted = ({ onClick }) => (
    <div className={styles.PermissionsGranted}>
        <p>This app sends you reminders via browser notifications.</p>
        <ol>
            <li className={styles.ListItem}>Type a message which you will want to see later.</li>
            <li className={styles.ListItem}>
                Set the amount of time, for example:
                <ul>
                    <li>in 5 minutes</li>
                    <li>in 30 seconds</li>
                    <li>in 1000 days!</li>
                    {/* <li>every 2 hours</li> */}
                </ul>
            </li>
            <li className={styles.ListItem}>Click on the "+" button to create a timer or press enter when typing a message.</li>
        </ol>
    </div>
);

export default PermissionsGranted;