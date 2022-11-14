import { Component, OnInit } from '@angular/core';
import {CemiteriosService} from "../../../Cemiterios/service-cemiterios/cemiterios.service";
import {JasperService} from "../../../../Services/Jasper/jasper.service";
import {cemiterioModel} from "../../../../models/cemiterio-model";
import {RelatorioModel} from "../../../../models/relatorio-model";

@Component({
  selector: 'app-listagem-sepulturas',
  templateUrl: './listagem-sepulturas.component.html',
  styleUrls: ['./listagem-sepulturas.component.css']
})
export class ListagemSepulturasComponent implements OnInit {

  nameRel:String='ListagemAnaliticaSepulturas'
  geraNovaAba:boolean=true;
  optionNovaAba:String='';
  filterCemiterio:String=''
  filterSepultura:String=''
  listCemiterios:cemiterioModel[]=[];
  filter:RelatorioModel[]=[]

  constructor(private  jasperService:JasperService,
              private cemiterioService:CemiteriosService) { }

  ngOnInit(): void {
    this.populaListCemiterio()
  }

  verificaParametros() {
    if (this.geraNovaAba) {
      this.optionNovaAba = 's'
    } else {
      this.optionNovaAba = 'n'
    }
  }

  geraRelatorio(){
    this.filter=[
      {
        nameFilter:"FILTER_SEPULTURA",
        nameRelatorio:this.filterSepultura
      },
      {nameFilter:"FILTER_CEMITERIO",
        nameRelatorio:this.filterCemiterio

      }
    ]
    return this.jasperService.gerarRelatorio4(this.nameRel,'s',this.filter)
  }

  populaListCemiterio(){
    return this.cemiterioService.listCemiterio().subscribe(
      data =>{
        this.listCemiterios=data
      }
    )
  }
}
