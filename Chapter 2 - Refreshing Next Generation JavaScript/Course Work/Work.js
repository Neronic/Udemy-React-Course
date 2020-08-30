const myName = "Jacob";
console.log(myName);
//const doesn't allow for variable changes
myName = "James";
console.log(myName);

//function printMyName(name)
//1 argument doesn't need brackets. < 1 or > 1 requires brackets.
const printMyName = (name, age) => {
  console.log(name, age);
};
printMyName("Jacob", 26);

//Short compact version of the arrow function
const multiply = (number) => number * 2;
console.log(multiply(2));

//next gen JS, needs babel
class Human {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  };
}
//class inheritance
class Person extends Human {
  name = "Jacob";
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

//spread and rest operators
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; //spread operator. Without dots array would be [[1, 2, 3], 4]
console.log(newNumbers);

const person = {
  name: "Jacob",
};

const newPerson = {
  ...person,
  age: 26,
};

console.log(newPerson);

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));

//Destructuring
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); //pulls the first two numbers
[num1, , num3] = numbers;
console.log(num1, num3); //pulls the first and third numbers

//reference and primitive types
const number = 1; //primitive type
const num2 = number; //copy

const person = {
  name: "Jacob",
};
/*const secondPerson = person; //reference type*/
const secondPerson = {
  ...person,
};
person.name = "James";
console.log(secondPerson);

//refreshing array functions
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
  return num * 2;
}); //map is a built in array method, executes on each element

console.log(numbers);
console.log(doubleNumArray);
