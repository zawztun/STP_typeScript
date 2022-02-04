
//type annotations

import setLanguage from "pokemon.js/src/methods/language/setLanguage";

// must be type is true 
let apples: number = 5;
let speed: string = "fast";
let action: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//build in objects
let now: Date = new Date();

//Arrays
let colors: string[] = ['red', 'color', 'blue'];
let myNums: number[] = [1, 2, 3, 5];
let truths: boolean[] = [true, false, true];

//Classes

class Car {

}

let car: Car = new Car();

//Object literal 
let points: {x: number; y: number} = {
  x : 25,
  y : 20
} 

// Annotation around Functions
const logNumber:(i:number) => void = (i:number) => {
  console.log(i);
}

// 1: when to use annotation

const json = '{"x":10, "y":20 }';

const coordinates: { x: number; y:number} = JSON.parse(json);
console.log(coordinates);
//coordinates.afdaf// not error
//fix


//2: when we declear a variable on one line
// and initalize it later

let words = ['red', 'green', 'blue'];
let foundWord:boolean;// need annotation 

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}


//3: variable whose type cannot be inferred correctly
//not recommended this way to code 
let numbers = [-10, -1, 12];
let numbersAboveZero:boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i]
  }
  
}

//annotation || inference  for FUNCTION
// args : return value
const add = (a: number, b: number): number => {
  return a + b
};

const subtract = (a: number, b: number):number => {
  return a - b // return void//
}
   
function divided(a: number, b:number):number {
    return a / b
}

const multiply = function(a:number, b: number):number {
  return a * b 
}

const logger = (message: string):void => {
  console.log(message);
}

//never
const throwError = (message: string): void => {
  if(!message)
  throw new Error(message)
}
////
const todayWeather= {
  date: new Date(),
  weather: 'sunny'
}
//ES5//
const logWeather = ({date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

