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
let corteg:[number, string] = [10,'jjj'];
//при обращении к значению enum возвращается его индекс
enum days {
    Monday,
    Tuesday,
    sunday = 6
}
days.Monday;// 0
days[0];//Monday

//в генерируемом коде (в js) на базе enum генерируется объект через функцию
//если генерация объекта затратна ставим перед enum const
const enum links2 {
    ytube = 'http://ggg',
    vk = 'http://ggg'
}
enum links {
    ytube = 'http://ggg',
    vk = 'http://ggg'
}
links.vk//'http://ggg'
const arr = [links.vk, links.ytube];

//never
//1 -  функция возвращает ошибку и не заканчивает свое выполнение
const mess = 'hi'
const err = (mess:string):never => {
    throw new Error(mess);
}
//2 -  функция постоянно выполняется
const infinitLoop = ():never =>{
    while (true){

    }
}
//rest
const ss = (name:string,...skills:Array<string>):string =>{
  return `${name}, my skills ${skills.join()}`
}
ss('ann','js','ts','react')

//типизация объекта
type Person = {
    name: string,
    age: number,
    nic?:string,
    getD?:() => string
}
let user:Person ={
    name:"jmm",
    age: 22,
    nic:"kk"
}
let admin:Person ={
    name:"jmm",
    age: 22,
    getD():string{
        return ''
}
}
//classes
class Class {
   public name: string;//свободный доступ
   private age: number;//не достепен за пределами этого класса
   protected nic:string;//доступ только у наследников
   readonly pass:number;
    constructor(name:string, age:number,nic:string, pass:number){
        this.name = name;
        this.age = age;
        this.nic = nic;
        this.pass = pass;
    }
}
const sss = new Class('dfsf',33,'ddd',333)

//миминизация кода
class Class2 {
    static secret = 123456;//унаследуют все экземпляры класса
    constructor(
    public name: string,//свободный доступ
    private age: number,//не достепен за пределами этого класса
    protected nic:string,//доступ только у наследников
    readonly pass:number,
){}
    setAge(age:number){
        this.age = age
    }
    getPass ():string {
        return `${name}${Class2.secret}`
    }
}

//создаем наследникаб в классе наследнике типы не определяем
class Aff extends Class2{
    name:string = 'hhh';
    constructor(age:number,nic:string, pass:number){
        super(name, age,nic,pass);
    }
    getPass ():string {
        return `${this.name}${Class2.secret}${this.nic}`
    }
}
const www = new Class2('fff',30,'rrr',12)
www.getPass();//fff123456
const hhh = new Aff(31,'kkk',333)

//абстрактные классы (используется только для создания наследников)
abstract  class User {
    constructor(public age:number,public nic:string){}
    greet ():void {
        console.log(this.nic)
    }
    abstract getPass():string//реализация данного метода обязательно должна быть описана в наследнике
}
class Aff2 extends User{
    nic:string = 'hhh';
    constructor(age:number){
        super(age,nic);
    }
    getPass ():string {
        return `${this.age}${this.nic}`
    }
}
Aff2.getPass()
Aff2.greet()

//namespace для инкапсуляции
namespace Utils {
  export  const SECRET:string='123';
    const PI:number = 3.14;
   export const getPass=(name:string, age:number):string =>`${name}${age}`;
   export const isEmpty = <T>(data: T):boolean =>!data;
}
const myPass = Utils.getPass('ddd', 33)
const isSecret = Utils.isEmpty(Utils.SECRET)

//interface реализовываем минимальный набор необходимых параметров

interface Usere {
  readonly  name:string,
    age?: number,
    [propName: string] : any;//остальные типы могут быть произвольными, можем расширять
    getP?():string
}
interface Us {
    getPass():string
}
interface Ass extends Usere{
    getPass():string
}
const def:Usere={
    name:"jjj",
    age:11,
    ddd:'kkk'
}
def.name='oo'//error redonly

class qwert implements Usere, Us{//Ass
    name:"jjj";
    age:11;
    ddd:'kkk';
    getP() {
        return `${this.name}${this.age}`
    }
    getPass() {
        return `${this.name}${this.age}`
    }
}
//generic
const get = <T>(data:T):T=>data
get<number>(10).length//error
get<string>("jj").length

//generic class
class User5<T> {//User5<T, K extends string>
    constructor(public age:T,public nic:T){}//public age:T,public nic:K
    public getPass (): string {
       return  `${this.nic}${this.age}`
    }

}
const www2 = new User5('fff','30')//new User5('fff',30)
www.getPass();//fff123456
const hhh2 = new User5(31,333)

www2.getPass();

//Decorator

//class decorator
const logClass=(constructor:Function)=>{
    console.log(constructor)
};
@logClass
class User6 {
    constructor(public age:number,public nic:string){}
    public getPass (): string {
        return  `${this.nic}${this.age}`
    }
}
//property decorator
const logProperty = (target:Object, propertyKey: string | symbol) =>{//target:Object - прототип класса к которому применяется декоратор, propertyKey-ключ свойства к к оторому применен декоратор
    console.log(propertyKey)
}
class User7 {
    @logProperty
    secret:number
    constructor(public age:number,public nic:string, secret:number){
        this.secret=secret
    }
    public getPass (): string {
        return  `${this.nic}${this.age}`
    }
}
//method decorator
const logMethod = (
    target:Object,//target:Object - прототип класса к которому применяется декоратор
    propertyKey: string | symbol,//propertyKey-имя метода
    descriptor: PropertyDescriptor
) =>{
    console.log(propertyKey)
}
class User8 {
    constructor(public age:number,public nic:string){}
    @logMethod
    public getPass (): string {
        return  `${this.nic}${this.age}`
    }
}
//acsessor decorator set get
const logSet = (
    target:Object,//target:Object - прототип класса к которому применяется декоратор
    propertyKey: string | symbol,//propertyKey-имя метода
    descriptor: PropertyDescriptor
) =>{
    console.log(propertyKey)
}
class User9 {
    constructor(public age:number,public nic:string){}
    @logSet
    set myAge (age:number){
       this.age = age
    }
}
//factory decorator
const enumerable = (value:boolean)=>{
    return(
        target:any,//target:Object - прототип класса к которому применяется декоратор
        propertyKey: string | symbol,//propertyKey-имя метода
        descriptor: PropertyDescriptor
    )=>{
        descriptor.enumerable=value
    }
}
class User10 {
    constructor(public age:number,public nic:string){}
   @enumerable(false)
    getPass (): string {
        return  `${this.nic}${this.age}`
    }
}
//применение нескольких декараторов
//@fff @ddd g
//@ddd
//@fff
//g

//utils type

//readonly<T>
interface User {
    name:string
}
const us:Readonly<User>={
    name:'ttt'//изменить уже нельзя
}
//required<T>
interface Props {
    a?:number;
    b?:string
}
const obj2:Props={
    a:5
}
const obj:Required<Props>={//error missing b
    a:5
}
//record<K, T>
interface PageInfo {
    title:string
}
type Page='home'|'about'|'contact'
const o:Record<Page, PageInfo>={
    about: {title:'about'},
    contact: {title:'contact'},
    home: {title:'home'},
}
//pick<K, T>
interface Todo {
    title:string
    description:string;
    completed:boolean
}
type TodoPrev=Pick<Todo, 'title'|'completed'>
const todo:TodoPrev={
    title:"ytuty",
    completed:false
}
//omit<K, T>
interface Todo {
    title:string
    description:string;
    completed:boolean
}
type TodoPrev2=Omit<Todo, 'description'>
const todo2:TodoPrev={
    title:"ytuty",
    completed:false
}
//exclude <K, T>
type T0=Exclude<'a'|'b'|'x','x'>//'a'|'b'
type T1=Exclude<string|number|(()=>void),Function>//string|number

//extract <K, T>
type T01=Extract<'a'|'b'|'x','x'|'f'>//'x'
type T11=Exclude<string|number|(()=>void),Function>//(()=>void)

//nonnullable <T>
type T10=NonNullable<string|number|undefined>//string|number
type T111=NonNullable<string[]|null|undefined>//string[]

//return type - задает такой тип, какой возвращает функция
// ReturnType<T>
declare function f1(): { a: number, b: string };

type T0 = ReturnType<() => string>;                                  // string
type T1 = ReturnType<(s: string) => void>;                           // void
type T2 = ReturnType<(<T>() => T)>;                                  // {}
type T3 = ReturnType<(<T extends X, X extends number[]>() => T)>;    // number[]
type T4 = ReturnType<typeof f1>;                                     // { a: number, b: string }
type T5 = ReturnType<any>;                                           // any
type T6 = ReturnType<never>;                                         // any
type T7 = ReturnType<string>;                                        // Error
type T8 = ReturnType<Function>;                                      // Error

// InstanceType<T>
class C {
    x = 0;
    y = 0;
}

type T0 = InstanceType<typeof C>;     // C
type T1 = InstanceType<any>;          // any
type T2 = InstanceType<never>;        // any
type T3 = InstanceType<string>;       // Error
type T4 = InstanceType<Function>;     // Error