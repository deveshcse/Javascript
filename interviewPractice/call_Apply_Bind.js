let name = {
    firstName: 'devesh',
    lastName: 'mishra',
    printFullName: function () {
        console.log(this.firstName+ " " + this.lastName);
    }
}

name.printFullName();