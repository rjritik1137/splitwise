function Expense(id, payerId, splits) {
  this.id = id;
  this.payerId = payerId;
  this.splits = splits;
}

module.exports = { Expense };
