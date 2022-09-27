import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {modelTable} from "../../../../models/table-model";
import {cemiterioModel} from "../../../../models/cemiterio-model";
import {funerariaModel} from "../../funerariaModel";

@Component({
  selector: 'app-table-funerarias',
  templateUrl: './table-funerarias.component.html',
  styleUrls: ['./table-funerarias.component.css']
})
export class TableFunerariasComponent implements OnInit {

  @Input() colunasTable!: Array<{ name: String }>
  @Input() dadosCols!: funerariaModel[]
  @Output() idLinha = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  retornaId(valor:number){
    this.idLinha.emit(valor)
  }

}
