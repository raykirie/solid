// Класс отвечает только за управление данными пользователя
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Класс отвечает только за валидацию данных пользователя
class UserValidator {
    static validate(user) {
        if (!user.name || !user.email) {
            throw new Error('Invalid user data');
        }
    }
}
