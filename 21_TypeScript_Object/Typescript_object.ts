// Write a program that creates Objects containing these items.

//Datatype Of Person Object
interface person {
    age :number,
    name :string,
    nationality :string,
    Student : Boolean
}

//Person Object
let person :person = {
    age : 25 ,
    name : 'Hammad' ,
    nationality : 'Pakistan',
    Student : true 

}

//Print Person
console.log(person);

//Datatype Of Car Object
interface car{
    maker :string ,
    color :string,
    automatic : boolean

}

//Car Object
let car:car = {
    maker:'Toyota' ,
    color : 'Red' ,
    automatic : true

}

//Print Car
console.log(car);
