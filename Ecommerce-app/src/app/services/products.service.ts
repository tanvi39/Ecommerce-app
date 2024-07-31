import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:3000/product'
  apiUrl='http://localhost:8080/product'
  

  getProduct():Observable<any>{
    // return this.http.get(this.baseUrl)
    return this.http.get(this.apiUrl)
    
  }
  getSingleproduct(id:any){
    // return this.http.get(`${this.baseUrl}/${id}`)
    return this.http.get(this.apiUrl + '/' + id)
    
  }
}


