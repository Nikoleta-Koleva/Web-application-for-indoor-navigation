// Check for service worker
if ("serviceWorker" in navigator) {
  send().catch(err => console.error(err));
}

// Register SW
async function send() {
  // Register Service Worker
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/"
  });
}
