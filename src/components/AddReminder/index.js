import React, { Component, Fragment } from "react";
import Button from "../general/Button";
import ReminderOptions from "../ReminderOptions";
import TimeOptions from "../TimeOptions";
import Message from "../Message";
import styles from "./AddReminder.css";
import PlusIcon from "../icons/PlusIcon";
import shortid from "shortid";
import Toast from "../general/Toast";
import * as constants from "../../constants";

class AddReminder extends Component {
    state = {
        mode: constants.IN,
        reminder: {
            message: "",
            timeIncrement: 0,
            incrementType: constants.MINUTES,
        },
        validation: {
            message: false,
            timeIncrement: false,
        },
    };

    changeMode = event => {
        this.setState({
            mode: event.target.value
        });
    }

    changeMessage = event => {
        this.setState({
            reminder: {
                ...this.state.reminder,
                message: event.target.value
            }
        });
    }

    changeTimeIncrement = value => {
        this.setState({
            reminder: {
                ...this.state.reminder,
                timeIncrement: value,
            }
        });
    }

    changeIncrementType = event => {
        this.setState({
            reminder: {
                ...this.state.reminder,
                incrementType: event.target.value,
            }
        });
    }

    addReminder = () => {
        const { timeIncrement } = this.state.reminder;

        if (!this.state.reminder.message) {
            const validation = { ...this.state.validation };
            validation.message = true;
            this.setState({ ...this.state, validation });
        } else if (!timeIncrement || timeIncrement == 0) {
            const validation = { ...this.state.validation };
            validation.timeIncrement = true;
            this.setState({ ...this.state, validation });
        } else {
            this.props.onAdd({ ...this.state.reminder, id: shortid.generate()});
            this.setState({
                reminder: {
                    ...this.state.reminder,
                    message: "",
                },
                validation: {
                    message: false,
                    timeIncrement: false
                }
            });
        }

    }

    removeToast = name => {
        const validation = { ...this.state.validation };
        validation[name] = false;
        setTimeout(() => this.setState({ ...this.state, validation }), 2500)
    }

    render() {
        const { validation } = this.state;
        return (
            <Fragment>
                <div className={styles.AddReminder}>
                    <div className={styles.InputContainer}>
                        <Message onEnter={this.addReminder} onChange={this.changeMessage} />

                        <div className={styles.OptionsContainer}>
                            <ReminderOptions onChange={this.changeMode} />
                            <TimeOptions 
                            onChangeTimeIncrement={this.changeTimeIncrement} 
                            mode={this.state.mode} 
                            timeIncrement={this.state.reminder.timeIncrement}
                            onChangeIncrementType={this.changeIncrementType}
                            incrementType={this.state.reminder.incrementType}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.ButtonContainer}>
                    <Button className={styles.AddReminderButton} onClick={this.addReminder}>
                        <PlusIcon />
                    </Button>
                </div>
                {validation.message && <Toast onMount={() => this.removeToast("message")} toast={{ message: "Please enter a message", status: "success" }} />}
                {validation.timeIncrement &&  <Toast onMount={() => this.removeToast("timeIncrement")} toast={{ message: "Please enter a number greater than 0", status: "success" }} />}
            </Fragment>
        );
    }
}

export default AddReminder;