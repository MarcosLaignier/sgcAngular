import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpStatusCode} from "@angular/common/http";
import {first} from "rxjs";
import {cemiterioModel} from "../../../models/cemiterio-model";

@Injectable({
  providedIn: 'root'
})
export class CemiteriosService {

  constructor(private httpClient: HttpClient) {
  }

  private API = 'http://ec2-54-86-171-218.compute-1.amazonaws.com:8080/api/cemiterios/';

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
    return this.httpClient.delete(this.API + id, {observe: 'response'})
  }


  findById(id: number) {
    return this.httpClient.get<cemiterioModel>(`${this.API}/${id}`)
  }

  putCemiterio(id: number, dados: cemiterioModel) {
    return this.httpClient.put(`${this.API}/alter/${id}`, dados,{observe:'response'})

  }

  getCodigo(){
    return this.httpClient.get(`${this.API}/cod`).pipe(

    )
  }

  getEstadosBrasil(){
    return this.httpClient.get<JSON>("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",)
  }

}
