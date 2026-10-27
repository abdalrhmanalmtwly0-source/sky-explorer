// ملف Service Worker للتعامل مع الإشعارات

self.addEventListener('install', function(event) {
    console.log('Service Worker تم تثبيته');
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker تم تفعيله');
    event.waitUntil(clients.claim());
});

self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {
        title: 'حدث فلكي جديد',
        body: 'هناك حدث فلكي مهم قادم!'
    };

    const options = {
        body: data.body || 'تحقق من التطبيق للمزيد من التفاصيل',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><circle cx="96" cy="96" r="90" fill="%23000010" stroke="%232c5d87" stroke-width="2"/><circle cx="96" cy="96" r="4" fill="%23ffffff"/><circle cx="80" cy="80" r="2" fill="%23ffffff"/><circle cx="110" cy="85" r="2" fill="%23ffffff"/><circle cx="75" cy="110" r="1.5" fill="%23ffffff"/></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><circle cx="96" cy="96" r="90" fill="%23000010"/></svg>',
        tag: 'astronomical-event',
        requireInteraction: true
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'مستكشف السماء', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(function(clientList) {
            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                if (client.url === '/' && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});
