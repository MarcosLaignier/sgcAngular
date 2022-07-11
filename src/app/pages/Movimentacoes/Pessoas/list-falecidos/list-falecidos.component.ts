import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-falecidos',
  templateUrl: './list-falecidos.component.html',
  styleUrls: ['./list-falecidos.component.css']
})
export class ListFalecidosComponent implements OnInit {

  Filter:boolean = true;
  colunasName = [
    {name:'Codigo'}, {name:'Nome'}, {name:'CPF'}, {name:'Nascimento'},{name:'Falecimento'}
]

  constructor() { }

  ngOnInit(): void {
  }

  visibleFilter(filterComponent:boolean){
    this.Filter = filterComponent
  }

}
