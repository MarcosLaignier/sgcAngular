import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pessoaModel} from "../Model/pessoaModel";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private Httpclient:HttpClient
  ) { }

  private API ="/api/pessoa"

  public getPessoa(){
    return this.Httpclient.get<pessoaModel[]>(this.API)
  }

  public getPessoaId(falcodigo:number){
    return this.Httpclient.get<pessoaModel>(`${this.API}/${falcodigo}`)
  }

  public getLastCod(){
    return this.Httpclient.get<number>(`${this.API}/cod`)
  }

  public includePessoa(dados:pessoaModel){
    return this.Httpclient.post(this.API,dados,{observe:'response'})
  }

  public alterPessoa(falcodigo:number,dados:pessoaModel){
    return this.Httpclient.put(`${this.API}/alter/${falcodigo}`,dados,{observe:'response'})
  }

  public deletePessoa(falcodigo:number){
    return this.Httpclient.delete(`${this.API}/${falcodigo}`,{observe:'response'})
  }

  public getByNome(falnome:String){
    return this.Httpclient.get<pessoaModel[]>(`${this.API}/nameFal?falnome=${falnome}`)
  }

}
