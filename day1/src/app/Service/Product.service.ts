import { Product } from '../Model/Product';
export class ProductService {
    getDetails(): Product[] {
        let product: Product[];
        product = [
            new Product(101, 'Laptop', 56000),
            new Product(102, 'Iphone', 56000),
            new Product(103, 'shoes', 56000)
        ]
        return product;
    }
  public getProduct(Id:number)
    {
        let product :Product[]=this.getDetails();
        return product.find(p => p.productID==Id);
    }
}