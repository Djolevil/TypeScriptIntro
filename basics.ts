// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Jimi Hendrix";

let isGuitarist: boolean;

isGuitarist = true;

// More complex types

let hobbies: string[];

hobbies = ['Guitars', 'Games'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Jimi',
    age: 27,
}

let people: Person[];

// Type inference

let course: 'React - The Complete Guide'; 

// Union type

let stuff: string | number | boolean = 'Purple Haze';

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

// return type void

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
   const newArray = [value, ...array];
   return newArray;
}

const demoArray = [3, 5, 7];

const updatedArray = insertAtBeginning(demoArray, 357);
const stringArray = insertAtBeginning(['x', 'y', 'z'], 'w');

