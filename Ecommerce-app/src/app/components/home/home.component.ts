import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 productList: any[] = [];
item: any;
constructor(private api:ProductsService, private cart:CartService, private toast:NgToastService){}


ngOnInit(): void {
   this.api.getProduct().subscribe(res=>{
    this.productList=res
    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1, total:a.price})
    })
  })
  
}
// add to cart
addtoCart(item:any){
  this.toast.success({detail:'Added to cart',summary:'Item has been added',duration:1000})
this.cart.addtocart(item)
console.log(item)
}

}
