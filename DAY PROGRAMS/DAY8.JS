let current =new Date("2025-01-01");
let day =current.getDay();
console.log(current)
console.log(current.toString());
console.log(day);

class Sample{
    constructor(person){
        this.person=person;
        console.log(person)
    }
}
let result=new Sample("yuvaraj");

class Bank{
    constructor(initialamout=0){
        this._balance=initialamout;

    }
    // getter methos is uses for geeting the value which we update the sette metho
    get balance(){
        return this._balance;
    }
     set _balance(amount){      // setter method is called update the value
        if(amount>0){
            this._balance += amount;
            console.log(amount);
        }

    }
}

let a = new Bank(100);
console.log(a);

a.balance=10000;
console.log(a);
