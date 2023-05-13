function User({ name = "", email = "", id = "" }) {
  this.name = name;
  this.email = email;
  this.id = id;
}

User.prototype.setId = function (id) {
  this.id = id;
};
User.prototype.isValid = function () {
  if (this.name && this.email && this.name !== "" && this.email !== "") {
    return true;
  }
  return false;
};

export { User };
