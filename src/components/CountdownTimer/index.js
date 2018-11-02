import React, { Component } from "react";
import styles from "./CountdownTimer";
import addMinutes from "date-fns/add_minutes";
import addSeconds from "date-fns/add_seconds";
import addHours from "date-fns/add_hours";
import addDays from "date-fns/add_days";
import differenceInMilliseconds from "date-fns/difference_in_milliseconds";
import * as constants from "../../constants";
import { min } from "date-fns";

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
        this.setTimeRemaining = this.setTimeRemaining.bind(this);
        this.stop = this.stop.bind(this);
        this.step = this.step.bind(this);
    }

    componentDidMount() {
        const countdownDate = this.calculateCountdownDate();
        console.log(countdownDate);
        const difference = differenceInMilliseconds(countdownDate, Date.now());
        const setTimeRemaining = this.setTimeRemaining;
        this.setTimeRemaining(difference);
        let interval = 1000;
        let expectedDifference = difference - interval; //59 - 1 = 58

        setTimeout(step, interval);

        function step() {
            const deltaTime = differenceInMilliseconds(countdownDate, Date.now());
            setTimeRemaining(deltaTime);
            const elapsed = expectedDifference - deltaTime;
            console.log(elapsed);
            expectedDifference -= elapsed;
            console.log(interval);
            setTimeout(step, interval - elapsed);
        }
    }
    
    componentWillUnmount() {
        this.stop();
    }

    stop() {
        clearInterval(this.interval)
    }

    setTimeRemaining(milliseconds) {
        let remainder = milliseconds;
        let days= "00";
        let hours = "00";
        let minutes = "00";
        let seconds = "00";

        function normalizeTime(time) {
            if (time < 10) {
                return time.toFixed(0).padStart(2, "0");
            } else {
                return time;
            }
        }

        if (remainder >= constants.DAYS_TO_MS) {
            console.log(remainder, "remainder");
            days = Math.floor(remainder / constants.DAYS_TO_MS);
            console.log(days, "days");
            remainder %= constants.DAYS_TO_MS;
            console.log(remainder, "remainderafter")
        }

        if (remainder >= constants.HOURS_TO_MS) {
            hours = normalizeTime(Math.floor(remainder / constants.HOURS_TO_MS));
            remainder %= constants.HOURS_TO_MS;
        }

        if (remainder >= constants.MINUTES_TO_MS) {
            minutes = normalizeTime(Math.floor(remainder / constants.MINUTES_TO_MS));
            remainder %= constants.MINUTES_TO_MS;
        }

        if (remainder >= constants.SECONDS_TO_MS) {
            seconds = normalizeTime(Math.floor(remainder / constants.SECONDS_TO_MS));
            remainder %= constants.SECONDS_TO_MS;
        }

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
