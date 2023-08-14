/**
 * @param event {Event}
 */
export default function (event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
    console.log('event');
    const link = event?.notification?.data?.FCM_MSG?.notification?.click_action;
    console.log('Event FCM MSG', event.notification);
    console.log('Link', link);
    event.waitUntil(self.clients.matchAll({
        type: 'window',
    }).then(function (clientList) {
        console.log('result');
        console.log(clientList);
        for (let i = 0; i < clientList.length; i++) {
            console.log(clientList);
            const client = clientList[i];
            if (client.url === link && 'focus' in client) {
                return client.focus();
            }
        }
        /* const url = new URL(link, self.location.href);
        const originUrl = new URL(self.location.origin);
        if (IS_PRODUCTION && url.host !== originUrl.host) {
            return;
        } */
        if (self.clients.openWindow) {
            console.log('openWindow');
            return self.clients.openWindow(link)
                .then(windowClient => {
                    console.log('windowClient', windowClient);
                    if (windowClient) {
                        return windowClient.focus();
                    }
                    return null;
                });
        }
    }));
};
