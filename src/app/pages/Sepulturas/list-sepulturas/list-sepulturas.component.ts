import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list-sepulturas',
  templateUrl: './list-sepulturas.component.html',
  styleUrls: ['./list-sepulturas.component.css']
})
export class ListSepulturasComponent implements OnInit {
  Filter:boolean = true;
  colunasName =[
    {name:'Codigo'},{name:'Descricao'},{name:'Cemiterio'}
  ]

  filterVisible(filterComponent:boolean){
    this.Filter = filterComponent;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
