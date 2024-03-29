import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{DatePipe} from "@angular/common";
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
import { TablePessoaComponent } from './pages/Movimentacoes/Pessoas/Components/table-pessoa/table-pessoa.component';
import { TableSepultamentoComponent } from './pages/Movimentacoes/Sepultamentos/Components/table-sepultamento/table-sepultamento.component';
import { ListagemUnidadesComponent } from './pages/Cemiterios/Relatorios/listagem-unidades/listagem-unidades.component';
import { CrudRelatoriosComponent } from './components/crud-relatorios/crud-relatorios.component';
import { ListagemFunerariasComponent } from './pages/Funerarias/Relatorios/listagem-funerarias/listagem-funerarias.component';
import { ListagemSepulturasComponent } from './pages/Sepulturas/Relatorios/listagem-sepulturas/listagem-sepulturas.component';
import { ListagemPessoasComponent } from './pages/Movimentacoes/Pessoas/Relatorios/listagem-pessoas/listagem-pessoas.component';
import { ListagemSepultamentosComponent } from './pages/Movimentacoes/Sepultamentos/Relatorios/listagem-sepultamentos/listagem-sepultamentos.component';


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
    TablePessoaComponent,
    TableSepultamentoComponent,
    ListagemUnidadesComponent,
    CrudRelatoriosComponent,
    ListagemFunerariasComponent,
    ListagemSepulturasComponent,
    ListagemPessoasComponent,
    ListagemSepultamentosComponent,


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,


   ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
