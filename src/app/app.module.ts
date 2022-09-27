import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCemiteriosComponent } from './pages/Cemiterios/list-cemiterios/list-cemiterios.component';
import { TableComponent } from './components/table/table.component';
import { CrudToolbarComponent } from './components/crud-toolbar/crud-toolbar.component';
import { ListSepulturasComponent } from './pages/Sepulturas/list-sepulturas/list-sepulturas.component';
import { ListFunerariasComponent } from './pages/Funerarias/list-funerarias/list-funerarias.component';
import { FilterVisibleComponent } from './components/filter-visible/filter-visible.component';
import { ListFalecidosComponent } from './pages/Movimentacoes/Pessoas/list-falecidos/list-falecidos.component';
import { ListSepultamentosComponent } from './pages/Movimentacoes/Sepultamentos/list-sepultamentos/list-sepultamentos.component';
import { ConfiguracoesGeraisComponent } from './pages/Configuracoes/configuracoes-gerais/configuracoes-gerais.component';
import { CadCemiterioComponent } from './pages/Cemiterios/cad-cemiterio/cad-cemiterio.component';
import { CadSepulturasComponent } from './pages/Sepulturas/cad-sepulturas/cad-sepulturas.component';
import { CadFalecidosComponent } from './pages/Movimentacoes/Pessoas/cad-falecidos/cad-falecidos.component';
import { CadSepultamentosComponent } from './pages/Movimentacoes/Sepultamentos/cad-sepultamentos/cad-sepultamentos.component';
import { CrudToolbarCadComponent } from './components/crud-toolbar-cad/crud-toolbar-cad.component';
import { CadFunerariasComponent } from './pages/Funerarias/cad-funerarias/cad-funerarias.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TableSepulturasComponent } from './pages/Sepulturas/Components/table-sepulturas/table-sepulturas.component';
import { TableFunerariasComponent } from './pages/Funerarias/Components/table-funerarias/table-funerarias.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeftBarComponent,
    ToolbarComponent,
    HomeComponent,
    ListCemiteriosComponent,
    TableComponent,
    CrudToolbarComponent,
    ListSepulturasComponent,
    ListFunerariasComponent,
    FilterVisibleComponent,
    ListFalecidosComponent,
    ListSepultamentosComponent,
    ConfiguracoesGeraisComponent,
    CadCemiterioComponent,
    CadSepulturasComponent,
    CadFalecidosComponent,
    CadSepultamentosComponent,
    CrudToolbarCadComponent,
    CadFunerariasComponent,
    TableComponent,
    TableSepulturasComponent,
    TableFunerariasComponent,


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule

   ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
