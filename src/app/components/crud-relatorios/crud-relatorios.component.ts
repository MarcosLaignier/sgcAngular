import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-crud-relatorios',
  templateUrl: './crud-relatorios.component.html',
  styleUrls: ['./crud-relatorios.component.css']
})
export class CrudRelatoriosComponent implements OnInit {

  @Input() titlePage:String ='';
  @Input() routerNovo:String = '#';
  @Output() clickE = new EventEmitter;
  @Output() clickLimpar = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  click:Boolean = false;
  gerarRelatorio(){
    this.clickE.emit(this.click)
    this.click = !this.click


  }
  limparDados(){
    this.clickLimpar.emit(this.click)
    this.click = !this.click
  }


  backWindow(){
    window.history.back()
  }


}
