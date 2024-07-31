import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {
  menuType:string='default'
default: any;
admin: any;
  
  totalitem=0
constructor(private cart:CartService,private router:Router,private servive:AdminService){}

ngOnInit(): void {
  // subscribe is used to get values
  // this.router.events.subscribe((val:any)=>{
  //   console.log(val.url)
  //   if(val.url){
  //     if(localStorage.getItem('Admin') && val.url.includes('Admin')){
  //       console.log("In admin area")
  //       this.menuType="Admin"
  //     } else{
  //       // console.log("Outside admin")
  //       this.menuType="defalut"
  //     }
  //   }
  // })
  this.cart.getProduct().subscribe((res: string | any[])=>{
    this.totalitem=res.length
  })
}

onLogout(){
  confirm("Are you sure you want to logout")
  this.servive.logout()
  this.router.navigate([""])
}
}
