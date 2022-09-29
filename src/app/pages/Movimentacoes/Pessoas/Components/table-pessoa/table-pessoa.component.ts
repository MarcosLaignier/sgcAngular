import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {pessoaModel} from "../../Model/pessoaModel"
@Component({
  selector: 'app-table-pessoa',
  templateUrl: './table-pessoa.component.html',
  styleUrls: ['./table-pessoa.component.css']
})
export class TablePessoaComponent implements OnInit {

  constructor() { }

  /*   @Input() colunasTable:modelTable | null=null; */
  @Input() colunasTable!: Array<{ name: String }>
  @Input() dadosCols!: pessoaModel[]
  @Output() idLinha = new EventEmitter<number>();



  ngOnInit(): void {

  }
  retornaId(valor:number){
    this.idLinha.emit(valor)
  }

}
