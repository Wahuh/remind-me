import React from "react";
import Input from "../general/Input";
import Typography from "../general/Typography";
import styles from "./Message.css";
import * as constants from "../../constants";

const Message = (props) => {
    return (
        <div className={styles.Message}>
            <div className={props.error ? styles.ErrorMessageShow : styles.ErrorMessageHide}>
                {props.type === constants.MESSAGE_ERROR && <Typography type="body2">Please enter a message</Typography>}
                {props.type === constants.TIME_ERROR && <Typography type="body2">Please enter a time</Typography>}
            </div>
            <Input value={props.value} onEnter={props.onEnter} onChange={props.onChange} className={styles.MessageInput} placeholder="Enter a message" />
        </div>
    );
}

export default Message;