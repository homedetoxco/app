// VERSIÓN: app/sw.js v1 · 15 de noviembre de 2026 · necesario para que el navegador ofrezca "Instalar app". No guarda nada en caché: siempre usa la versión en línea.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
