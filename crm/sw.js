// VERSIÓN: crm/sw.js v1 · 18 de noviembre de 2026 · hace que el CRM se instale como app aparte de Operaciones. No guarda nada en caché.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
