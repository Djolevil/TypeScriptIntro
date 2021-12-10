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

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Jimi',
    age: 27,
}

let people: {
    name: string;
    age: number;
}[];

// Type inference

let course = 'React - The Complete Guide'; 

