// const show = (arr:number[]) => {    //arr:string[]
// arr.map()  методи стрінги
// arr.findIndex()  методи чисел
// }
class Triangle {
    // //Alt+enter -  implement all members
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    area() {
        return this.a * this.b * this.c;
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
}
class Rectangle {
    // //Alt+enter -  implement all members
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    area() {
        return this.a * this.b;
    }
    perimeter() {
        return this.a + this.b;
    }
}
const shapes = [new Triangle(2, 3, 4), new Rectangle(2, 8), new Triangle(1, 2, 1)];
for (const shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}
//# sourceMappingURL=app.js.map