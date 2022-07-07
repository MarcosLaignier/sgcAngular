import { Component, Input, OnInit } from '@angular/core';
import { modelTable } from 'src/app/models/table-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

/*   @Input() colunasTable:modelTable | null=null; */
 @Input() colunasTable!:Array<{name:String}>
 

  ngOnInit(): void {
  
  }

}
