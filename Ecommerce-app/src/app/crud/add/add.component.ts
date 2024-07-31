import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private service:DbService, private router:Router){}
addPro(val:any){
  const temp={
  id:val.pid,
  image:val.pimg,
  title:val.ptitle,
  description:val.pdes,
  price:val.pp
  }
  this.service.addProduct(temp).subscribe( ()=>{
    console.log("record added successfully")
    alert("record added successfully")
    this.router.navigate(["/dashboard"])
  })
  }
}


