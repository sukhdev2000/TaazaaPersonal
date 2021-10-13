export class Product
{
    productID:Number;
    Name:string;
    Price:Number;

    constructor(pid:Number,name:string,price:Number)
    {
        this.Name=name;
        this.Price=price;
        this.productID=pid;
    }
}