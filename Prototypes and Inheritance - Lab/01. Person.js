class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(value) {
        const [first, last] = value.split(' ');
        this.firstName = first;
        this.lastName = last;
    }
}