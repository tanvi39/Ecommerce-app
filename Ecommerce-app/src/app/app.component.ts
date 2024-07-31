import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { AdminService } from './services/admin.service';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadComponent,NgToastModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  constructor(private admin:AdminService){}
  title = 'Ecommerce-app';
  
  
}
