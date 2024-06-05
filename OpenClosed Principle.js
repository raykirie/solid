// Базовый класс для уведомлений
class Notification {
    send() {
        throw new Error('Method send() must be implemented');
    }
}

// Расширение базового класса для email уведомлений
class EmailNotification extends Notification {
    send(user) {
        console.log(`Sending email to ${user.email}`);
    }
}

// Расширение базового класса для SMS уведомлений
class SMSNotification extends Notification {
    send(user) {
        console.log(`Sending SMS to ${user.name}`);
    }
}
