import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs';
import {SepulturaServiceService} from "../services/sepultura-service.service";
import {sepulturaModel} from "../sepulturaModel";
import {ActivatedRoute, Router} from "@angular/router";
import {CemiteriosService} from "../../Cemiterios/service-cemiterios/cemiterios.service";
import {cemiterioModel} from "../../../models/cemiterio-model";

@Component({
  selector: 'app-list-sepulturas',
  templateUrl: './list-sepulturas.component.html',
  styleUrls: ['./list-sepulturas.component.css']
})
export class ListSepulturasComponent implements OnInit {
  Filter: boolean = true;
  colunasName = [
    {name: 'Codigo'}, {name: 'Descricao'}, {name: 'Cemiterio'}
  ]
  dadosCols: sepulturaModel[] = [];
  idRecebido: number = 0;

  codSepultura: String = '';
  descSepultura: String = '';
  cemiterioSepultura: String = '';

  nameCemiterios: cemiterioModel[] = [];


  filterVisible(filterComponent: boolean) {
    this.Filter = filterComponent;
  }

  constructor(
    private sepulturaService: SepulturaServiceService,
    private router: Router,
    private cemiterioService:CemiteriosService
  ) {
  }

  ngOnInit(): void {
    this.listCemiterios()
  }

  listSepultura() {
    this.filterVisible(false)
    return this.sepulturaService.listSepultura().subscribe((recebeDados) => (this.dadosCols = recebeDados));

  }

listCemiterios(){
    return this.cemiterioService.listCemiterio().subscribe(
      data =>{
        this.nameCemiterios = data
      }
    )
}

  recebeId_Path(valor: number) {
    this.idRecebido = valor;
    this.router.navigate(['/cadsepulturas', valor])
  };

  clearInputs() {
    this.codSepultura = '';
    this.descSepultura = '';
    this.cemiterioSepultura = '';
  }

  getNameCemiterios() {
    this.sepulturaService.getCemiterios().subscribe(
      data => {
        // this.nameCemiterios = data
      }
    )
  }

  findCustom() {
    this.sepulturaService.findCustom(this.codSepultura, this.descSepultura, this.cemiterioSepultura).subscribe(
      data => {
        this.dadosCols = data
      }
    )
  }


}
