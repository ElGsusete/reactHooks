export const useSyncExternalStoreCode = `import { useSyncExternalStore } from 'react';

// Ejemplo: Suscribirse al estado de red
function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function ChatStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return <h1>{isOnline ? '✅ Online' : '❌ Offline'}</h1>;
}`;
