import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public products:any
  public grandTotal:number=0
 constructor(private cart:CartService, private toast:NgToastService
 ){}
  ngOnInit(): void {
   this.cart.getProduct().subscribe((res)=>{
this.products=res
this.grandTotal=this.cart.getTotalprice()
   })
  
 }
 emptyCart(){
  confirm("Are you sure to delete all items from cart?")
  this.toast.warning({detail:'Deleted all from cart',summary:'All items has been deleted',duration:3000})
  this.cart.removeallcart()
 }

 removeItem(item:any){
  confirm("Are you sure to delete this item from cart?")
  this.toast.warning({detail:'Deleted from cart',summary:'Item has been deleted',duration:1000})
  this.cart.removeCartitem(item)
 }
}
