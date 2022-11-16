import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../../../Cemiterios/service-cemiterios/cemiterios.service";
import {JasperService} from "../../../../../Services/Jasper/jasper.service";
import {RelatorioModel} from "../../../../../models/relatorio-model";

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {
  nameRel:String='ListagemPessoasAnalitico'
  geraNovaAba:boolean=true;
  optionNovaAba:String='';
  namePessoa:String=''
  cpfPessoa:String=''

  filter:RelatorioModel[]=
    [{
      nameFilter: '',
      nameRelatorio:''
    }]

  constructor(private  jasperService:JasperService) { }

  ngOnInit(): void {
  }

  verificaParametros() {
    if (this.geraNovaAba) {
      this.optionNovaAba = 's'
    } else {
      this.optionNovaAba = 'n'
    }
  }

  geraRelatorio(){
    this.filter=[
      {
        nameFilter:"NOME_PESSOA",
        nameRelatorio:this.namePessoa
      },
      {nameFilter:"FILTER_CPF",
        nameRelatorio:this.cpfPessoa

      }
    ]

return this.jasperService.gerarRelatorio4(this.nameRel,'s',this.filter)
  }

}
