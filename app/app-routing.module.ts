import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './AllPages/dashbord/dashbord.component';
import { LoginComponent } from './AllPages/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashbord',
    component: DashbordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
