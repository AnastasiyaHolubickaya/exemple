/*document.addEventListener('DOMContentLoaded',function(){
    let button = document.querySelectorAll("button");
    for(let i=0; i<button.length;i++){
        button[i].innerHTML=i;
        button[i].onclick=function () {
            console.log(i);
        }
    }
});*/
//rest........................................
const num1=[1,3,5];
const num2 = [2,4,6];
num1.push(...num2);
//Array.prototype.push.apply(num1, num2);
//console.log(num1);
const A={
    a:"qwert",
    b:"tyuiop"
};
const B={
    a:"gg"
};
//let c=Object.assign(A,B);//{ a: 'gg', b: 'tyuiop' }
let c={
    ...A,
    ...B
};
//console.log(c);//{ a: 'gg', b: 'tyuiop' }
const arr = [1,2,3];
function  sum(a,b,c) {
    return a+b+c
}
//sum(arr[0],arr[1], arr[2]);
//sum.apply(null,arr);//es5
//console.log(sum(...arr));

//spred.................................................
function res(arg,...REST) {
   // console.log(arg, REST);
}
res(1,2,3,4,5);

//шаблонная строка...................................
//tegging
const name = 'ann';
function toUppercase(litArr, valie) {
    return litArr[0]+valie.toUpperCase()+litArr[1];
}
//console.log(toUppercase`hi ${name}!`);

//дефолтные значения......................................
const f = (name='a', age=12)=> `${name}/${age}`;
//console.log( f('h'));
(a,b)=>{
    return a+b;
};
(a)=>{
    return a+1;
};
()=>{
    return a+b;
};
a=>a*a;
(a,b)=>a*b;
()=>({s:2});//если хотим вернуть литерал объекта
(()=>{null})();//анонимная самовызывающаяся функция

let person ={
    name:'fff',
    greet:function(){
       setTimeout(()=>{
            //console.log(this.name, this);
        },1000)
    }
};
person.greet();

//for of получение елементов.............................................
let massNames = ['sss','ssd','fff'];

for(let index in massNames){// index - ключи (0,1,2), не значения
   // console.log(index)
}
for(let name in massNames){// massNames[name] - значения
   // console.log(massNames[name])
}
for(let index of massNames){// index -  значения
   // console.log(index)
}
//object................................................................
let n = 'fff';
let a = 18;
let user = {
   n,// n:n,
   a,// a:a
    greet(){
      // console.log(this);
    },
    //get: sex(){return n+ a}
};
//
user.greet();
/*let sex = 'male';
user[sex];
user={
    [sex]:'male'
};
Object.defineProperty(user,'sex',{//es5
    get: function () {
        return this.n+this.a
    }
})*/
//console.log(user.sex);

//class.................................................
//класс это шаблон, по которому создаются объекты
class Task {
    constructor(title=Task.getDefaultTitle(), isComplet = false){
        this.title = title
        this._isComplet = isComplet;
        Task.counter+=1
    }
    static getDefaultTitle(){//статический метод
        return "title";
    }
    completed(){
        this.isComplet = true
    }
    get isComplet(){
        return this._isComplet===true?"completed":'is not completed'
    }
}
Task.counter = 0//добавление в класс статического свойства, всегда добавляем ДО создания екземпляра класса
let task = new Task('ttt',false);
//task.completed();
//let task2 = new Task('learn js', true);

//console.log(Task.counter);
//console.log(task.isComplet, task._isComplet);

// наследование>>>............................................
class Qwert {
    constructor(title='',isComplet=false){
        this.title = title
        this.isComplet = isComplet;
    }
    completed(){
        this.isComplet = true
    }
}
class SubQwert extends Qwert{
    constructor(title){
        super(title)
    }
    completed(){
        super.completed();
        //console.log(`${this.title} is comp`)
    }
}
let qwert = new Qwert('rrr');
let subQwert = new SubQwert('tttt',true);
qwert.completed();
subQwert.completed();
//console.log(qwert, subQwert);

//class declaration
class Rew{};
//class expretion
let Dew= class Dew {
}

//деструктуризация........................................
// извлечение данных из массивов и объектов
//const people = ['ann','alex','john'];
let[ann, alex, john]=['ann','alex','john'];
//let[ann, alex, john] = people;
//console.log(ann, alex, john);

const rate = [1,50,100,[1000,2000]]
let[slow, middle, hight, [higher,sup]] = rate;
//console.log(slow, middle, hight,higher, sup);

function f1([a,g]) {
return[a,g];
    //

}
let [y,d] = f1([1,100])
//console.log(y,d)

//деструктуризация..object......................................
let per ={
    name:"jj",
    age:19,
    address:{
        city:"hhh"
    }
}
//let{name,age} = per;
//let {name='nnn',age=20} ={}
//let {name:firstName, age:perAge} = per;
let {address:{city}} = per;
//console.log(city)
function f2({name,age}) {
  // console.log(name,age)
    return {name,age}
}
/*let s = f2(per);
let {name,age} = f2(per)
console.log(name,age)*/
//symbol................................................
//уникальные и неизменные значения для свойств объектов
/*let symbol = Symbol('ffff');
console.log(symbol)
let symbol2 = Symbol('ffff');
console.log(symbol===symbol2)*/
let symbol = Symbol.for('ffff');
let symbol2 = Symbol.for('ffff');
let symbolname = Symbol.keyFor(symbol);
//console.log(symbolname)
let per2 ={
    name:"jj",
    age:19,
   [Symbol.for('pass')]:'get4774'
}
//console.log(per2[Symbol.for('pass')])
//console.log(Object.getOwnPropertySymbols(per2))// просмотр всех символов в объекте

//promis..................................................
/*
const promis = new Promise((resolve,reject)=>{
    throw new Error('some err');
    setTimeout(()=>{
        if(true){
            resolve("ok")
        }else {
             reject();
        }
    },1000)

});
promis.then(data=>console.log(data)).catch(()=>console.log("error"));*/
//fetch('https://jsonplaceholder.typicode.com/posts/').then(res => res.json()).then(data=>console.log(data)).catch(()=>console.log("error"));

//asinc await.............................................
const dataF =()=>Promise.resolve({
    data:['ddd','fff']
});
const getData = async ()=>{
    let response = await dataF();
       // console.log(response);
        return 'done'

};

//getData();
//console.log(getData())

const datafF =()=>Promise.reject('error');
const getDataf = async ()=>{
    try {
        let response = await datafF();
       // console.log(response);
    }catch (e) {
       // console.log(e);
    }
};
getDataf();

const load = async ()=>{
    const a=await Promise.resolve(5);
    const b=await Promise.resolve(10);
    //console.log(a+b);
};
load();
//iterators............................................
let obj ={
    start:1,
    end:10
};
obj[Symbol.iterator]=function () {
    let current = this.start;
    let last = this.end;

    return{
        next(){
           if(current <=last){
               return{
                   done:false,
                   value: current++
               }
           }else {
               return{
                   done: true
               }
           }
        }
    }
};
for(let n of obj){
    //console.log(n)
}

//generators................................................
//функция, которая выполняясь может остановиться и вернуть промежуточный вариант
function *generator() {
   // console.log('n');
let r= (yield) * 2;
    //console.log('n', r);
}
let iterator = generator();
//console.log(iterator.next());
//console.log(iterator.next(2));
//iterator.next();
//console.log(iterator);

function *generate(start, end) {
    let current = start;
    while (current<=end){
        yield  current++;
    }
}
for(let n of generate(1,20)){
  //  console.log(n)
}

//set map.....................................................
//map  коллекция щаписей для хранения , вида ключ:значение
let map = new Map();
map.set('str','string');
map.set(1,'number');
map.set(true,'boolean');
map.get(1)//number
map.size//3
map.has(1)//true
map.delete(1)//удаляет запись по номеру передаваемого ключа
map.clear()//полностью очищает коллекцию

let map2 = new Map([
    ['str','string'],
    [1,'number'],
    [true,'boolean']
]);
//итерируемые методы keys()-для ключей, values()-для значений , entrise()-для ключ-значение
//set коллекция для хранения множества уникальных значений
let set = new Set();
let aa={name:'aa'};
let ff={name:'ff'};
let dd={name:'dd'};
set.add(aa)
    .add(ff)
    .add(dd);
set.size;//3
set.forEach(set=>console.log(set));
set.delete(1);
set.has(aa);//true
set.clear();

//for, for of
//ПРИМЕРЫ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let mass=[1,4,3,0,4,5,4].filter(i=>!(i%2)).reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
//console.log(mass);

//пример замыкания.............................................
let logger2 = data => console.log(data);
let counter = () =>{
    let c=0;
    return function () {
            c+=1;
           return c;
    }
};
let cc=counter();
console.log(cc());
//console.log(cc());
//console.log(cc());


let logger = data => console.log(data);
let obj2 ={
    start:1,
    end:10,
    modulus: 2,
    isRemain: false,
};

let num =(logger) =>{
    return function (start, end, modulus,isRemain ) {
        while (start <= end){
            if(start % modulus == isRemain){
                logger(start)
            }
            start++
        }
    }
};
let qwerty = num(logger);
qwerty(obj2.start, obj2.end, obj2.modulus, obj2.isRemain);
//................................................................
class Animal {
    constructor(age, isChild, name){
        this.name = name;
        this.age = age;
        this.isChild = isChild
    }
    getAge(){
        return this.age;
    }
}

let cat = new Animal(1,true,'cat');
let dog = new Animal(3,false,'dog');
let cow = new Animal(7,true,'cow');
let farm = {
    cat,
    dog,
    cow,
    ages(){
      return   (cat.getAge()+dog.getAge()+cow.getAge())/3
    }
};
console.log(farm.ages());

cycle: for (let i = 0; i <10; i++) { //! Эту строку можно изменить
    for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) {
           break cycle; //! Эту строку можно изменить
        }

       // console.log(i, j);
    }
}
let ab=1.15;
let ba=2.30;
console.log(ab+ba);
//////////////////////////////////////////
let nu = (num=0,step=1) =>{
    return function () {
        num+=step;
        return num;
    }
};
let z=nu(0,2);
//console.log(z());
//console.log(z());
//2
let take = (callbac,num)=>{
    let mass=[];
    for(let i=1; i<=num; i++){
        mass.push(callbac());
    }
    return mass
};
console.log(take(z, 5));
//3
let mapa = (fn, arr) =>{
     let m = arr.map(e=>
        fn(e)
    )
    return m
};
function square(x) { return x * x; }
console.log(mapa(square, [1, 2, 3, 4]));
//4
function add () {
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i]
        //console.log(sum);
    }
    return sum;
};
/*var sum = function() {
    return [].reduce.call(arguments, function(result, current) {
        return result + current;
    }, this.sum);
};*/


let fmap = (a, gen) => {
     return function () {
         let w=gen(...arguments);
       return   a(w);
    }
};
let zz=nu(1,1);
let v=fmap(square,add);
//console.log(v(2,3));
//console.log(v());
//5
let partial = (gen,num) =>{
    return function () {
        return gen(...arguments)+num
    }

};
let add5= partial(add,5);
console.log(add5(2));
console.log(add5(10));

let mult = (a,b,c,d) =>{
    return a * b * c * d;
}
let partial2 = (gen,a,b) =>{
    let c=a;
    let d=b;
    return function (w,q) {
        return gen(c,d,w,q);
    }

};
let p = partial2(mult,2,3);
console.log(p(4,5));
//6
function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
let partialany = (gen,...arguments) =>{
    let m=[];
    for(let i=0; i<arguments.length; i++){
        if(arguments[i]!==undefined) {
            m.push(arguments[i])
        }
    }
    return function (q) {
        return gen(q,...m);
    }

};
let para=partialany(test,undefined,1,3);
console.log(para(5));
//7
let x = 1;
let ctx = { x: 2 };

function testThis(a) {
    //x=this.x;
    console.log("x=" + this.x + ", a=" + a);
}
testThis(100); // x=1, a=100

let bind=(f,ctx)=>{
    this.f=f;
    ctx.f= this.f;
    console.log(ctx)
  return   function(s){
      ctx.f(s);
    }

};
let d2=bind(testThis,ctx);
d2(100);
/*
var bind = function(fn, context) {
    // обрезаем ненужные аргументы (функцию и контекст)
    var bindArgs = [].slice.call(arguments, 2);
    return function() {
        // здесь все аргументы будут необходимы
        var fnArgs = [].slice.call(arguments);
        // собираем все
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};
var bindedSum = bind(sum, {sum: 10}, 20, 30);
bindedSum(40, 50, 60); // 210
*/
