// interface ICore{
//     flight: number,
//     core: {
//         reuse_count: number,
//         status: string
//     }
// }
//
// interface IPayloads{
//     payload_type: string,
//     payload_mass_kg: number,
//     payload_mass_lbs: number
// }
//
// interface ISpaceX{
//     mission_name: string
//     launch_date_local: string
//     launch_site: {
//         site_name_long: string
//     },
//     links: {
//         article_link: string
//         video_link: string
//     },
//     rocket: {
//         rocket_name: string,
//         first_stage: {
//             cores: ICore[]
//         },
//         second_stage: {
//             payloads: IPayloads[]
//         }
//     }
// }
//
// //2) протипізувати функції:
// interface IUser{
//     name:string,
//     age:number,
//     gender:string
// };
// const user:IUser = {
//     name:"Max",
//     age:18,
//     gender:'male'
// };
//
// const sum = (a:number, b:number):number => a + b;
//
// const showSum = (a:number,b:number):void=> console.log(a + b);
//
// const incAge = (someUser:IUser, inc:number):IUser => {
//     someUser.age+=inc
//     return someUser
// };
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)
///////////////////////////////////////////////////////////////////
// type Name = 'Max'|'Oleg'|'Kira'|'Karina'|'Olha'
//
// interface IUser {
//     id?:number
//     name:Name
// }
//
// interface IUser2 extends IUser{
//     age:number
// }
// const user: Required<IUser2> = {name:'Max',id:3, age:4} //Required-всі поля обов'язкові(навіть із '?' )

// const user:IUser = {name:'Max'}
// const user: Required<IUser> = {name:'Max',id:3} //Required-всі поля обов'язкові(навіть із '?' )
// const user: Required<IUser> = {name:'Max',id:null} //Required-всі поля обов'язкові(навіть із '?' )

const str = 'rrrrrrrr'
console.log(typeof str);

class User{
    constructor(public name:string, public age:number) {
    }
    getName():string{
        return this.name
    }
}
interface functional {
    getAge:()=>number
}

class User2 extends User implements functional{
    constructor(name: string, age: number) {
        super(name, age);
    }

    getAge(): number {
        return this.age;
    }

}