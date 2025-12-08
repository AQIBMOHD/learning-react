const CACHE_NAME = 'swiggy-clone-v2';
const urlsToCache = [
    '/',
    // '/index.html', // Usually served at /
    // We remove index.css because Parcel hashes it (e.g., index.1234.css)
    // The 'fetch' event will cache it dynamically when visited.
];

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
    // Force waiting SW to become active immediately
    self.skipWaiting();
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    );
    // Claim clients immediately
    event.waitUntil(self.clients.claim());
});

// Listen for requests (Network First Strategy)
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests or chrome-extension requests
    if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Check if we received a valid response
                // Allow 'basic' (same-origin) and 'cors' (cross-origin like our API)
                if (!response || response.status !== 200 || (response.type !== 'basic' && response.type !== 'cors')) {
                    return response;
                }

                // Clone the response
                const responseToCache = response.clone();

                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                return response;
            })
            .catch(() => {
                // If network fails, try to serve from cache
                return caches.match(event.request);
            })
    );
});
