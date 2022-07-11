import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sepulturas',
  templateUrl: './list-sepulturas.component.html',
  styleUrls: ['./list-sepulturas.component.css']
})
export class ListSepulturasComponent implements OnInit {

  colunasName =[
    {name:'Codigo'},{name:'Descricao'},{name:'Cemiterio'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
