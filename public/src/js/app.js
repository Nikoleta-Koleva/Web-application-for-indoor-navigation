/* Service Worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/server.js')
    .then(function() {
      console.log('SW registered');
    });
}


/* Navigation */
function startNavigation() {

}
