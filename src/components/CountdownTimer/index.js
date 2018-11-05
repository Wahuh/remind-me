import React, { Component } from "react";
import styles from "./CountdownTimer";
import Typography from "../general/Typography";
import addMinutes from "date-fns/add_minutes";
import addSeconds from "date-fns/add_seconds";
import addHours from "date-fns/add_hours";
import addDays from "date-fns/add_days";
import differenceInMilliseconds from "date-fns/difference_in_milliseconds";
import * as constants from "../../constants";
import { isThisSecond } from "date-fns";

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: "00",
            minutes: "00",
            seconds: "00",
            showDays: false,
            showHours: false,
            showMinutes: false,
            showSeconds: true,
        };
        this.calculateCountdownDate = this.calculateCountdownDate.bind(this);
        this.setTimeRemaining = this.setTimeRemaining.bind(this);
        this.configureDisplay = this.configureDisplay.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        const onSend = this.props.onSend;
        const countdownDate = this.calculateCountdownDate();
        const difference = differenceInMilliseconds(countdownDate, Date.now());
        console.log(difference,"diff1");
        const setTimeRemaining = this.setTimeRemaining;
        this.configureDisplay(difference);
        console.log(difference, "diff2");
        setTimeRemaining(difference);
        const interval = 1000;
        let expectedDifference = difference; //- interval;

        setTimeout(step, interval);

        function step() {
            const deltaTime = differenceInMilliseconds(countdownDate, Date.now());
            if (deltaTime > 0) {
                setTimeRemaining(deltaTime);
                const elapsed = expectedDifference - deltaTime;
                expectedDifference -= elapsed;
                setTimeout(step, interval - elapsed);
            } else {
                onSend(countdownDate);
            }
        }
    }

    configureDisplay(milliseconds) {
        let timeRemaining = milliseconds;
        console.log(timeRemaining, "timeremaining")

        if (timeRemaining >= constants.DAYS_TO_MS) {
            timeRemaining %= constants.DAYS_TO_MS;
            this.setState({
                ...this.state,
                showDays: true,
                showHours: true,
                showMinutes: true,
            });
        }

        if (timeRemaining >= constants.HOURS_TO_MS) {
            timeRemaining %= constants.HOURS_TO_MS;
            this.setState({
                ...this.state,
                showHours: true,
                showMinutes: true,
            });
        }

        if (timeRemaining >= constants.MINUTES_TO_MS) {
            timeRemaining %= constants.MINUTES_TO_MS;
            this.setState({
                ...this.state,
                showMinutes: true,
            });
        }
        console.log(this.state, "config");
    }

    componentWillUnmount() {
    }

    stop() {
        clearInterval(this.interval)
    }

    setTimeRemaining(milliseconds) {
        let timeRemaining = milliseconds;
        let days;
        let hours;
        let minutes;
        let seconds;

        let calcDays = true;
        let calcHours = true;
        let calcMinutes = true;
        let calcSeconds = true;

        function normalizeTime(time) {
            if (time < 10) {
                return time.toFixed(0).padStart(2, "0");
            } else {
                return time;
            }
        }

        if (calcDays) {
            if (timeRemaining >= constants.DAYS_TO_MS) {
                days = Math.floor(timeRemaining / constants.DAYS_TO_MS);
                timeRemaining %= constants.DAYS_TO_MS;
            } else {
                calcDays = false;
                days = "00";
            }
        }

        if (calcHours) {
            if (timeRemaining >= constants.HOURS_TO_MS) {
                hours = normalizeTime(Math.floor(timeRemaining / constants.HOURS_TO_MS));
                timeRemaining %= constants.HOURS_TO_MS;
            } else {
                calcHours = false;
                hours = "00";
            }
        }

        if (calcMinutes) {
            if (timeRemaining >= constants.MINUTES_TO_MS) {
                minutes = normalizeTime(Math.floor(timeRemaining / constants.MINUTES_TO_MS));
                timeRemaining %= constants.MINUTES_TO_MS;
            } else {
                calcMinutes = false;
                minutes = "00";
            }
        }

        if (calcSeconds) {
            if (timeRemaining >= constants.SECONDS_TO_MS) {
                seconds = normalizeTime(Math.floor(timeRemaining / constants.SECONDS_TO_MS));
                timeRemaining %= constants.SECONDS_TO_MS;
            } else {
                calcSeconds = false;
                seconds = "00";
            }
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
                {this.state.showDays && (
                    <div className={styles.TimeContainer}>
                        <Typography type="subtitle2">{days}</Typography>
                        <Typography type="subtitle2">d:</Typography>
                    </div>
                )}

                {this.state.showHours && (
                    <div className={styles.TimeContainer}>
                        <Typography type="subtitle2">{hours}</Typography>
                        <Typography type="subtitle2">h:</Typography>
                    </div>
                )}

                {this.state.showMinutes && (
                    <div className={styles.TimeContainer}>
                        <Typography type="subtitle2">{minutes}</Typography>
                        <Typography type="subtitle2">m:</Typography>
                    </div>
                )}

                <div className={styles.TimeContainer}>
                    <Typography type="subtitle2">{seconds}</Typography>
                    <Typography type="subtitle2">s</Typography>
                </div>

            </div>
        );
    }
}

export default CountdownTimer;
