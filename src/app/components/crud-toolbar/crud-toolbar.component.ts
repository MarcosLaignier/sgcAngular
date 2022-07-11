import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-toolbar',
  templateUrl: './crud-toolbar.component.html',
  styleUrls: ['./crud-toolbar.component.css']
})
export class CrudToolbarComponent implements OnInit {

  @Input() titlePage:String ='';

  constructor() { }

  ngOnInit(): void {
  }

  backWindow(){
    window.history.back()
  }
}
