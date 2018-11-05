const version = "v1";

self.addEventListener("install", (event) => {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
    workbox.precaching.precacheAndRoute([]);

    // if (workbox) {
    // console.log(`Yay! Workbox is loaded 🎉`);
    // } else {
    // console.log(`Boo! Workbox didn't load 😬`);
    // }

    // workbox.routing.registerRoute(
    //     new RegExp('.*\.js'),
    //     workbox.strategies.networkFirst()
    // );

    // event.waitUntil(
    //     caches.open(version).then((cache) => {
    //         return cache.addAll([
    //             "index.html",
    //             "/dist/serviceWorker.js",
    //             "/dist/serviceWorker.map",
    //             "/dist/src.7281b79d.map",
    //             "/dist/src.753794ac.css",
    //             "/dist/src.ce34fcbf.js",
    //         ]);
    //     })
    // );
});