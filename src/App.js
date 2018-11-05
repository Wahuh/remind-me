import React, { Component } from "react";
import AddReminder from "./components/AddReminder";
import ReminderList from "./components/ReminderList";
import RemindMe from "./components/RemindMe";
import styles from "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminders: [],
        };
        this.addReminder = this.addReminder.bind(this);
    }

    addReminder(reminder) {
        this.setState({
            reminders: [...this.state.reminders, reminder]
        })
    }

    render() {
        return (
            <div className={styles.App}>
                <div className={styles.Container}>
                    <RemindMe />
                </div>

                <div className={styles.Container}>
                    <AddReminder onAdd={this.addReminder} />
                    <div className={styles.ReminderListContainer}>
                        <ReminderList reminders={this.state.reminders} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;