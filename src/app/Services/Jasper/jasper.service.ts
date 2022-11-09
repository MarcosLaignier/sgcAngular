import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JasperService {

  constructor(private httpClient:HttpClient) { }

  private API='/api/reports'

  gerarRelatorio(nameRel:String,options:String){
    return this.httpClient.get(`${this.API}/rel/${nameRel}/${options}`,{responseType:"arraybuffer"}).subscribe(
      data=> {
        var file = new Blob([data], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    )
  }
}
