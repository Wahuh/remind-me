const version = "v1";

self.addEventListener("install", (event) => {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "36e36fe23829f157b832c028b378ca56"
  },
  {
    "url": "src.1dc4e70a.js",
    "revision": "e63c3f29f30fc0da3642562a685a9d65"
  },
  {
    "url": "src.753794ac.css",
    "revision": "c1d45a170149d16dbbbf16287219e593"
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