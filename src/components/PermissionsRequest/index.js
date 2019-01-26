import React from "react";
import styles from "./PermissionsRequest.css";
import Button from "../general/Button";

const PermissionsRequest = ({ onClick }) => (
    <div className={styles.PermissionsRequest}>
        <p>This app requires permissions to send you reminders via browser notifications</p>
        <Button onClick={onClick}>
            Allow Notifications
        </Button>
    </div>
);

export default PermissionsRequest;