import {Component, OnInit} from '@angular/core';
import {ConfiguracoesService} from "../service/configuracoes.service";
import {ConfigModel} from "../Model/configModel";

@Component({
  selector: 'app-configuracoes-gerais',
  templateUrl: './configuracoes-gerais.component.html',
  styleUrls: ['./configuracoes-gerais.component.css']
})
export class ConfiguracoesGeraisComponent implements OnInit {

  constructor(private configuracoesService: ConfiguracoesService) {
  }

  dados: ConfigModel[] = [];
  brasaoMunicipio: String = '';
  imgPrincipal: String = '';
  nameMunicipio: String = '';
  codCliente: number = 1914;
  tipoMunicipio:String='';

  dadosMun:boolean=true;
  imgMun:boolean=false;

  config:ConfigModel={
    codcliente:0,
    sgcmunicipio:'',
    sgcpathlogo:'',
    sgcpathimg:'',
    sgctipomunicipio:''
  }

  ngOnInit(): void {
    this.findNameMunicipio()
  }

  findNameMunicipio() {
    return this.configuracoesService.findNomeMunicipio().subscribe(
      data => {
        this.dados = data;
        this.nameMunicipio = data[0].sgcmunicipio
        this.tipoMunicipio = data[0].sgctipomunicipio
        console.log(this.tipoMunicipio)
      }
    )
  }

  alterNameMunicipio() {
    this.config.codcliente=this.codCliente;
    this.config.sgcmunicipio=this.nameMunicipio;
    this.config.sgctipomunicipio=this.tipoMunicipio;
    console.log(this.config)
    return this.configuracoesService.alterNomeMunicipio(this.codCliente, this.config).subscribe()
  }

alterTelas(){
    this.dadosMun=!this.dadosMun;
    this.imgMun=!this.imgMun;
  console.log(this.tipoMunicipio)
  }
}
