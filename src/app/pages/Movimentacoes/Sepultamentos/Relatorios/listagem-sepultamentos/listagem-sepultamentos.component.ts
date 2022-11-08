import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../../../Cemiterios/service-cemiterios/cemiterios.service";

@Component({
  selector: 'app-listagem-sepultamentos',
  templateUrl: './listagem-sepultamentos.component.html',
  styleUrls: ['./listagem-sepultamentos.component.css']
})
export class ListagemSepultamentosComponent implements OnInit {

  constructor(private  cemiterioService:CemiteriosService) { }

  ngOnInit(): void {
  }

  geraRelatorio(){
    // return this.cemiterioService.gerarRelatorio()
  }
}
