import { database } from "./Database.js";

class DatabaseHelper {
  getEdgesFromExpense() {}
  doesUserExistInDb(user) {
    const _user = database.getUser().find((u) => u.email === user.email);
    if (_user) return true;
    return false;
  }
  isUserIdAlreadyExist(id) {
    return !!database.getUser().find((user) => user.id === id);
  }
  setupUser(user) {
    database.addUser(user);
  }
}

const databaseHelper = new DatabaseHelper();

export { databaseHelper };
