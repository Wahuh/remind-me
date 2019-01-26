import React from "react";
import styles from "./NotSupported.css";
import Button from "../general/Button";

const NotSupported = ({ onClick }) => (
    <div className={styles.NotSupported}>
        <p>Unfortunately your browser does not support web notifications.</p>
        <p>If you can, please try one of these browsers:</p>
        <ul>
            <li>Google Chrome</li>
            <li>Safari (desktop)</li>
            <li>Mozilla Firefox</li>
            <li>Microsoft Edge</li>
            <li>Opera</li>
        </ul>
    </div>
);

export default NotSupported;