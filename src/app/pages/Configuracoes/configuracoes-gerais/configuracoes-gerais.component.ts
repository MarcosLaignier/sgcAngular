import { Component, OnInit } from '@angular/core';
import {ConfiguracoesService} from "../service/configuracoes.service";
import {ConfigModel} from "../Model/configModel";

@Component({
  selector: 'app-configuracoes-gerais',
  templateUrl: './configuracoes-gerais.component.html',
  styleUrls: ['./configuracoes-gerais.component.css']
})
export class ConfiguracoesGeraisComponent implements OnInit {

  constructor(private configuracoesService:ConfiguracoesService) { }

  dados:ConfigModel[]=[];
  brasaoMunicipio:String='';
  imgPrincipal:String='';
nameMunicipio:String='';
  ngOnInit(): void {
    this.findNameMunicipio()
  }

  public findNameMunicipio(){
    return this.configuracoesService.findNomeMunicipio().subscribe(
      data =>{
        console.log(data)
        this.dados=data;
        this.nameMunicipio = data[0].sgcmunicipio
        console.log(this.nameMunicipio)

      }
    )
  }

}
