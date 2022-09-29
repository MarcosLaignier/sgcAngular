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
}
