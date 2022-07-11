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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
