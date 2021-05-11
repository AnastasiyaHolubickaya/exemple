/*
const calc = (num1,num2) => {
    console.log('hh');
    let sum:number = num1+num2;
   return  sum.toString();
};

document.addEventListener('DOMContentLoaded', function () {
    const num1 = <HTMLInputElement>document.querySelector("#number1");
    const num2 = <HTMLInputElement>document.querySelector("#number2");
    const btn = <HTMLButtonElement>document.querySelector("#button");
    const res = <HTMLDivElement>document.querySelector("#result");

    btn.addEventListener("click", function () {
        res.innerHTML =  calc(num1.valueAsNumber, num2.valueAsNumber);
    } )
});*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//npm install -g typescript
/*let a:number = undefined;
let a:boolean = null;
let a:string;
let s:string[] = ['vv','ff']
let s:Array<number> = [22,33]
let d:number[] = [10,12]
let id: number | string
let o:object
type num= string;
let id:num
*/
//кортеж tuple type
let corteg = [10, 'jjj'];
//при обращении к значению enum возвращается его индекс
var days;
(function (days) {
    days[days["Monday"] = 0] = "Monday";
    days[days["Tuesday"] = 1] = "Tuesday";
    days[days["sunday"] = 6] = "sunday";
})(days || (days = {}));
days.Monday; // 0
days[0]; //Monday
var links;
(function (links) {
    links["ytube"] = "http://ggg";
    links["vk"] = "http://ggg";
})(links || (links = {}));
links.vk; //'http://ggg'
const arr = [links.vk, links.ytube];
//never
//1 -  функция возвращает ошибку и не заканчивает свое выполнение
const mess = 'hi';
const err = (mess) => {
    throw new Error(mess);
};
//2 -  функция постоянно выполняется
const infinitLoop = () => {
    while (true) {
    }
};
//rest
const ss = (name, ...skills) => {
    return `${name}, my skills ${skills.join()}`;
};
ss('ann', 'js', 'ts', 'react');
let user = {
    name: "jmm",
    age: 22,
    nic: "kk"
};
let admin = {
    name: "jmm",
    age: 22,
    getD() {
        return '';
    }
};
//classes
class Class {
    constructor(name, age, nic, pass) {
        this.name = name;
        this.age = age;
        this.nic = nic;
        this.pass = pass;
    }
}
const sss = new Class('dfsf', 33, 'ddd', 333);
//миминизация кода
class Class2 {
    constructor(name, //свободный доступ
    age, //не достепен за пределами этого класса
    nic, //доступ только у наследников
    pass) {
        this.name = name;
        this.age = age;
        this.nic = nic;
        this.pass = pass;
    }
    setAge(age) {
        this.age = age;
    }
    getPass() {
        return `${name}${Class2.secret}`;
    }
}
Class2.secret = 123456; //унаследуют все экземпляры класса
//создаем наследникаб в классе наследнике типы не определяем
class Aff extends Class2 {
    constructor(age, nic, pass) {
        super(name, age, nic, pass);
        this.name = 'hhh';
    }
    getPass() {
        return `${this.name}${Class2.secret}${this.nic}`;
    }
}
const www = new Class2('fff', 30, 'rrr', 12);
www.getPass(); //fff123456
const hhh = new Aff(31, 'kkk', 333);
//абстрактные классы (используется только для создания наследников)
class User {
    constructor(age, nic) {
        this.age = age;
        this.nic = nic;
    }
    greet() {
        console.log(this.nic);
    }
}
class Aff2 extends User {
    constructor(age) {
        super(age, nic);
        this.nic = 'hhh';
    }
    getPass() {
        return `${this.age}${this.nic}`;
    }
}
Aff2.getPass();
Aff2.greet();
//namespace для инкапсуляции
var Utils;
(function (Utils) {
    Utils.SECRET = '123';
    const PI = 3.14;
    Utils.getPass = (name, age) => `${name}${age}`;
    Utils.isEmpty = (data) => !data;
})(Utils || (Utils = {}));
const myPass = Utils.getPass('ddd', 33);
const isSecret = Utils.isEmpty(Utils.SECRET);
const def = {
    name: "jjj",
    age: 11,
    ddd: 'kkk'
};
def.name = 'oo'; //error redonly
class qwert {
    getP() {
        return `${this.name}${this.age}`;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
//generic
const get = (data) => data;
get(10).length; //error
get("jj").length;
//generic class
class User5 {
    constructor(age, nic) {
        this.age = age;
        this.nic = nic;
    } //public age:T,public nic:K
    getPass() {
        return `${this.nic}${this.age}`;
    }
}
const www2 = new User5('fff', '30'); //new User5('fff',30)
www.getPass(); //fff123456
const hhh2 = new User5(31, 333);
www2.getPass();
//Decorator
//class decorator
const logClass = (constructor) => {
    console.log(constructor);
};
let User6 = class User6 {
    constructor(age, nic) {
        this.age = age;
        this.nic = nic;
    }
    getPass() {
        return `${this.nic}${this.age}`;
    }
};
User6 = __decorate([
    logClass
], User6);
//property decorator
const logProperty = (target, propertyKey) => {
    console.log(propertyKey);
};
class User7 {
    constructor(age, nic, secret) {
        this.age = age;
        this.nic = nic;
        this.secret = secret;
    }
    getPass() {
        return `${this.nic}${this.age}`;
    }
}
__decorate([
    logProperty
], User7.prototype, "secret", void 0);
//method decorator
const logMethod = (target, //target:Object - прототип класса к которому применяется декоратор
propertyKey, //propertyKey-имя метода
descriptor) => {
    console.log(propertyKey);
};
class User8 {
    constructor(age, nic) {
        this.age = age;
        this.nic = nic;
    }
    getPass() {
        return `${this.nic}${this.age}`;
    }
}
__decorate([
    logMethod
], User8.prototype, "getPass", null);
//acsessor decorator set get
const logSet = (target, //target:Object - прототип класса к которому применяется декоратор
propertyKey, //propertyKey-имя метода
descriptor) => {
    console.log(propertyKey);
};
class User9 {
    constructor(age, nic) {
        this.age = age;
        this.nic = nic;
    }
    set myAge(age) {
        this.age = age;
    }
}
__decorate([
    logSet
], User9.prototype, "myAge", null);
//factory decorator
const enumerable = (value) => {
    return (target, //target:Object - прототип класса к которому применяется декоратор
    propertyKey, //propertyKey-имя метода
    descriptor) => {
        descriptor.enumerable = value;
    };
};
class User10 {
    constructor(age, nic) {
        this.age = age;
        this.nic = nic;
    }
    getPass() {
        return `${this.nic}${this.age}`;
    }
}
__decorate([
    enumerable(false)
], User10.prototype, "getPass", null);
const us = {
    name: 'ttt' //изменить уже нельзя
};
const obj2 = {
    a: 5
};
const obj = {
    a: 5
};
const o = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};
const todo = {
    title: "ytuty",
    completed: false
};
const todo2 = {
    title: "ytuty",
    completed: false
};
// InstanceType<T>
class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
//# sourceMappingURL=calc.js.map