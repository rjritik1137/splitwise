class Expenses {
  static instance;
  constructor() {
    this.expenses = [];
  }
  static getInstance() {
    if (Expenses.instance) return Expenses.instance;
    Expenses.instance = new Expenses();
    return Expenses.instance;
  }
  add(expense) {
    this.expenses.push(expense);
  }
}

export { Expenses };
