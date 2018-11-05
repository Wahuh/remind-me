import React, { Component } from "react";
import Button from "../general/Button";
import ReminderOptions from "../ReminderOptions";
import TimeOptions from "../TimeOptions";
import Message from "../Message";
import styles from "./AddReminder.css";
import PlusIcon from "../general/PlusIcon";
import * as constants from "../../constants";

class AddReminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: constants.IN,
            reminder: {
                message: "",
                timeIncrement: 0,
                incrementType: constants.MINUTES,
            },
            error: {
                exists: false,
                type: "",
            },
        };

        this.changeMode = this.changeMode.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
        this.addReminder = this.addReminder.bind(this);
        this.changeTimeIncrement = this.changeTimeIncrement.bind(this);
        this.changeIncrementType = this.changeIncrementType.bind(this);
    }

    changeMode(event) {
        this.setState({
            mode: event.target.value
        });
        console.log(this.state);
    }

    changeMessage(event) {
        this.setState({
            reminder: {
                ...this.state.reminder,
                message: event.target.value
            }
        });
    }

    changeTimeIncrement(value) {
        console.log(value);
        this.setState({
            reminder: {
                ...this.state.reminder,
                timeIncrement: value,
            }
        });
    }

    changeIncrementType(event) {
        this.setState({
            reminder: {
                ...this.state.reminder,
                incrementType: event.target.value,
            }
        });
    }

    addReminder() {
        console.log(this.state.reminder);
        if (!this.state.reminder.message) {
            console.log("Please enter a message");
            this.setState({
                error: {
                    ...this.state.error,
                    exists: true,
                    type: constants.TIME_ERROR,
                }
            });
        } else if (!this.state.reminder.timeIncrement) {
            this.setState({
                error: {
                    ...this.state.error,
                    exists: true,
                    type: constants.MESSAGE_ERROR,
                }
            });
        } else {
            this.props.onAdd(this.state.reminder);
            this.setState({
                reminder: {
                    ...this.state.reminder,
                    message: "",
                },
                error: {
                    ...this.state.error,
                    exists: false,
                    type: "",
                }
            });
        }

    }
    
    render() {
        return (
            <div className={styles.AddReminder}>
                <div className={styles.InputContainer}>
                    <div className={styles.MessageContainer}>
                        <Message erorr={this.state.error.exists} type={this.state.error.type} value={this.state.reminder.message} onChange={this.changeMessage} />
                    </div>

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

                <div className={styles.ButtonContainer}>
                    <Button className={styles.AddReminderButton} onClick={this.addReminder}>
                        <PlusIcon />
                    </Button>
                </div>
            </div>
        );
    }
}

export default AddReminder;