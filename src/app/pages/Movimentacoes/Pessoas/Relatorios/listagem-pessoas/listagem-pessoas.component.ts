import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../../../Cemiterios/service-cemiterios/cemiterios.service";
import {JasperService} from "../../../../../Services/Jasper/jasper.service";

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
    console.log(this.namePessoa)

return this.jasperService.gerarRelatorio2(this.nameRel,'s','NOME_PESSOA',this.namePessoa)
  }

}
