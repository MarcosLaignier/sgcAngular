import { Component, OnInit } from '@angular/core';
import {JasperService} from "../../../../Services/Jasper/jasper.service";

@Component({
  selector: 'app-listagem-funerarias',
  templateUrl: './listagem-funerarias.component.html',
  styleUrls: ['./listagem-funerarias.component.css']
})
export class ListagemFunerariasComponent implements OnInit {

  nameRel:String='ListagemFunerariasAnalitico'
  geraNovaAba:boolean=true
  options:String=''
  filter:String=''

  constructor(private jasperService:JasperService) { }

  ngOnInit(): void {
  }

  verificaOptions(){
    if (this.geraNovaAba == true){
      this.options='s'
    }else {
      this.options='n'
    }
  }

  geraRelatorio(){
    this.verificaOptions()
    return this.jasperService.gerarRelatorio(this.nameRel,this.options,this.filter)
  }

}
