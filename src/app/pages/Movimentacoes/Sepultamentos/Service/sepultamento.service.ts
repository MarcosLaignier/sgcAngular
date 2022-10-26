import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SepultamentoModel} from "../Model/sepultamentoModel";
import {sepulturaModel} from "../../../Sepulturas/sepulturaModel";
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

  public insertSepultamento(dadosSepultamento:SepultamentoModel){
    return this.HttpClient.post(`${this.API}`,dadosSepultamento,{observe:'response'})
  }

  public alteraSepultamento(sepulCodigo:number , dadosSepultamento:SepultamentoModel){
    return this.HttpClient.put(`${this.API}/alter/${sepulCodigo}`,dadosSepultamento,{observe:'response'})
  }

  excludeSepultamento(sepulCodigo:number){
    return this.HttpClient.delete(`${this.API}/${sepulCodigo}`,{observe:'response'})
  }

  findNameFun(){
    return this.HttpClient.get<String[]>(`${this.API}/nameFun`)
  }

  findNameCem(){
    return this.HttpClient.get<String[]>(`${this.API}/nameCem`)
  }

  findLastCod(){
    return this.HttpClient.get<number>(`${this.API}/cod`)
  }

  subQuery:String=`/Filter?`;
  findCustomFilters(fal?:String , cpf?:String,cemiterio?:String ){
    this.subQuery='/Filter?';
    if(fal!=""){
      this.subQuery += `pessoa=${fal}`
    }

    if(cpf !=""){
      this.subQuery +=`&cpf=${cpf}`
    }
    if(cemiterio!=""){
      this.subQuery +=`&Cemiterio=${cemiterio}`
    }

    return this.HttpClient.get<SepultamentoModel[]>(`${this.API}${this.subQuery}`)
  }
}
