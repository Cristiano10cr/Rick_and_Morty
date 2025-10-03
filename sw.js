const CACHE_NAME = "rick-morty-cache-v1";
const urlsToCache = [
  "/Rick_and_Morty/",
  "/Rick_and_Morty/index.html",
  "/Rick_and_Morty/css/style.css",
  "/Rick_and_Morty/js/Home.js",
  "/Rick_and_Morty/js/Detalle.js",
  "/Rick_and_Morty/js/Favoritos.js",
  "/Rick_and_Morty/js/Informativa.js",
  "/Rick_and_Morty/js/Original.js",
  "/Rick_and_Morty/js/Conexion.js"
];

// Instalar Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar y limpiar caches viejos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Interceptar requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
