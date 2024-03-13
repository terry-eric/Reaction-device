self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('fox-store').then((cache) => cache.addAll([
            '/White-Cane-Public/sytle.css',
            '/White-Cane-Public/index.js',
            '/White-Cane-Public/animation_erase.js',
            '/White-Cane-Public/bluetooth.js',
            '/White-Cane-Public/chart.js',
            '/White-Cane-Public/csv_save.js',
            '/White-Cane-Public/keep_wake.js',
            '/White-Cane-Public/mouse_event.js',
            '/White-Cane-Public/voice.js',
            '/White-Cane-Public/utils.js',
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});