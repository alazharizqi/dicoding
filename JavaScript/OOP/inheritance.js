// superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

// subclass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

// subclass
class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const whatsapp = new WhatsAppService("+6282873682374");
const email = new EmailService("jarjar@gmail.com");

whatsapp.sendMessage("Hello", "+6282873682374");
whatsapp.sendBroadcastMessage('Hello', ['+6289529148732546', '+6289593427466']);


email.sendMessage("Hello", "jarjar@gmail.com");
email.sendDelayedMessage("Hello", "jarjar@gmail.com", 3000);

// instanceof untuk ngecek objek instance dari classnya
console.log(whatsapp instanceof WhatsAppService);
console.log(whatsapp instanceof EmailService);