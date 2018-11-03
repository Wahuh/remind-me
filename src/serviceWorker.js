const version = "v1"

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(version).then((cache) => {
            return cache.addAll([
                "/dist/index.html",
                "/dist/serviceWorker.js",
                "/dist/serviceWorker.map",
                "/dist/src.7281b79d.map",
                "/dist/src.753794ac.css",
                "/dist/src.ce34fcbf.js",
            ]);
        })
    );
});