self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
         cache.add('/');
          cache.addAll([
              '/',
              '/index.html',
              '/navigationPage.html',
              '/src/css/homePage.css',
              '/src/css/main.css',
              '/src/css/navigationPage.css',
              '/src/css/themes.css',
              '/src/js/app.js',
              '/src/js/homePage.js',
              '/src/js/navigationPage.js'
          ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});