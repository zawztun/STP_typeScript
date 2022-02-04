//Array Type annotation & Type inference 
//const carMakers:string[] = []
const carMakers = ['toyota', 'ford', 'honda'];
const dates = [new Date(), new Date()];
//const carByMake:string[][] = []
const carByMake = [
  ['f150'],['corolla'],['civic']
]

//Helo with inference when extractin values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push('toyota');

carMakers.map((car:string):string => {
    return car.toUpperCase()
})

//Flexible types of Array

const importantDate:(string | Date)[] = [new Date()];
importantDate.push('02/02/2022');
importantDate.push(new Date());


//tuples in Action