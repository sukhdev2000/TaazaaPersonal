import { Component } from '@angular/core';
import { Product } from './Model/Product';
import { ProductService } from './Service/Product.service';

@Component({
  selector: 'app-product',
  templateUrl: './Product.component.html',
  providers:[ProductService]    //IOC container or registering class for memory allocation
})
export class ProductComponent {
    temp:Product[]=[];
    constructor(private productService:ProductService)
    {

    }
    productsDetails():void
    {
        this.temp=this.productService.getDetails();
    }
}