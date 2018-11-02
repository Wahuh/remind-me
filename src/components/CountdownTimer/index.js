import React, { Component } from "react";
import styles from "./CountdownTimer";
import addMinutes from "date-fns/add_minutes";
import addSeconds from "date-fns/add_seconds";
import addHours from "date-fns/add_hours";
import addDays from "date-fns/add_days";
import differenceInMilliseconds from "date-fns/difference_in_milliseconds";
import differenceInSeconds from "date-fns/difference_in_seconds";
import * as constants from "../../constants";

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        this.calculateCountdownDate = this.calculateCountdownDate.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        const countdownDate = this.calculateCountdownDate();
        console.log(countdownDate, "countdown");
        let interval = 1000;

        this.interval = setInterval(() => {
            const difference = differenceInMilliseconds(countdownDate, Date.now())
            console.log(difference);
            if (difference > 0) {
                const seconds = difference / 1000;
                const minutes = seconds / 60;
                const hours = minutes / 60;
                const days = hours / 24;
                this.setState({
                    days: Math.floor(days),
                    hours: Math.floor(hours),
                    minutes: Math.floor(minutes),
                    seconds: Math.floor(seconds),
                });
            } else {
                this.stop();
            }
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    stop() {
        clearInterval(this.interval)
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

    start() {
        const date = this.props.date;
    }

    render() {
        const {seconds, minutes, hours, days} = this.state;

        return (
            <div className={styles.CountdownTimer}>
                <div>{days}</div>
                <div>d:</div>
                <div>{hours}</div>
                <div>h:</div>
                <div>{minutes}</div>
                <div>m:</div>
                <div>{seconds}</div>
                <div>s</div>
            </div>
        );
    }
}

export default CountdownTimer;
