import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-visible',
  templateUrl: './filter-visible.component.html',
  styleUrls: ['./filter-visible.component.css']
})
export class FilterVisibleComponent implements OnInit {
  
  Filter: Boolean = true
  
  @Output() FilterE = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  visibleFilter() {
    this.FilterE.emit(this.Filter)
    this.Filter = !this.Filter
  }

}
