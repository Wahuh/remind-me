export const checkNotificationSupport = () => {
    if ("Notification" in window) {
        requestNotificationPermission();
    }    
}

export const requestNotificationPermission = () => {
    if (Notification.permission === "default") {
        Notification.requestPermission().then((permission) => {
            Notification.permission = permission;
        });
    } else if (Notification.permission === "denied") {
        console.log(Notification.permission);
    }
}

export const sendNotification = (date, message) => {
    const options = {
        body: 
        `${message}
    ${date.toLocaleString()}`,
    };

    if (navigator.serviceWorker) {
        try {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification("Remind Me", options);
            });
        } catch(error) {
            const notification = new Notification("Remind Me", options);
        }
    } else {
        const notification = new Notification("Remind Me", options);
    }
}

