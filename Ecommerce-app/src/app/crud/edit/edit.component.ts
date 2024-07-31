import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  id:any
  productData:any
  constructor(private actRoute:ActivatedRoute,private dbService:DbService,private router:Router,private service:ProductsService){}

  ngOnInit(): void {
    console.log("HI")
    this.actRoute.paramMap.subscribe((params)=>{
      this.id=params.get('id')
      console.log(this.id,"id")
      if(this.id!=null){
        this.service.getSingleproduct(this.id).subscribe((res: any)=>{
         console.log(res,"get data ")
          return this.productData=res
          
        })
      }
    })
  }
editPro(val:any){
const pro={
  id:this.id,
  image:val.pimg,
  description:val.pdes,
  title:val.ptitle,
  price:val.pp
}
this.dbService.updateRecord(pro).subscribe(()=>{
  alert("Record edited succesfully")
  this.router.navigate(['/admin-home'])
})
}
}
// this.dbService.getRecord(this.id).subscribe((res:any)=>{
        //   return this.productData=res
        // })
