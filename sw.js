const CACHE_NAME = 'bello-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // Hier kommen später noch die Sounds (z.B. './sounds/bello-bark.mp3') rein
];

// Installieren und Daten in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Bei fehlendem Internet aus dem Cache laden
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});