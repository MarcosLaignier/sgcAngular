import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-crud-toolbar',
  templateUrl: './crud-toolbar.component.html',
  styleUrls: ['./crud-toolbar.component.css']
})
export class CrudToolbarComponent implements OnInit {

  @Input() titlePage:String ='';
  @Input() routerNovo:String = '#';
  @Output() clickE = new EventEmitter;
  @Output() clickLimpar = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  click:Boolean = false;
  FiltrarDados(){
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
