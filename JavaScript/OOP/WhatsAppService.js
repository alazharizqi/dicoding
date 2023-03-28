class WhatsAppService {
    cunstructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receiver) {
            this.sendMessage(message, receiver);
        }
    }
}

class EmailService {
    cunstructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    sendDelayedMessage(message, receiver, delay) {
        setTimeOut(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}