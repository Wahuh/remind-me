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
        Notification.requestPermission().then((permission) => {
            console.log(permission);
        });
    }
}

export const sendNotification = (date, message) => {
//     const notification = new Notification(
//         "Remind Me",
//         {
//             body: 
//             `${message}
// ${date.toLocaleString()}`,
//         }
//     );
    Notification.requestPermission((permission) => {
        if (permission === "granted") {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification(
                    "Remind Me",
                    {
                        body: 
                        `${message}
${date.toLocaleString()}`,
                    }
                );
            });
        }
    });
}