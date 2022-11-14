import { Component, OnInit } from '@angular/core';
import {JasperService} from "../../../../../Services/Jasper/jasper.service";
import {RelatorioModel} from "../../../../../models/relatorio-model";

@Component({
  selector: 'app-listagem-sepultamentos',
  templateUrl: './listagem-sepultamentos.component.html',
  styleUrls: ['./listagem-sepultamentos.component.css']
})
export class ListagemSepultamentosComponent implements OnInit {
  nameRel:String='ListagemSepultamentosAnaliticoFilter'
  geraNovaAba:boolean=true;
  optionNovaAba:String='';
  namePessoa:String='';
  nameCemiterio:String='';

  constructor(private  jasperService:JasperService,
              ) { }

  ngOnInit(): void {
  }

  // filter:[{nameFilter:String,nameRel:String}]=[{
  //   nameFilter:'',
  //   nameRel:''
  // }]
filter:RelatorioModel[]=
  [{
  nameFilter: '',
    nameRelatorio:''
  }]



  verificaParametros() {
    if (this.geraNovaAba) {
      this.optionNovaAba = 's'
    } else {
      this.optionNovaAba = 'n'
    }
  }
  pegaid(){

  }

  geraRelatorio(){

         this.filter=[
           {
           nameFilter:"FILTER_FALECIDO",
           nameRelatorio:this.namePessoa
         },
           {nameFilter:"FILTER_CEMITERIO",
             nameRelatorio:this.nameCemiterio

           }
           ]
          console.log(this.filter)
    //
    // let teste:any = JSON.stringify(this.filter)
    // console.log(teste)

    return this.jasperService.gerarRelatorio4(this.nameRel,'s',this.filter)

    // return this.jasperService.gerarRelatorio2(this.nameRel,'s','FILTER_FALECIDO',this.namePessoa)
  }
}
