import { Component, OnInit } from '@angular/core';
import {SepultamentoService} from "../Service/sepultamento.service";
import {SepultamentoModel} from "../Model/sepultamentoModel";
import {Route, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-list-sepultamentos',
  templateUrl: './list-sepultamentos.component.html',
  styleUrls: ['./list-sepultamentos.component.css']
})
export class ListSepultamentosComponent implements OnInit {

  pessoaFilter:String='';
  cpfFilter:String='';
  cemiterioFilter:String='';
  cemiteriosApi:String[]=[]
  dateSepultamento:Date=new Date();

  Filter:boolean = true
  idUrl : number | undefined;

  colunasName=[{name:"Codigo"}, {name:"Nome"}, {name:"CPF"},{name:"Falecimento"},{name:"Sepultamento"},{name:"Cemiterio"}]
  dadosCols:SepultamentoModel[]=[]
  recebeFilter(filterComponent: boolean) {
    this.Filter = filterComponent;
  }

  constructor(private sepultamentoService:SepultamentoService,
              private route:Router,

  ) { }

  ngOnInit(): void {
    this.getNameCemiterio()
  }

  public findAll(){
    return this.sepultamentoService.findAll().subscribe(
      data =>{
        this.dadosCols=data
      }
    )
  }


public retornaIdUrl(idLinha:number){
    this.idUrl = idLinha
    return this.route.navigate([`/cadsepultamentos/${this.idUrl}`])
}





public filterCustom(){

    return this.sepultamentoService.findCustomFilters(this.pessoaFilter,this.cpfFilter,this.cemiterioFilter).subscribe(
      data=>{
        console.log(data)
        this.dadosCols=data
      }
    )
}

public getNameCemiterio(){
    return this.sepultamentoService.findNameCem().subscribe(
      data =>{
        this.cemiteriosApi = data
      }
    )
}

clearInputs(){
    this.pessoaFilter = '';
    this.cpfFilter = '';
    // this.dateSepultamento=undefined
  this.cemiterioFilter=''
}

}
