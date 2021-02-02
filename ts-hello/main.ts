// function log(message) {
//   console.log(message);
// }
//
// var message = "Hello World";
//
// log(message);

// //// Declaring Variables
// var numeber = 1
// let count = 2

// //// Basic function
// function doSomething() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// 
//   console.log('Finally: ' + i);
// }
// 
// doSomething()

// //// Declacring lets and types
// var count = 5;
// count = 'a';
// 
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', false]

// //// Declaring an enem in TS
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// 
// enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 }
// let backgroundColor = Color.Red;
//
// let message;
// message = 'abc';
// // The 2 lines below are completely the same.
// let endsWithC = (<string>message).endsWith('c');
// let alternateWay = (message as string).endsWith('c');

// //// Array functions
// // JS
// let log = function(message) {
//   console.log(message)
// }
// //
// // TS
// let doLog = (message) => {
//   console.log(message)
// }
//
// // Types in Functions
interface PointInterface {
  x: number,
  y: number,
  draw: () => void
}
//
class Point {
  x: number;
  y: number;
  
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y)
  }

  getDistance(another: Point) {
    // ...
  }
}
//
let point = new Point();
point.draw();
//
// let drawPoint = (point: Point) => {
//   // ...
// }
//
// let getDistance = (pointA: Point, pointB: Point) => {
//   // ...
// }
//
// drawPoint({
//   x: 1,
//   y: 2
// })