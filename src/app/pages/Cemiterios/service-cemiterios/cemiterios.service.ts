import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpStatusCode} from "@angular/common/http";
import {delay, first} from "rxjs";
import {cemiterioModel} from "../../../models/cemiterio-model";

@Injectable({
  providedIn: 'root'
})
export class CemiteriosService {

  constructor(private httpClient: HttpClient) {
  }

  // private API = 'http://ec2-35-171-8-115.compute-1.amazonaws.com:8080/api/cemiterios/';
  private API = '/api/cemiterios'
  listCemiterio() {
    return this.httpClient.get<cemiterioModel[]>(this.API).pipe(
      first()
    );
  }

  insertCemiterio(dados: cemiterioModel) {


    return this.httpClient.post(this.API, dados, {observe: 'response'}).pipe(
    )
  }

  deleteCemiterio(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`, {observe: 'response'})
  }


  findById(id: number) {
    return this.httpClient.get<cemiterioModel>(`${this.API}/${id}`)
  }
  public  getCemiteriosNome(nome:String){
    return this.httpClient.get<cemiterioModel>(`${this.API}/nome/${nome}`)
  }

  putCemiterio(id: number, dados: cemiterioModel) {
    return this.httpClient.put(`${this.API}/alter/${id}`, dados,{observe:'response'})

  }

  getEstadosBrasil(){
    return this.httpClient.get<JSON>("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",)
  }

  findCustom(codigo:String,nome:String,responsavel:String,status:String){
    let subquery = 'custom?';
    if (codigo !=''){
      subquery+=`&codigo=${codigo}`
    }
    if (nome!=''){
      subquery+=`&nome=${nome}`
    }
    if (responsavel!=''){
      subquery+=`&responsavel=${responsavel}`
    }
    if(status!=''){
      subquery+=`&status=${status}`
    }
    return this.httpClient.get<cemiterioModel[]>(`${this.API}/${subquery}`)
  }

}
