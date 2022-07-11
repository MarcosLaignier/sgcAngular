import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListCemiteriosComponent } from './pages/Cemiterios/list-cemiterios/list-cemiterios.component';
import { ListSepulturasComponent } from './pages/Sepulturas/list-sepulturas/list-sepulturas.component';
import { ListFunerariasComponent } from './pages/Funerarias/list-funerarias/list-funerarias.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'listcemiterios',component:ListCemiteriosComponent
  },
  {
    path:'listsepulturas',component:ListSepulturasComponent
  },
  {
    path:'listfunerarias',component:ListFunerariasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
