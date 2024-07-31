import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { signup } from '../data-types';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl='http://localhost:8080/admin'
  baseUrl='"http://localhost:3000/admin"'
  static isAdminLoggedIn(): import("@angular/router").MaybeAsync<import("@angular/router").GuardResult> {
    throw new Error('Method not implemented.');
  }
  isAdminLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError= new EventEmitter<boolean>(false)

  private loggedIn=false

  constructor(private http: HttpClient, private router: Router) { }


  
  userSignup(data: signup) {
    return this.http.post(this.apiUrl, data, { observe: 'response' }).subscribe((res) => {
      this.isAdminLoggedIn.next(true) //to redirect
      if(res){
      localStorage.setItem('Admin', JSON.stringify(res.body)) //to refresh
      this.router.navigate(['admin-home'])
      
    }
    })
  


  }
  reloadadmin() {
    if (localStorage.getItem("Admin")) {
      this.isAdminLoggedIn.next(true);
      this.router.navigate(['admin-home'])
    }
  }
  userLogin(data:any){
    console.log(data)
    this.http.get(`http://localhost:8080/admin?email=${data.email}&${data.password}`,{observe:'response'}).subscribe((res:any)=>{
      // console.log(res)
      if(res && res.body && res.body.length){
        console.log("Logged in")
        localStorage.setItem('Admin', JSON.stringify(res.body))
        this.router.navigate(['admin-home'])
      }else{
        console.log("Login Failed")
        this.isLoginError.emit(true)
      }
    })
  }
  logout(){
    localStorage.removeItem('Admin')
  }
}
