import React from "react";
import Typography from "../general/Typography";
import styles from "./RemindMe.css";

const RemindMe = (props) => {
    return (
        <div className={styles.RemindMe}>
            <Typography type="title">Remind me...</Typography>
        </div>
    );
}

export default RemindMe;