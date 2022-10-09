import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigModel} from "../Model/configModel";

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {

  constructor(private Httpclient:HttpClient) { }

  private API='/api/config';

  public findNomeMunicipio(){
    return this.Httpclient.get<ConfigModel[]>(`${this.API}/municipio`)
  }

  public alterNomeMunicipio(codCliente:number,dados:ConfigModel){
    return this.Httpclient.put(`${this.API}/alter/${codCliente}`,dados);
  }
}
