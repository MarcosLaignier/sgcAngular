import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../../../Cemiterios/service-cemiterios/cemiterios.service";

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {
  constructor(private  cemiterioService:CemiteriosService) { }

  ngOnInit(): void {
  }

  geraRelatorio(){
    return this.cemiterioService.gerarRelatorio()
  }

}
