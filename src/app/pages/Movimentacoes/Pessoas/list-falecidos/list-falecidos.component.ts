import { Component, OnInit } from '@angular/core';
import {PessoaService} from "../Service/pessoa.service";
import {pessoaModel} from "../Model/pessoaModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-falecidos',
  templateUrl: './list-falecidos.component.html',
  styleUrls: ['./list-falecidos.component.css']
})
export class ListFalecidosComponent implements OnInit {

  Filter:boolean = true;
  colunasName = [
    {name:'Codigo'}, {name:'Nome'}, {name:'CPF'},{name: 'Sexo'} ,{name:'Nascimento'},{name:'Falecimento'}
]
  dadosCols:pessoaModel[] =[];
  idUrl:number | undefined;

  constructor(private pessoaService:PessoaService,
              private route:Router
  ) { }

  ngOnInit(): void {
  }

  visibleFilter(filterComponent:boolean){
    this.Filter = filterComponent
  }

  public getPessoa(){
    return this.pessoaService.getPessoa().subscribe(
      data =>{
        this.dadosCols = data
      }
    )

  }

  public retornaIdUrl(idLinha:number){
    this.idUrl = idLinha
    return this.route.navigate([`/cadfalecidos/${this.idUrl}`])
  }

}
