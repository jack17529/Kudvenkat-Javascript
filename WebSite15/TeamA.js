var pragimTech = pragimTech || {};
pragimTech.TeamA = pragimTech.TeamA || {};


pragimTech.TeamA.customer = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
    return this;
}