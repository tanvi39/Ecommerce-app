import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { authGuard } from './auth.guard';
import { AddComponent } from './crud/add/add.component';
import { ActivatedRoute } from '@angular/router';
import { EditComponent } from './crud/edit/edit.component';
import { DashboardComponent } from './crud/dashboard/dashboard.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:HomeComponent},
    {path:'admin',component:AdminComponent},
    {path:'admin-home',component:AdminHomeComponent,canActivate:[authGuard]},
    {path:'cart',component:CartComponent},
    {path:'crud',loadChildren:()=>import('./crud/crud-routing.module').then(m=>m.CrudRoutingModule)},
    {path:'dashboard',component:DashboardComponent},
    {path:'add',component:AddComponent},
    {path:'edit/:id',component:EditComponent},
    {path:'product/add',component:AddComponent},
    {path:'product/edit/:id',component:EditComponent}
    
    

    
];
 