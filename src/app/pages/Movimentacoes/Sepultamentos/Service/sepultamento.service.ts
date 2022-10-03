import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SepultamentoModel} from "../Model/sepultamentoModel";
@Injectable({
  providedIn: 'root'
})
export class SepultamentoService {

  constructor(private HttpClient:HttpClient) { }

  private API = '/api/sepultamentos'

  public findAll(){
    return this.HttpClient.get<SepultamentoModel[]>(this.API);
  }

  public findById(Id:number){
    return this.HttpClient.get<SepultamentoModel>(`${this.API}/${Id}`)
  }

  findNameFun(){
    return this.HttpClient.get<String[]>(`${this.API}/nameFun`)
  }

  findNameCem(){
    return this.HttpClient.get<String[]>(`${this.API}/nameCem`)
  }
}
