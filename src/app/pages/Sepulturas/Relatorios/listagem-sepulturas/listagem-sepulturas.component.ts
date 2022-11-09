import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../../Cemiterios/service-cemiterios/cemiterios.service";
import {JasperService} from "../../../../Services/Jasper/jasper.service";

@Component({
  selector: 'app-listagem-sepulturas',
  templateUrl: './listagem-sepulturas.component.html',
  styleUrls: ['./listagem-sepulturas.component.css']
})
export class ListagemSepulturasComponent implements OnInit {

  nameRel:String='ListagemAnaliticaSepulturas'
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
