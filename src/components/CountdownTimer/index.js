import React, { Component } from "react";
import styles from "./CountdownTimer";
import addMinutes from "date-fns/add_minutes";
import addSeconds from "date-fns/add_seconds";
import addHours from "date-fns/add_hours";
import addDays from "date-fns/add_days";
import differenceInMilliseconds from "date-fns/difference_in_milliseconds";
import * as constants from "../../constants";

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: "00",
            minutes: "00",
            seconds: "00",
        };
        this.calculateCountdownDate = this.calculateCountdownDate.bind(this);
        this.setTimeRemaining = this.setTimeRemaining.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        const countdownDate = this.calculateCountdownDate();
        console.log(countdownDate);
        const difference = differenceInMilliseconds(countdownDate, Date.now());
        const setTimeRemaining = this.setTimeRemaining;
        setTimeRemaining(difference);
        const interval = 1000;
        let expectedDifference = difference - interval;

        setTimeout(step, interval);

        function step() {
            const deltaTime = differenceInMilliseconds(countdownDate, Date.now());
            if (deltaTime > 0) {
                setTimeRemaining(deltaTime);
                const elapsed = expectedDifference - deltaTime;
                console.log(elapsed, "elapsed");
                expectedDifference -= elapsed;
                console.log(expectedDifference, "expected");
                setTimeout(step, interval - elapsed);
            }
        }
    }

    componentWillUnmount() {
    }

    stop() {
        clearInterval(this.interval)
    }

    setTimeRemaining(milliseconds) {
        let remainder = milliseconds;
        let days;
        let hours;
        let minutes;
        let seconds;

        function normalizeTime(time) {
            if (time < 10) {
                return time.toFixed(0).padStart(2, "0");
            } else {
                return time;
            }
        }

        if (remainder >= constants.DAYS_TO_MS) {
            days = Math.floor(remainder / constants.DAYS_TO_MS);
            remainder %= constants.DAYS_TO_MS;
        } else {
            days = "00";
        }

        if (remainder >= constants.HOURS_TO_MS) {
            hours = normalizeTime(Math.floor(remainder / constants.HOURS_TO_MS));
            remainder %= constants.HOURS_TO_MS;
        } else {
            hours = "00";
        }

        if (remainder >= constants.MINUTES_TO_MS) {
            minutes = normalizeTime(Math.floor(remainder / constants.MINUTES_TO_MS));
            remainder %= constants.MINUTES_TO_MS;
        } else {
            minutes = "00";
        }

        if (remainder >= constants.SECONDS_TO_MS) {
            console.log(remainder);
            seconds = normalizeTime(Math.floor(remainder / constants.SECONDS_TO_MS));
            console.log(seconds, "seconds");
            remainder %= constants.SECONDS_TO_MS;
            console.log("after remainder", remainder);
        } else {
            seconds = "00";
        }

        //if days is undef... etc

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
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
        const {seconds, minutes, hours, days} = this.state;
        return (
            <div className={styles.CountdownTimer}>

                <div className={styles.TimeContainer}>
                    <div>{days}</div>
                    <div>d:</div>
                </div>

                <div className={styles.TimeContainer}>
                    <div>{hours}</div>
                    <div>h:</div>
                </div>

                <div className={styles.TimeContainer}>
                    <div>{minutes}</div>
                    <div>m:</div>
                </div>
                
                <div className={styles.TimeContainer}>
                    <div>{seconds}</div>
                    <div>s</div>
                </div>

            </div>
        );
    }
}

export default CountdownTimer;
