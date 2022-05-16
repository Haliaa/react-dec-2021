// const show = (arr:number[]) => {    //arr:string[]
// arr.map()  методи стрінги
// arr.findIndex()  методи чисел
// }

// const show = (a: number, b: number): number => { //: number -повертає ЧИСЛО
//                                                 //: string -повертає СТРІЧКУ
//                                                 //: void -повертає НІЧОГО
//                                                 //: number|string -повертає ЧИСЛО або СТРІЧКУ
//     // return 7    //OR
//     return a+b
// }

// const user = {name:'Max', age:15}
//
// const showUser  = (user:{name:string, age:number}) => {
//   user.name // видно поля
//   user.age
// }

// const user:{name:string, age:number} = {age:15, name:'Max'}
//// const user:{name:string, age:number} = {age:15, name:'Max', gender:'female'} //gender:'female'-FORBIDDEN
// console.log(user);

// interface IUser {
//     id?:number, //?-може бути і НЕбути
//     name:string,
//     age:number,
//     address: IAddress
// }
// interface IAddress {
//     street:string,
//     house:number
// }
//
// const user:IUser = {age:15, name:'Max', address:{street:'Street',house:25}}

// interface IUser {
//     id?:number, //?-може бути і НЕбути
//     name:string,
//     age:number,
//     address: IAddress
// }
// interface IAddress {
//     street:string,
//     house:number
// }

// const user:Partial <IUser> = {age:15, name:'Max', address:{street:'Street',house:25}} //use only part of interface IUser
// const user:Partial <IUser> = {}            //empty object is part of IUser
// const user:Partial <IUser> = {name:'Max'}  //field name is a part of IUser
// const user:Partial <IUser> = {name:'Max', ddd:'ddd'}  // FORBIDDEN: field ddd isn't a part of IUser

// type uniqId = number
//
// interface IUser<Type> {
//     id: uniqId, //посилання на тип
//     name: string,
//     age: number,
//     // address: IAddress,
//     // arr: IAddress[],
//     arr: Type[],
// }
//
// interface IAddress {
//     street: string,
//     house: number
// }
//
// // const user: IUser<number> = {name:'Max', age:12, arr:[1,2,3]}          //empty object is part of IUser
// const user: IUser<string> = {id:4, name:'Max', age:12, arr:['1','2','3']}          //empty object is part of IUser
// console.log(user);

// type StateType = [string, (a:number, b:number)=>number]
// const useState:StateType = ['text', (a, b) => {
//     return a+b
// }]
// let [first, second] = useState;
// console.log(first)
// console.log(second(3,4))

// type uniqId = number
//
// interface IUser<Type, G> {
//     id: uniqId,
//     name: string,
//     age: number,
//     arr: Type[],
//     arr2: G[]
// }
//
// interface IAddress {
//     street: string,
//     house: number
// }
//
// const user: IUser<string,number> = {id:4, name:'Max', age:12, arr:['1','2','3'], arr2:[2]}          //empty object is part of IUser
// console.log(user);
//
//
// interface IMyArray {
//     arr:[number, string, IUser<number, string>]
// }
// const my:IMyArray ={arr:[4, 'sss', {name:'Name', age:44, id:2, arr:[6,7], arr2:['s','k']}]}

// class User{
//     // public  id?:number;
//     // private name:string;
//     //         age:number; //якщо не вказано, то PUBLIC
//
//     constructor( private readonly id: number, protected name: string, private age: number) {
//         // readonly//лише для читання (заборонено змінювати)
//         //protected - можна використовувати лише вцьому класі або класі нащадка
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     getId():number{
//         return this.id
//     }
//     setId(newId:number):void{
//         this.id = newId
//     }
//
// }
//
// const user:User = {name:'Max', age:20}
//
// let user1 = new User(3, 'Kira', 15)
// // user1. //(user1.name) - нема доступу бо private
// // user1.age //(user1.age) - Є доступу бо public

interface IShapeActions{
    area:()=>number;
    perimeter:()=>number;
}

class Triangle implements IShapeActions {
                        // //Alt+enter -  implement all members
    constructor(private a:number,private b:number, private c:number) {
    }
    area(): number {
        return this.a * this.b * this.c;
    }

    perimeter(): number {
        return this.a + this.b + this.c
    }
}

class Rectangle implements IShapeActions {
                        // //Alt+enter -  implement all members
    constructor(private a:number,private b:number) {
    }
    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return this.a + this.b;
    }
}

const shapes: IShapeActions []=[new Triangle(2,3,4), new Rectangle(2,8), new Triangle(1,2,1)]

for (const shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}

