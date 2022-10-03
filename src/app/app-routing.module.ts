import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListCemiteriosComponent } from './pages/Cemiterios/list-cemiterios/list-cemiterios.component';
import { ListSepulturasComponent } from './pages/Sepulturas/list-sepulturas/list-sepulturas.component';
import { ListFunerariasComponent } from './pages/Funerarias/list-funerarias/list-funerarias.component';
import { ListFalecidosComponent } from './pages/Movimentacoes/Pessoas/list-falecidos/list-falecidos.component';
import { ListSepultamentosComponent } from './pages/Movimentacoes/Sepultamentos/list-sepultamentos/list-sepultamentos.component';
import { ConfiguracoesGeraisComponent } from './pages/Configuracoes/configuracoes-gerais/configuracoes-gerais.component';
import { CadCemiterioComponent } from './pages/Cemiterios/cad-cemiterio/cad-cemiterio.component';
import { CadSepulturasComponent } from './pages/Sepulturas/cad-sepulturas/cad-sepulturas.component';
import { CadFalecidosComponent } from './pages/Movimentacoes/Pessoas/cad-falecidos/cad-falecidos.component';
import { CadSepultamentosComponent } from './pages/Movimentacoes/Sepultamentos/cad-sepultamentos/cad-sepultamentos.component';
import { CadFunerariasComponent } from './pages/Funerarias/cad-funerarias/cad-funerarias.component';

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
  },
  {
    path:'listfalecidos',component:ListFalecidosComponent
  },
  {
    path:'listsepultamentos',component:ListSepultamentosComponent
  },
  {
    path:'configuracoesgerais',component:ConfiguracoesGeraisComponent
  },
  {
    path:'cadcemiterios',component:CadCemiterioComponent
  },
  {
    path:'cadsepulturas',component:CadSepulturasComponent
  },
  {
    path:'cadfalecidos',component:CadFalecidosComponent
  },
  {
    path:'cadsepultamentos',component:CadSepultamentosComponent
  },
  {
    path:'cadfunerarias',component:CadFunerariasComponent
  },
  {path:'cadcemiterios/:id',component:CadCemiterioComponent
  },
  {
    path:'cadsepulturas/:id',component:CadSepulturasComponent
  },
  {
    path:'cadfunerarias/:id',component:CadFunerariasComponent
  },
  {
    path:'cadfalecidos/:id',component:CadFalecidosComponent
  },
  {
    path:'cadsepultamentos/:id',component:CadSepultamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
