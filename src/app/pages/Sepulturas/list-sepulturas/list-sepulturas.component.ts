import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs';
import {SepulturaServiceService} from "../services/sepultura-service.service";
import {sepulturaModel} from "../sepulturaModel";
import {ActivatedRoute, Router} from "@angular/router";

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
  idRecebido:number = 0;

  codSepultura:any;
  descSepultura:String='';
  cemiterioSepultura:String='';

  nameCemiterios:String[]=[];


  filterVisible(filterComponent: boolean) {
    this.Filter = filterComponent;
  }

  constructor(
    private sepulturaService: SepulturaServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  listSepultura() {
    this.filterVisible(false)
    return this.sepulturaService.listSepultura().subscribe((recebeDados) => (this.dadosCols = recebeDados));

  }



  recebeId_Path(valor:number) {
    this.idRecebido=valor;
    this.router.navigate(['/cadsepulturas',valor])
  };

  clearInputs(){
    this.codSepultura=null;
    this.descSepultura='';
    this.cemiterioSepultura='';
  }

  getNameCemiterios(){
    this.sepulturaService.getCemiterios().subscribe(
      data =>{
        this.nameCemiterios = data
      }
    )
  }


}
