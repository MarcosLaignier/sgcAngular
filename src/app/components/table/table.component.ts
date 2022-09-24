import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {modelTable} from 'src/app/models/table-model';
import {cemiterioModel} from "../../models/cemiterio-model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() {
  }

  /*   @Input() colunasTable:modelTable | null=null; */
  @Input() colunasTable!: Array<{ name: String }>
  @Input() dadosCols!: cemiterioModel[]
  @Output() idLinha = new EventEmitter<number>();



  ngOnInit(): void {

  }
  retornaId(valor:number){
    this.idLinha.emit(valor)
  }


}
