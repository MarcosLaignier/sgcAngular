import { Component, OnInit } from '@angular/core';
import { modelTable } from 'src/app/models/table-model';

@Component({
  selector: 'app-list-cemiterios',
  templateUrl: './list-cemiterios.component.html',
  styleUrls: ['./list-cemiterios.component.css']
})
export class ListCemiteriosComponent implements OnInit {

  constructor() { }

  Filter: Boolean = true
  colunasName = [
    { name: 'ID' }, { name: 'Nome' }, { name: 'Endereco' }, { name: 'Responsavel' }, { name: 'Ativo' }
  ]

  recebeFilter(filterComponent: boolean) {
    this.Filter = filterComponent;
  }


  ngOnInit(): void {

  }


}
