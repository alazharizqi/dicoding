class MailService {
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
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receiver) {
            this.sendMessage(message, receiver);
        }
    }
}

const whatsapp = new MailService("+6282873682374");
const email = new MailService("jarjar@gmail.com");