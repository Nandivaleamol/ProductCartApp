import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  baseUrl="http://localhost:8080/api/products/";

  newProduct = {};


  constructor(private http:HttpClient) { }

  products(){
    return this.http.get(this.baseUrl);
  }

  // addProduct(data:any) {
  //   return this.http.post('http://localhost:8080/api/products/',data);
  // }

  // removeProduct(product:any) {
  //   this.http.delete(`http://localhost:8080/api/products/${product.id}`).subscribe(() => {
  //     this.products = this.products.filter(p => p.id !== product.id);
  //   });
  // }

  // addProduct(newProduct: any): Observable<any> {
  //   return this.http.post<any>('http://localhost:8080/api/products/', newProduct);
  // }

  
}
