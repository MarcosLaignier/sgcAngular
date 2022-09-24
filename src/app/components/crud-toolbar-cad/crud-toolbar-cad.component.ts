import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-crud-toolbar-cad',
  templateUrl: './crud-toolbar-cad.component.html',
  styleUrls: ['./crud-toolbar-cad.component.css']
})
export class CrudToolbarCadComponent implements OnInit {

  @Input() titlePage:String = '';
  @Output() SalvarBtn = new EventEmitter()
  @Output() excludeBtn = new EventEmitter()
  @Output() salvarFecharBtn = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  clickSalvarBtn() {
    this.SalvarBtn.emit(true);
  }
  clickExcludeBtn(){
    this.excludeBtn.emit(true);
  }
  clickSalvarFechar(){
    this.salvarFecharBtn.emit(true)
  }

  backWindow(){
    window.history.back()
  }
}
