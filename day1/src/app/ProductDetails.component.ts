import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './Model/Product';
import { ProductService } from './Service/Product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './ProductDetails.component.html',
  providers: [ProductService]
})
export class ProductDetailsComponent {
  Id: any;
  sub: any;
  product?: Product;
  constructor(private activated: ActivatedRoute, private productService: ProductService)   //first this constructor will run then ngoninit() will run
  {

  }

  //snapshot procedure in this case route will change but data will remain same
  ngOnInit() {
    this.Id = this.activated.snapshot.params['id'];
    this.product = this.productService.getProduct(this.Id);
  }

  //subscribe procedure in this case both things will change
  /* ngOnInit()
  {
   this.sub=this.activated.paramMap.subscribe(param =>
    {
      this.Id=param.get('id');
      this.product=this.productService.getProduct(this.Id);
    });
    */
}

