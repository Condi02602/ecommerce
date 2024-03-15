import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from '../services/api.service';
import { CartapiService } from '../services/cartapi.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any = [];
  allProducts: number = 0;

  constructor(private service: ApiService, private cartApi: CartapiService) { }

  ngOnInit(): void {

    this.cartApi.getProductData().subscribe(res => {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
  }

  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }

  removeAllProduct(){
    this.cartApi.removeAllCart();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) { // Ensure quantity doesn't go below 1
      item.quantity--;
      this.cartApi.updateCartItem(item);
    }
  }
  
  increaseQuantity(item: any) {
    item.quantity++;
    this.cartApi.updateCartItem(item);
  }

}
