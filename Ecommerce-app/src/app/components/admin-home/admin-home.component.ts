import { Component } from '@angular/core';
import { DashboardComponent } from '../../crud/dashboard/dashboard.component';
import { AddComponent } from '../../crud/add/add.component';
import { EditComponent } from '../../crud/edit/edit.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [DashboardComponent,RouterModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

}
