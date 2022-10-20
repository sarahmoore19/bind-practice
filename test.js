const Employee = require("./employee")

const john = new Employee("John Wick", "Dog Lover")
const henry = new Employee("Henry Wick", "Cat Lover")



const sayName = john.sayName.bind(henry);

setTimeout(sayName, 2000);

const sayOcc = henry.sayOccupation.bind(john);

setTimeout(sayOcc, 3000);
