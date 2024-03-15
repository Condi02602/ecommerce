import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  cartDataList: any = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product)
  }

  addToCart(product:any){
    let productExists = false;
    this.cartDataList.forEach((element: { id: any; quantity: number; price: number; total: number;}) => {
      if(element.id === product.id) {
        element.quantity += 1;
        element.total = element.quantity * element.price; // Correct the calculation of total price
        productExists = true;
      }
    });
    if (!productExists) {
      product.quantity = 1;
      product.total = product.price; // Set total for the first time addition
      this.cartDataList.push(product);
    }
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
}


  getTotalAmount(): number {
    let grandTotal = 0;
    this.cartDataList.map((a: any) => {
      grandTotal = grandTotal + a.total;
    });
    return grandTotal;
  }
  

  removeCartData(product:any){
    this.cartDataList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartDataList.splice(index, 1)
      }
    })
    this.productList.next(this.cartDataList)
  }

  removeAllCart(){
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
  }
  

  updateCartItem(item: any) {
    this.cartDataList.forEach((element: any, index: number) => {
      if (element.id === item.id) {
        element.quantity = item.quantity; // Update the quantity
        element.total = item.quantity * element.price; // Recalculate the total
        this.cartDataList[index] = element;
        this.productList.next(this.cartDataList);
        return;
      }
    });
  }
  

  

}
