import React, { Component } from "react";
import CountdownTimer from "../CountdownTimer";
import Typography from "../general/Typography";
import { sendNotification } from "../../notifications";
import styles from "./Reminder.css";

class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        }
        this.sendReminder = this.sendReminder.bind(this);
    }

    sendReminder(date) {
        sendNotification(date, this.state.message);
    }

    render() {
        return (
            <div className={styles.Reminder}>
                <div className={styles.ReminderMessage}>
                    <Typography type="body">{this.state.message}</Typography>
                    <Typography type="body">&nbsp;in {this.props.timeIncrement} {this.props.incrementType.toLowerCase()}</Typography>
                </div>
    
                <div className={styles.ReminderTimer}>
                    <CountdownTimer 
                    onSend={this.sendReminder} 
                    incrementType={this.props.incrementType} 
                    timeIncrement={this.props.timeIncrement} />
                </div>
            </div>
        );
    }
}

export default Reminder;