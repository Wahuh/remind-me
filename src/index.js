import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker.register("./serviceWorker.js")
    .then(reg => console.log("Service worker registered", reg.scope))
    .catch(error => console.log("Error, service worker not registered", error));
}

ReactDOM.render(<App />, document.getElementById("root"));