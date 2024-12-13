if ('serviceWorker' in navigator) {
  // Wait until window is loaded before registering.
  window.addEventListener('load', () => {
    // Register the service worker with "/" as it's scope.
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
      // Output success/failure of registration.
      .then(() => console.log('service worker registered'))
      .catch(() => console.error('service worker registration failed'));
  });
}
