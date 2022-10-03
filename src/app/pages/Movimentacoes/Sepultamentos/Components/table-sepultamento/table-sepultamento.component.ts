import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {pessoaModel} from "../../../Pessoas/Model/pessoaModel";
import {SepultamentoModel} from "../../Model/sepultamentoModel";

@Component({
  selector: 'app-table-sepultamento',
  templateUrl: './table-sepultamento.component.html',
  styleUrls: ['./table-sepultamento.component.css']
})
export class TableSepultamentoComponent implements OnInit {

  constructor() { }

  @Input() colunasTable!: Array<{ name: String }>
  @Input() dadosCols!: SepultamentoModel[]
  @Output() idLinha = new EventEmitter<number>();



  ngOnInit(): void {

  }
  retornaId(valor:number){
    this.idLinha.emit(valor)
  }

}
