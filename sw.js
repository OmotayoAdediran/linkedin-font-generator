// Simple offline-first service worker for fonts.alienpreneur.com
const CACHE_NAME = "alienpreneur-fontgen-v1";
const URLS_TO_CACHE = ["/", "/index.html"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
