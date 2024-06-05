// Абстракция для хранения данных
class Storage {
    save(data) {
        throw new Error('Method save() must be implemented');
    }
}

// Реализация абстракции для хранения данных в базе данных
class DatabaseStorage extends Storage {
    save(data) {
        console.log('Saving data to the database');
    }
}

// Высокоуровневый модуль, который зависит от абстракции Storage
class UserService {
    constructor(storage) {
        this.storage = storage;
    }

    saveUser(user) {
        this.storage.save(user);
    }
}

const storage = new DatabaseStorage();
const userService = new UserService(storage);

const user = new User('Jane Doe', 'jane@example.com');
userService.saveUser(user);
