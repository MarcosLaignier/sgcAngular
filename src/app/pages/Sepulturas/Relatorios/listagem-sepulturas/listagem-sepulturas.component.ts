import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../../Cemiterios/service-cemiterios/cemiterios.service";

@Component({
  selector: 'app-listagem-sepulturas',
  templateUrl: './listagem-sepulturas.component.html',
  styleUrls: ['./listagem-sepulturas.component.css']
})
export class ListagemSepulturasComponent implements OnInit {

  constructor(private  cemiterioService:CemiteriosService) { }

  ngOnInit(): void {
  }

  geraRelatorio(){
    // return this.cemiterioService.gerarRelatorio()
  }
}
