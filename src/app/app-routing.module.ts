import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListCemiteriosComponent } from './pages/list-cemiterios/list-cemiterios.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'listcemiterios',component:ListCemiteriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
