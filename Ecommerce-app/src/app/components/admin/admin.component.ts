import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { signup } from '../../data-types';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
constructor( private admin:AdminService, private router:Router){}
showlogin=false
Error=''
  ngOnInit(): void {
    
      this.admin.reloadadmin()
    
  }
  signup(data:signup){

    this.admin.userSignup(data)
  }
  login(data:object){
    this.Error=""
    // console.log(data)
    this.admin.userLogin(data)
    this.admin.isLoginError.subscribe((error)=>{
      if(error){
        this.Error="Email or password is not correct"
      }
    })
    
  }

  openLogin(){
    this.showlogin=true

  }
  openSignup(){
this.showlogin=false
}
  

}
