import { Component, Injectable, OnInit,NgModule } from '@angular/core';
import {FunerariaService} from "../Services/funeraria.service";
import {ActivatedRoute} from "@angular/router";
import {funerariaModel} from "../funerariaModel";

@Component({
  selector: 'app-cad-funerarias',
  templateUrl: './cad-funerarias.component.html',
  styleUrls: ['./cad-funerarias.component.css']
})
@Injectable()
export class CadFunerariasComponent implements OnInit {

  idUrl:number=0;
  codFun:any=4;
  nameFun:String='';
  cidadeFun:String='';
  enderecoFun:String='';
  numeroFun:any;

   funeraria:funerariaModel = {
     funcodigo:0,
     fundescricao:'',
     funendereco:'',
     funcidade:'',
     funnumero:0

};
  constructor(private funerariaService:FunerariaService,
              private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getById(1)
  }
// public recebeIdUrl(){
//     return this.route.param.subscribe(
//       params =>
//         this.idUrl = params['id']
//
//     )
// }
  public getById(id:number){

    this.route.params.subscribe(params => this.idUrl = params['id'])
    return this.funerariaService.listById(this.idUrl).subscribe(
      data =>{
        this.codFun=data.funcodigo
        this.nameFun=data.fundescricao
        this.enderecoFun=data.funendereco
        this.cidadeFun=data.funcidade
        this.numeroFun=data.funnumero
      }
    )
  }

  public insertFun(){
    this.funeraria.funcodigo=this.codFun
    this.funeraria.fundescricao=this.nameFun
    this.funeraria.funendereco=this.enderecoFun
    this.funeraria.funcidade=this.cidadeFun
    this.funeraria.funnumero=this.numeroFun
    return this.funerariaService.insertFun(this.funeraria).subscribe()
  }

}
