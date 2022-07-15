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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
