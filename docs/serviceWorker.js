const version = "v1";

self.addEventListener("install", (event) => {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "815dfcc0c1468bd8398f56405d3d1cef"
  },
  {
    "url": "src.92612b0a.js",
    "revision": "5d269ab85e4272a56ab1aa2ce30c220e"
  },
  {
    "url": "src.c65c45aa.css",
    "revision": "756ee12c39874c68273957582f451ec4"
  }
]);

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