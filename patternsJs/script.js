//паттерны делятся на 3 группы
//порождающий
//singleton..........................
//объект в едином экземпляре доступ к которому можно получить с любого места программы
//корзина, карта клиента, инстанс плеера т.п.

class Counter {
    constructor(){
        if(typeof  Counter.instance==='object'){
            return  Counter.instance
        }
        this.count=0;
        Counter.instance=this;
        return this
    }
    getCount(){return this.count;}
    increaseCount(){return this.count++;}
}
const myCount1=new Counter();
const myCount2=new Counter();
myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();
console.log(myCount2.getCount());
console.log(myCount1.getCount());

//factory method.........................
//используем когда нужно создавать много однотипных объектов с одинаковой структурой
// но разными данными
class Auto {
    constructor(model, price, maxSpeed){
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}