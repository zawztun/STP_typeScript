

interface Vehicles{
  name: string;//
  year: number;//
  broken: boolean;// 
  summary(): string;
}

const honda = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary():string {
    return `Name: ${this.name}`;
  }
}

const printVehicle = (vehicles:Vehicles):void => {
  console.log(`Name: ${vehicles.name}`);
  console.log(`Year: ${vehicles.year}`);
  console.log(`Broken: ${vehicles.broken}`);
}

printVehicle(honda)


////*****  */
interface Reportable{
 summary(): string;// Interface reuseble
}

const item = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary():string {
    return `Name: ${this.name}`;
  }
}
const drink = {
  color: 'white',
  carbonate: true,
  sugar: 50,
  summary():string {
    return `My drink has ${this.sugar}`
  }
}

const printSummary = (products:Reportable):void => {
 console.log(products.summary());
}

printSummary(item);
printSummary(drink)