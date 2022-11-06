import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../service-cemiterios/cemiterios.service";

@Component({
  selector: 'app-listagem-unidades',
  templateUrl: './listagem-unidades.component.html',
  styleUrls: ['./listagem-unidades.component.css']
})
export class ListagemUnidadesComponent implements OnInit {

  constructor(private  cemiterioService:CemiteriosService) { }

  ngOnInit(): void {
  }

  geraRelatorio(){
    return this.cemiterioService.gerarRelatorio()
  }
}
