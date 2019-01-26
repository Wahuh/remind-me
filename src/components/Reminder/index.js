import React, { Component } from "react";
import Countdown from "react-countdown-now";
import CountdownTimer from "../CountdownTimer";
import Button from "../general/Button";
import CloseIcon from "../icons/CloseIcon";
import { sendNotification } from "../../notifications";
import styles from "./Reminder.css";
import addMinutes from "date-fns/add_minutes";
import addSeconds from "date-fns/add_seconds";
import addHours from "date-fns/add_hours";
import addDays from "date-fns/add_days";
import differenceInMilliseconds from "date-fns/difference_in_milliseconds";
import * as constants from "../../constants";

class Reminder extends Component {
    state = { 
        shouldRender: true,
        date: this.calculateCountdownDate()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.shouldRender != this.state.shouldRender) {
            return true;
        }
        return false;
    }

    sendReminder = () => {
        sendNotification(this.state.date, this.props.message);
    }

    deleteReminder = () => {
        this.setState({ shouldRender: false });
    }

    calculateCountdownDate() {
        const timeIncrement = this.props.timeIncrement;
        switch(this.props.incrementType) {
            case constants.MINUTES:
                return addMinutes(Date.now(), timeIncrement);
            case constants.SECONDS:
                return addSeconds(Date.now(), timeIncrement);
            case constants.HOURS:
                return addHours(Date.now(), timeIncrement);
            case constants.DAYS:
                return addDays(Date.now(), timeIncrement);
        }
    }

    render() {
        const { shouldRender, date } = this.state;
        const { timeIncrement, incrementType, message } = this.props;
        return (
            shouldRender ? (
            <li className={styles.Reminder}>
                <div className={styles.ReminderMessage}>
                    <p>{message} in <strong>{timeIncrement} {timeIncrement == 1 ? incrementType.slice(0, -1).toLowerCase() : incrementType.toLowerCase()}</strong></p>
                </div>

                <div className={styles.ReminderTimer}>
                    <Countdown onComplete={this.sendReminder} date={date}>
                        <div className={styles.Completed}>
                            <p>Completed</p>
                            <Button onClick={this.deleteReminder}>
                                <CloseIcon />
                            </Button>
                        </div> 
                    </Countdown>
                </div>
            </li>
            ) : null
        );
    }
}

export default Reminder;