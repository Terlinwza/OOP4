class BankAccount{
    ownername: string ;
    balance : number ;
    deposit : number;
    withdraw : number ;

    constructor(o: string, b: number,d: deposit ,w: withdraw ){
        this.ownername = o;
        this.balance = b;
        this.deposit = d;
        this.withdraw =  w ;
        }
        show():void{
        console.log(`BankAccount  ownername: ${this.ownername}, balance :${this.balance},deposit: ${this.deposit},withdraw: ${this.withdraw}`)}

        chgdeposit(newdeposit: number):void{
        this.deposit=newdeposit; 
        console.log("deposit change to : ",this.deposit);}

        chgwithdrw(newwithdraw: number):void{
        this.withdraw=newwithdraw; 
        console.log("withdraw change to : ",this.withdraw);


        if (1000 < newwithdraw ) {
            console.log("You don't have enough money");
         } else {
                console.log("succeed");
            }
            
        
    }

    }

let bank1 = new BankAccount("Terl",10,200,0);
bank1.show();
bank1.chgdeposit(1000);
bank1.chgwithdrw(800);


