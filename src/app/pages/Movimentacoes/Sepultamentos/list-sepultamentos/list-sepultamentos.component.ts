import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sepultamentos',
  templateUrl: './list-sepultamentos.component.html',
  styleUrls: ['./list-sepultamentos.component.css']
})
export class ListSepultamentosComponent implements OnInit {

  Filter:boolean = true

  colunasName=[{name:"Codigo"}, {name:"Nome"}, {name:"CPF"},{name:"Nascimento"},{name:"Sepultamento"},{name:"Cemiterio"}]

  recebeFilter(filterComponent: boolean) {
    this.Filter = filterComponent;
  }

  constructor() { }

  ngOnInit(): void {
  }



}
