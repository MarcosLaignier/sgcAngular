import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { faChurch, faUserLarge, faPersonDigging, faFileLines, faGear } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  /* Icones  */
  i_Cemiterio = faChurch;
  i_Person = faUserLarge;
  i_Sepul = faPersonDigging;
  i_Relatorio = faFileLines;
  i_Config = faGear

  bckColor = '#efefef';
  submenuColor='#e8e8e8'

  urlLogo = '/assets/Images/LogoMunicipio.png';
  idButton: String = '';
  openSideSubMenu: Boolean = false;
  menuCadastrosIniciais: Boolean = false;
  menuCadComum: Boolean = false;
  menuCadMovimentacoes: Boolean = false;
  menuRelatorio: Boolean = false;
  menuConfig: Boolean = false;

  @Input() clickActive: Boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  openAside() {
    this.openSideSubMenu = !this.openSideSubMenu
  }

  openSubMenu() {
    if (this.idButton == 'CadInicial') {
      this.clearIdMenu()
      this.menuCadastrosIniciais = true
    } else if (this.idButton == 'CadComum') {
      this.clearIdMenu()
      this.menuCadComum = true
    } else if (this.idButton == 'CadMovimentacoes') {
      this.clearIdMenu()
      this.menuCadMovimentacoes = true
    } else if (this.idButton == 'Relatorios') {
      this.clearIdMenu()
      this.menuRelatorio = true
    } else if (this.idButton == 'Config') {
      this.clearIdMenu()
      this.menuConfig = true
    }

  }

  clearIdMenu() {
    this.menuCadastrosIniciais = false;
    this.menuCadComum = false;
    this.menuCadMovimentacoes = false;
    this.menuRelatorio = false;
    this.menuConfig = false
  }


}
