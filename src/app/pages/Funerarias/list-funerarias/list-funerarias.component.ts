import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-funerarias',
  templateUrl: './list-funerarias.component.html',
  styleUrls: ['./list-funerarias.component.css']
})
export class ListFunerariasComponent implements OnInit {

  colunasName = [
    { name: 'Codigo' }, { name: 'Nome' }, { name: 'Endereco' }, { name: 'Cidade' }
  ]
  filterVisible: string = 'true';
  receberClick(filterComponent: any) {
    this.filterVisible = filterComponent;
    
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
