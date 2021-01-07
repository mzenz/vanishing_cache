const CACHE_NAME = 'MyCache';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.add('/');
      })
      .then(() => {
        console.debug(CACHE_NAME, 'created and populated');
      })
  );
});

self.addEventListener('activate', (event) => {
  console.debug('SW activated');
});
