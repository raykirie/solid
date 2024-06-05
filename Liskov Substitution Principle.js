// Базовый класс пользователя
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Класс администратора, который наследуется от User
class AdminUser extends User {
    constructor(name, email, permissions) {
        super(name, email);
        this.permissions = permissions;
    }
}

// Пример функции, которая работает как с User, так и с AdminUser
function sendNotification(user) {
    console.log(`Sending notification to ${user.name}`);
}

const user = new User('John Doe', 'john@example.com');
const admin = new AdminUser('Admin', 'admin@example.com', ['all']);

sendNotification(user);
sendNotification(admin);
