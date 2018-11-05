export const checkNotificationSupport = () => {
    if ("Notification" in window) {
        requestNotificationPermission();
    }    
}

export const requestNotificationPermission = () => {
    if (Notification.permission === "default") {
        Notification.requestPermission().then((permission) => {
            console.log(permission);
        });
    } else if (Notification.permission === "denied") {
        console.log(Notification.permission);
    }
}

export const sendNotification = (date, message) => {
    const notification = new Notification(
        "Remind Me",
        {
            body: 
            `${message}
${date.toLocaleString()}`,
        }
    );
}