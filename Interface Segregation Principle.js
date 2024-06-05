// Интерфейс для аутентификации
class Auth {
    login() {
        throw new Error('Method login() must be implemented');
    }
}

// Интерфейс для авторизации
class Authorize {
    checkPermissions() {
        throw new Error('Method checkPermissions() must be implemented');
    }
}

// Класс, реализующий интерфейсы для аутентификации и авторизации
class UserAuth extends Auth {
    login(user) {
        console.log(`${user.name} logged in`);
    }
}

class UserAuthorize extends Authorize {
    checkPermissions(user, permission) {
        console.log(`${user.name} has ${permission} permission`);
    }
}
