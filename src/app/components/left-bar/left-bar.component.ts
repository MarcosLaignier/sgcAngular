import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {
  faChurch,
  faUserLarge,
  faPersonDigging,
  faFileLines,
  faGear,
  faWindowMaximize
} from '@fortawesome/free-solid-svg-icons';
import {ConfiguracoesService} from "../../pages/Configuracoes/service/configuracoes.service";


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
  i_SubMenu = faWindowMaximize

  bckColor = '#efefef';
  submenuColor = '#e8e8e8'

  urlLogo = '/assets/Images/LogoMunicipio.png';
  urlLogoSgc = '/assets/Images/Logo_SGC_S_Fundo.png';

  idButton: String = '';
  openSideSubMenu: Boolean = false;
  menuCadastrosIniciais: Boolean = false;
  menuCadComum: Boolean = false;
  menuCadMovimentacoes: Boolean = false;
  menuConfig: Boolean = false;
  teste: String = '';
  nameMunicipio: String = '';

  @Input() clickActive: Boolean = false;

  constructor(private configService: ConfiguracoesService) {

  }

  ngOnInit(): void {
    this.getNameMunicipio()

  }

  openAside() {
    this.getNameMunicipio()
    this.openSideSubMenu = !this.openSideSubMenu


  }

  openSubMenu() {

    if (this.idButton == 'CadInicial') {
      this.clearIdMenu()
      this.menuCadastrosIniciais = !this.menuCadastrosIniciais

    } else if (this.idButton == 'CadComum') {
      this.clearIdMenu()
      this.menuCadComum = !this.menuCadComum

    } else if (this.idButton == 'CadMovimentacoes') {
      this.clearIdMenu()
      this.menuCadMovimentacoes = true
    } else if (this.idButton == 'Config') {
      this.clearIdMenu()
      this.menuConfig = true


    }


  }

  clearIdMenu() {
    this.menuCadastrosIniciais = false;
    this.menuCadComum = false;
    this.menuCadMovimentacoes = false;
    this.menuConfig = false
  }

  tt() {
    this.teste = this.idButton

  }

  getNameMunicipio() {
    return this.configService.findNomeMunicipio().subscribe(
      data => {
        this.nameMunicipio = data[0].sgcmunicipio;
      }
    )
  }


}
