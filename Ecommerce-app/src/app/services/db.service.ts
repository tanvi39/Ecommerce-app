import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  baseUrl='http://localhost:3000/product'
  apiUrl='http://localhost:8080/product'

  constructor(private http:HttpClient) { }

  //Get record
  getRecord(_id:any){
    // this.http.get(`${this.baseUrl}/${id}`)
    this.http.get(this.apiUrl+"/"+_id)
  }

  //Add product
  addProduct(productRecord:any){
// return this.http.post(this.baseUrl,productRecord)
return this.http.post(this.apiUrl + "/add",productRecord)
  }

  //Delete product
  deleteRecord(id:string){
    // return this.http.delete(this.baseUrl + "/" + id)
    return this.http.delete(this.apiUrl +"/delete/"  +id)
  }

  //Update product
  updateRecord(data:any){
    // return this.http.put(this.baseUrl + "/edit" + data.id,data)
    console.log("update")
    return this.http.put(this.apiUrl + "/edit/" + data.id,data)
  }
}
