import {Component, Input, OnInit} from '@angular/core';
import {modelTable} from 'src/app/models/table-model';
import {CemiteriosService} from "../service-cemiterios/cemiterios.service";
import {delay, Observable} from "rxjs";
import {cemiterioModel} from "../../../models/cemiterio-model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-cemiterios',
  templateUrl: './list-cemiterios.component.html',
  styleUrls: ['./list-cemiterios.component.css']
})
export class ListCemiteriosComponent implements OnInit {
  dadosCols: cemiterioModel[] = [];

  constructor(private cemiteriosService: CemiteriosService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  cod_Cemiterio: String = '';
  name_Cemiterio: String = '';
  resp_Cemiterio: String = '';
  status_Cemiterio:String ='';

  spinner:boolean=false;


  colunasName = [
    {name: 'ID'}, {name: 'Nome'}, {name: 'Endereco'}, {name: 'Responsavel'}, {name: 'Ativo'}
  ]


  Filter: Boolean = true

  recebeFilter(filterComponent: boolean) {
    this.Filter = filterComponent;
  }


  ngOnInit(): void {
  }

  listarCemiterios() {
    this.cemiteriosService.listCemiterio().subscribe((recebeDados) => (this.dadosCols = recebeDados));
    this.Filter = false;

  }

  idRec: number = 0;

  recebeId_Path(valor: number) {
    this.idRec = valor;
    this.router.navigate(['/cadcemiterios', valor],)
  }

  limparInput() {
    this.cod_Cemiterio = '';
    this.name_Cemiterio = '';
    this.resp_Cemiterio = '';

  }

  findUndCustom() {
console.log(this.status_Cemiterio)
    return this.cemiteriosService.findCustom(this.cod_Cemiterio, this.name_Cemiterio, this.resp_Cemiterio,this.status_Cemiterio).subscribe(
      data => {
        this.dadosCols = data
        console.log(data)
      }
    )
  }


}


