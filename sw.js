const cacheName = "DEV-HUB-V1";

const assets = [
    "/",
    "/index.html",
    "/js/script.js",
    "/css/all.min.css",
    "/css/style.css",
    "/webfonts/fa-brands-400.ttf",
    "/webfonts/fa-brands-400.woff2",
    "/webfonts/fa-regular-400.ttf",
    "/webfonts/fa-regular-400.woff2",
    "/webfonts/fa-solid-900.ttf",
    "/webfonts/fa-solid-900.woff2",
    "/webfonts/fa-v4compatibility.ttf",
    "/webfonts/fa-v4compatibility.woff2",
    "/imges/1.mp4",
    "/imges/2.mp4",
    "/imges/3.mp4",
    "/imges/4.mp4",
    "/imges/lower.jpg",
    "/imges/upper.jpg",
    "/imges/code-solid.svg",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
];

// store files in catch-storeage
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(assets);
      })
      .catch((err) => {
        console.error("Error caching files:", err);
      })
  );
});

// update files
self.addEventListener("activate", (activateEvent) => {
  activateEvent.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});
// take file from catch-storeage and show it ofline
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
