import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../service-cemiterios/cemiterios.service";
import {JasperService} from "../../../../Services/Jasper/jasper.service";

@Component({
  selector: 'app-listagem-unidades',
  templateUrl: './listagem-unidades.component.html',
  styleUrls: ['./listagem-unidades.component.css']
})
export class ListagemUnidadesComponent implements OnInit {

  nameRel:String='';
  geraNovaAba:boolean=true;
  optionNovaAba:String='';

  constructor(private  jasperService:JasperService) { }

  ngOnInit(): void {
  }

verificaParametros(){
    if (this.geraNovaAba){
      this.optionNovaAba='s'
    }else{
      this.optionNovaAba='n'
    }
}

  geraRelatorio(){
    this.verificaParametros();
    return this.jasperService.gerarRelatorio('ListagemCemiterioAnalitico',this.optionNovaAba)
  }
}
