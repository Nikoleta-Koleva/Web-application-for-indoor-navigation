/* Adds files to the cache for faster loading on user's screen*/
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
         cache.add('/');
          cache.addAll([
              '/',
              'public/404.html',
              'public/index.html',
              'public/navigationPage.html',
              'public/src/css/homePage.css',
              'public/src/css/main.css',
              'public/src/css/navigationPage.css',
              'public/src/css/themes.css',
              'public/src/images/app-icon-96x96.png',
              'public/src/images/app-icon-144x144.png',
              'public/src/images/app-icon-256x256.png',
              'public/src/images/app-icon-512x512.png',
              'public/src/images/appIcon.PNG',
              'public/src/images/firstFloorNavigation.png',
              'public/src/images/groundFloor.png',
              'public/src/images/groundFloorInstructionsToFirst.png',
              'public/src/images/groundFloorNavigation.png',
              'public/src/images/logo200x70.png',
              'src/js/navigationPage.js'
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