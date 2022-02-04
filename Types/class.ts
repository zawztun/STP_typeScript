// class Vehicle  {
//  protected horn():void {
//     console.log("tee tee ");
//   }
// }

// class Car extends Vehicle{
//   //override
//   private drive():void {
//     console.log("vroom vroom");
//   }
//   startDrive():void {
//     this.drive();
//     this.horn();
//   }
// }
// const cars = new Car();
// // const vehicle = new Vehicle();
// // vehicle.drive();
// // vehicle.horn();

// cars.startDrive();

//Modifiler / fieds in classes

// class Vehicle {
//   //public // private// protected 
//   constructor(public color: string) { }
//   honk():void {
//     console.log("beep");
//   }
// }



// const vehicle = new Vehicle('blue');
// console.log(vehicle.color);


class Vehicle {
  constructor(public color: string) { }

  protected honk():void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('blue');
console.log(vehicle.color);

class Car extends Vehicle{
  constructor(wheel:number, color:string) {
    super(color)
  }
  private drive():void {
    console.log('POONPOON');
  }
  startDrive():void {
    this.drive();
    this.honk()
  }
}
// pass on parent to child classes 
const cars = new Car(4,'red');
cars.startDrive();
console.log(cars);
