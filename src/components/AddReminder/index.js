import React, { Component } from "react";
import Button from "../general/Button";
import ReminderOptions from "../ReminderOptions";
import TimeOptions from "../TimeOptions";
import Message from "../Message";
import styles from "./AddReminder.css";
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
            }
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

    changeTimeIncrement(event) {
        this.setState({
            reminder: {
                ...this.state.reminder,
                timeIncrement: event.target.value,
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
        this.props.onAdd(this.state.reminder);
        this.setState({
            reminder: {
                ...this.state.reminder,
                message: "",
                timeIncrement: 0,
            }
        })
    }
    
    render() {
        return (
            <div className={styles.AddReminder}>
                <div className={styles.Container}>
                    <Message value={this.state.reminder.message} onChange={this.changeMessage} />
                
                    <div className={styles.Container}>
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
            
                <Button onClick={this.addReminder}>Add Reminder</Button>
            </div>
        );
    }
}

export default AddReminder;