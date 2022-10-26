import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {funerariaModel} from "../funerariaModel";

@Injectable({
  providedIn: 'root'
})
export class FunerariaService {

  constructor(private Httpclient:HttpClient) { }

  private API ='/api/funerarias'

  public listFun(){
    return this.Httpclient.get<funerariaModel[]>(this.API);
  }

  public listById(funcodigo:number){
    return this.Httpclient.get<funerariaModel>(`${this.API}/${funcodigo}`)
  }

  public insertFun(dados:funerariaModel){
    return this.Httpclient.post(this.API,dados , {observe:'response'});
  }

  public alteraFun(funcodigo:number,dados:funerariaModel){
    return this.Httpclient.put(`${this.API}/alter/${funcodigo}`,dados,{observe:'response'})
  }

  public deleteFun(funcodigo:number){
    return this.Httpclient.delete(`${this.API}/${funcodigo}`,{observe:'response'})
  }

  public lastCod(){
    return this.Httpclient.get<number>(`${this.API}/codfun`)
  }

  public findByName(fundescricao:String){
    return this.Httpclient.get<funerariaModel>(`${this.API}/nome/${fundescricao}`)
  }

  public findCustom(codigo:String,nome:String,cidade:String){
    let subquery = "custom?";
    if(codigo != '' ){
      subquery+=`&codigo=${codigo}`
    }
    if (nome!=''){
      subquery+=`&nome=${nome}`
    }
    if(cidade !=''){
      subquery+=`&cidade=${cidade}`
    }

    return this.Httpclient.get<funerariaModel[]>(`${this.API}/${subquery}`)
  }
}
