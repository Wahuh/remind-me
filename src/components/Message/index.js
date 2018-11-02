import React from "react";
import Input from "../general/Input";
import styles from "./Message.css";

const Message = (props) => {
    return (
        <div className={styles.Message}>
            <p className={styles.RemindMessage}>Remind me to:</p>
            <Input value={props.value} onChange={props.onChange} className={styles.MessageInput} placeholder="Enter a message for yourself" />
        </div>
    );
}

export default Message;