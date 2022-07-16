import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-falecidos',
  templateUrl: './cad-falecidos.component.html',
  styleUrls: ['./cad-falecidos.component.css']
})
export class CadFalecidosComponent implements OnInit {

  dadosGerais:boolean=true
  docFalecido:boolean=false
  causaMortis:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  activeDadosGerais(){
    this.dadosGerais = true
    this.causaMortis = false
    this.docFalecido = false
  }

  activeDoc(){
    this.docFalecido = true
    this.dadosGerais = false
    this.causaMortis = false
  }

  activeCausa(){
    this.docFalecido = false
    this.dadosGerais = false
    this.causaMortis = true
  }

}
