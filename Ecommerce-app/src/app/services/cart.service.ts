import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public productList=new BehaviorSubject<any>([])
  public cartitemList: any[] = [];
  public total: any[] = [];
  public product: any;
  constructor() { }

  //get
  getProduct(){
    return this.productList.asObservable() ; Observable<any>
  }
  // add to cart
  addtocart(product:any){
this.cartitemList.push(product)
this.productList.next(this.cartitemList)
this.getTotalprice()
  }

  //total price
  getTotalprice():number{
    let grandtotal=0
    this.cartitemList.map((a:any)=>{
      grandtotal += Number(a.total)
      console.log(grandtotal)
    })
    return grandtotal
  }

  //empty or delete
  removeallcart(){
    this.cartitemList=[]
    this.productList.next(this.cartitemList)
  }

  removeCartitem(product:any){
    this.cartitemList.map((a:any,index:any)=>{
if(product.id==a.id){
  this.cartitemList.splice(index,1)
}
    })
    this.productList.next(this.cartitemList)
  }
}
