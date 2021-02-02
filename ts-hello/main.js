// function log(message) {
//   console.log(message);
// }
//
// var message = "Hello World";
//
// log(message);
//
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
//
var point = new Point();
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
