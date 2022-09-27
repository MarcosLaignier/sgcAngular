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
    return this.Httpclient.post(this.API,dados);
  }
}
