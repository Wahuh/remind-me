import React, { Component } from "react";
import AddReminder from "./components/AddReminder";
import ReminderList from "./components/ReminderList";
import RemindMe from "./components/RemindMe";
import styles from "./App.css";
import NavBar from "./components/NavBar";

class App extends Component {
    state = {
        reminders: [],
        hasNotifications: false,
        hasPermissions: false
    };

    componentDidMount() {
        this.detectNotificationSupport();
    }

    detectNotificationSupport = () => {
        if ("Notification" in window) {
            if (Notification.permission === "granted") {
                this.setState(
                    prevState => ({ 
                        ...prevState, 
                        hasNotifications: true,
                        hasPermissions: true
                    })
                );
            }
            else if (Notification.permission === "denied" || Notification.permission === "default") {
                this.setState(
                    prevState => ({
                        ...prevState, 
                        hasNotifications: true,
                        hasPermissions: false
                    })
                );
            }
        }
    }

    requestNotificationPermissions = () => {
        try {
            Notification.requestPermission()
            .then(permission => {
                console.log("permission", permission);
                if (permission === "granted") {
                    this.setState(prevState => ({ ...prevState, hasPermissions: true }));
                }
            });                                                                                                                                          
        } catch (error) {
            // Safari doesn't return a promise for requestPermissions and it                                                                                                                                       
            // throws a TypeError. It takes a callback as the first argument                                                                                                                                       
            // instead.
            if (error instanceof TypeError) {
                Notification.requestPermission(permission => {
                    if (permission === "granted") {
                        this.setState(prevState => ({ ...prevState, hasPermissions: true }));
                    }
                });
            } else {
                throw error;                                                                                                                                                                             
            }                                                                                                                                                                                                      
        }      
    }

    addReminder = reminder => {
        this.setState(prevState => ({
            ...prevState,
            reminders: [...prevState.reminders, reminder]
        }))
    }

    render() {
        const { hasNotifications, hasPermissions } = this.state;
        return (
            <div className={styles.App}>
                <NavBar 
                    hasNotifications={hasNotifications} 
                    hasPermissions={hasPermissions}
                    onRequest={this.requestNotificationPermissions}
                />

                <main>
                    <div className={styles.Container}>
                        <AddReminder onAdd={this.addReminder} />
                    </div>

                    <div className={styles.Container}>
                        <ReminderList reminders={this.state.reminders} />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;