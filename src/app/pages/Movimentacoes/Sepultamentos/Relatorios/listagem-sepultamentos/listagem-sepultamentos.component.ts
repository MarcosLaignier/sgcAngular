import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../../../Cemiterios/service-cemiterios/cemiterios.service";
import {JasperService} from "../../../../../Services/Jasper/jasper.service";

@Component({
  selector: 'app-listagem-sepultamentos',
  templateUrl: './listagem-sepultamentos.component.html',
  styleUrls: ['./listagem-sepultamentos.component.css']
})
export class ListagemSepultamentosComponent implements OnInit {
  nameRel:String='ListagemSepultamentosAnalitico'
  geraNovaAba:boolean=true;
  optionNovaAba:String='';

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
    return this.jasperService.gerarRelatorio(this.nameRel,'s')
  }
}
