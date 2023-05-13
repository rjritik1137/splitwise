import { Expenses } from "../expense/Expenses.js";
import { Edges } from "../edge/Edges.js";
import { Users } from "../User/Users.js";

class Database {
  constructor() {
    this.users = [];
  }
  addExpense(expense) {
    Expenses.getInstance().add(expense);
  }
  addEdge(edge) {
    Edges.getInstance().add(edge);
  }
  addUser(user) {
    Users.getInstance().add(user);
  }
  getUser() {
    return this.users;
  }
}

const database = new Database();

export { database };
