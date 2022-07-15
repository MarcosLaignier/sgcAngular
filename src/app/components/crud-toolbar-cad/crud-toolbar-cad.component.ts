import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-toolbar-cad',
  templateUrl: './crud-toolbar-cad.component.html',
  styleUrls: ['./crud-toolbar-cad.component.css']
})
export class CrudToolbarCadComponent implements OnInit {

  @Input() titlePage:String = '';

  constructor() { }

  ngOnInit(): void {
  }
  backWindow(){
    window.history.back()
  }
}
