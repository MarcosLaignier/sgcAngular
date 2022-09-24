import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {sepulturaModel} from "../../sepulturaModel";

@Component({
  selector: 'app-table-sepulturas',
  templateUrl: './table-sepulturas.component.html',
  styleUrls: ['./table-sepulturas.component.css']
})
export class TableSepulturasComponent implements OnInit {

  constructor() { }

  @Input() colunasTable!: Array<{ name: String }>
  @Input() dadosCols!: sepulturaModel[]
  @Output() idLinha = new EventEmitter<number>();



  ngOnInit(): void {

  }
  retornaId(valor:number){
    this.idLinha.emit(valor)
  }

}
