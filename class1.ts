class Laptop{
    brand: string;
    price: number;
    cpu : string;

    constructor(b: string, p: number, c: string){
        this.brand = b;
        this.price = p;
        this.cpu = c ;
    }

    show():void{
        console.log(`Laptop Brand: ${this.brand}, Price :${this.price}, cpu : ${this.cpu}`);
    }
}
const Laptop1 = new Laptop("Apple",250000,"Intel");
Laptop1.show();
const Laptop2 = new Laptop("HP",50000,"AMD");
Laptop2.show();
