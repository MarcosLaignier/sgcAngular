import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {sepulturaModel} from "../sepulturaModel";
import {cemiterioModel} from "../../../models/cemiterio-model";

@Injectable({
  providedIn: 'root'
})
export class SepulturaServiceService {

  private API = "api/sepulturas"
  private API_Cemiterios ="api/cemiterios"

  constructor(private HttpClient: HttpClient) { }

  public  listSepultura(){
    return this.HttpClient.get<sepulturaModel[]>(this.API);
  }

  public getByIdSepultura(id:number){
    return this.HttpClient.get<sepulturaModel>(`${this.API}/${id}`)
  }

  public getByDescricao(sepdescricao:String){
    return this.HttpClient.get<sepulturaModel>(`${this.API}/nome/${sepdescricao}`)
  }

  public insertSepultura(dados:sepulturaModel){
    return this.HttpClient.post(this.API,dados ,{observe:'response'});
  }

  public alteraSepultura(id:number,dados:sepulturaModel){
    return this.HttpClient.put(`${this.API}/alter/${id}`,dados,{observe:'response'})
  }

  public deleteSepulturas(id:number){
    return this.HttpClient.delete(`${this.API}/${id}`,{observe:'response'})
  }


  public  getCemiterios(){
    return this.HttpClient.get<cemiterioModel[]>(`${this.API_Cemiterios}`)
  }


  public  getCemiteriosNome(nome:String){
    return this.HttpClient.get<cemiterioModel>(`${this.API_Cemiterios}/nome/${nome}`)
  }

  public getSepulturasByCemiterio(cemiterio:String){
    return this.HttpClient.get<sepulturaModel[]>(`${this.API}/sep/${cemiterio}`)
  }

  public findCustom(codigo:String,descricao:String,cemiterio:String){
    let subquery = 'custom?'
    if(codigo!=''){
      subquery+=`&codigo=${codigo}`
    }
    if (descricao!=''){
      subquery+=`&descricao=${descricao}`
    }
    if (cemiterio!=''){
      subquery+=`&cemiterio=${cemiterio}`
    }
    return this.HttpClient.get<sepulturaModel[]>(`${this.API}/${subquery}`)
  }


}
