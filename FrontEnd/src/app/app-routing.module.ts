import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'modal-login',component:ModalLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
