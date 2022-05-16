// const show = (arr:number[]) => {    //arr:string[]
// arr.map()  методи стрінги
// arr.findIndex()  методи чисел
// }
var Triangle = /** @class */ (function () {
    // //Alt+enter -  implement all members
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.area = function () {
        return this.a * this.b * this.c;
    };
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    return Triangle;
}());
var Rectangle = /** @class */ (function () {
    // //Alt+enter -  implement all members
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return this.a + this.b;
    };
    return Rectangle;
}());
var shapes = [new Triangle(2, 3, 4), new Rectangle(2, 8), new Triangle(1, 2, 1)];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.area());
    console.log(shape.perimeter());
}
