import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RelatorioModel} from "../../models/relatorio-model";

@Injectable({
  providedIn: 'root'
})
export class JasperService {

  constructor(private httpClient:HttpClient) { }

  private API='/api/reports'

  gerarRelatorio(nameRel:String,options:String,filter:String){
    return this.httpClient.get(`${this.API}/rel/${nameRel}/${options}/${filter}`,{responseType:"arraybuffer"}).subscribe(
      data=> {
        var file = new Blob([data], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    )
  }

  gerarRelatorio2(nameRel:String,options:String,nameFilter:String,filter:String){
    return this.httpClient.get(`${this.API}/rel/${nameRel}/${options}/${nameFilter}=${filter}`,{responseType:"arraybuffer"}).subscribe(
      data=> {
        var file = new Blob([data], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    )
  }
  gerarRelatorio3(nameRel:String,options:String,nameFilter:RelatorioModel[]){
    return this.httpClient.get(`${this.API}/rel/${nameRel}/${options}/f`,{responseType:"arraybuffer"}).subscribe(
      data=> {
        var file = new Blob([data], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    )
  }

  gerarRelatorio4(nameRel:String,options:String,nameFilter:RelatorioModel[]){
    return this.httpClient.post(`${this.API}/rel/${nameRel}/${options}/f2`,nameFilter,{responseType:"arraybuffer"}).subscribe(
      data=> {
        var file = new Blob([data], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    )
  }
}
