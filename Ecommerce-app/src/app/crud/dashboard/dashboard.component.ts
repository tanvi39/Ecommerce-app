import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
item: any;
  constructor(private service:ProductsService,private dbservice:DbService){}
productData:any

ngOnInit(): void {
  this.fetchData()
}

fetchData(){
  this.service.getProduct().subscribe((res)=>{
    console.log("res data from delete call")
    this.productData=res
    console.log(res,'Data response123')
  })
}
onDelete(id:string){
const choice=confirm("Are you sure you want to delete the record ?")
if(choice==true){
  this.dbservice.deleteRecord(id).subscribe(()=>{
    alert("Record deleted successfully")
    this.fetchData()
  })
}
}

}
