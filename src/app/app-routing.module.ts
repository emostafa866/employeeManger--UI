import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {NavbarComponent} from './components/navbar/navbar.component';
import {AddComponent} from './components/add/add.component';

const routes: Routes = [{
  path:'add',component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
