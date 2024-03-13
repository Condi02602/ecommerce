import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartapiService } from '../services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  disabledBuy:boolean = false
  constructor(private route: Router, private cartApi: CartapiService) {}
  // menuType for changing Navbar content
  menuType: string = 'default';
  // cart 
  cartItem: number = 0;


  ngOnInit() {
    
    // this.route.events.subscribe((val: any) => {
    //   if (val.url) {
    //     if (localStorage.getItem('AdminLogin') === 'Admin' && val.url.includes("Admin")) {
    //       this.menuType = 'Admin';
    //     } else if (localStorage.getItem('WhoLogin') === 'Customer') {
    //       this.menuType = 'Customer'; 
    //     } else {
    //       this.menuType = 'default';
    //     }
    //   }
    // });

    this.cartApi.getProductData().subscribe(res => {
      this.cartItem = res.length
    })
  }
  // For closing when click on content
  closeToggle() {
    const checkbox = document.getElementById('click') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  

}


