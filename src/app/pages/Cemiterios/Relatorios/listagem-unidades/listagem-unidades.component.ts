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
  geraNovaAba:String='';

  constructor(private  jasperService:JasperService) { }

  ngOnInit(): void {
  }

tt(){
    console.log(this.nameRel)
}

  geraRelatorio(){
    console.log(this.nameRel)
    return this.jasperService.gerarRelatorio('ListagemCemiterioAnalitico',"s")
  }
}
