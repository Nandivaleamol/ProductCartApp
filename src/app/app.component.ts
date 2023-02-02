import { Component } from '@angular/core';
import {ProductsDataService} from './services/products-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProductCartApp';

  products:any;
  newProduct = {};

  // constructor(private productService: ProductsDataService) {}

  constructor(private productsData: ProductsDataService){

    productsData.products().subscribe((data:any)=> {

      console.warn("data: ",data);
      
      this.products=data;
    })
  }

  getProductsFormData(data:any){
    // this.productsData.addProduct(data).subscribe((result)=>{
    //   console.warn(result);
    // })
    console.warn(data)
  }

  // addProduct() {
  //   this.productsData.addProduct(this.newProduct).subscribe(product => {
  //     console.log(product);
  //     this.newProduct = {};
  //   });
  // }

  // newProduct = {};
  // products: any;
  
  
  // ngOnInit() {
  //   this.getProducts();
  // }
  
  // getProducts() {
  //   this.productsData.getProducts().subscribe(data => {
  //     this.products = data;
  //   });
  // }
  
  // addProduct() {
  //   this.productsData.addProduct(this.newProduct).subscribe(data => {
  //     this.getProducts();
  //     this.newProduct = {};
  //   });
  // }
  
  // removeProduct(productId) {
  //   this.productsData.removeProduct(productId).subscribe(data => {
  //     this.getProducts();
  //   });
  // }
  



}
