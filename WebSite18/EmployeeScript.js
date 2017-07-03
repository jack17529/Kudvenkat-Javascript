function Employee(name) {
    this.name = name;
}

Employee.prototype.getFullName = function () {
    return this.name;
}