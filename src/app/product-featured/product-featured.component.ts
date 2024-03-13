import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-featured',
  templateUrl: './product-featured.component.html',
  styleUrls: ['./product-featured.component.css']
})
export class ProductFeaturedComponent implements OnInit {
  
  constructor(private Router:Router){}

  ProductData:any[] = []
  allProducts:[] | any  = []
  
  ngOnInit(){
    this.getAllProducts();
  }
  

  // get all products to display on fetured products - 
  // looping and pushing done here - 
  getAllProducts() {
    // this.product.getProducts().subscribe((res:any)=>{
    //   for(let i=0;i<res.length;i++){
    //     if(res[i].IsActive !== "False" && res[i].IsFeatured !== "False"){
    //       this.allProducts.push(res[i])
    //     }
    //   }
    
    //   if(this.allProducts){
    //       this.ProductData = this.allProducts
    //   } 

    // })
  }
  
  

  // when click on view product redirect to single product page  - 
  redirectToDetailed(id:number){
    // if(id){
    //     this.Router.navigate([`/ProductDetailed/${id}`])
    // }else{
    //   this.Router.navigate(["/"])
    // }
  }



}
