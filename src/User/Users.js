class Users {
  static instance;
  constructor() {
    if (Users.instance) return Users.instance;
    this.users = [];
  }
  static getInstance() {
    if (Users.instance) return Users.instance;
    Users.instance = new Users();
    return User.instance;
  }
  add(user) {
    this.users.push(user);
  }
}

export { Users };
