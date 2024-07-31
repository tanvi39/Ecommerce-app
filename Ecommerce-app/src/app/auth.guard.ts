import { CanActivateFn } from '@angular/router';
import { AdminService } from './services/admin.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) =>  {
  
  if (localStorage.getItem("Admin")) {
    return true 
  }
  return false
}




