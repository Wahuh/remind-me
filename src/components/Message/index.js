import React from "react";
import Input from "../general/Input";
import styles from "./Message.css";

const Message = ({ value, onEnter, onChange }) => {
    return (
        <div className={styles.Message}>
            <Input value={value} onEnter={onEnter} onChange={onChange} className={styles.MessageInput} placeholder="Enter a message" />
        </div>
    );
}

export default Message;