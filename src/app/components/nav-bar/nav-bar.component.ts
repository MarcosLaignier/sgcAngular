import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUserCircle, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  i_User = faUserCircle
  i_ArrowDown = faAngleDown
  i_Hamburguer = faBars

  active:Boolean = false;
 

  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    this.active=!this.active
  }


}
