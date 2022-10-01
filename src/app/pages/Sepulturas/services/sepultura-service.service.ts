import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {sepulturaModel} from "../sepulturaModel";

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

  public getLastId(){
    return this.HttpClient.get(`${this.API}/cod`)
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
    return this.HttpClient.get<String[]>(`${this.API_Cemiterios}/nameCemiterios`)
  }


}