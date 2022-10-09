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
  codCliente: number = 1;

  config:ConfigModel={
    codcliente:0,
    sgcmunicipio:'',
    sgcpathlogo:'',
    sgcpathimg:''
  }

  ngOnInit(): void {
    this.findNameMunicipio()
  }

  findNameMunicipio() {
    return this.configuracoesService.findNomeMunicipio().subscribe(
      data => {
        this.dados = data;
        this.nameMunicipio = data[0].sgcmunicipio
      }
    )
  }

  alterNameMunicipio() {
    this.config.codcliente=this.codCliente;
    this.config.sgcmunicipio=this.nameMunicipio;
    console.log(this.config)
    return this.configuracoesService.alterNomeMunicipio(this.codCliente, this.config).subscribe()
  }


}
