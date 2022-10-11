import {Component, OnInit} from '@angular/core';
import {PessoaService} from "../Service/pessoa.service";
import {pessoaModel} from "../Model/pessoaModel";
import {Router} from "@angular/router";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-list-falecidos',
  templateUrl: './list-falecidos.component.html',
  styleUrls: ['./list-falecidos.component.css']
})
export class ListFalecidosComponent implements OnInit {

  Filter: boolean = true;
  colunasName = [
    {name: 'Codigo'}, {name: 'Nome'}, {name: 'CPF'}, {name: 'Sexo'}, {name: 'Nascimento'}, {name: 'Falecimento'}
  ]
  dadosCols: pessoaModel[] = [];
  idUrl: number | undefined;

  nomePessoa: String = '';
  sexoPessoa: String = '';
  dateNasc: any;


  constructor(private pessoaService: PessoaService,
              private route: Router
  ) {
  }

  ngOnInit(): void {
    // this.findCustom()
  }

  visibleFilter(filterComponent: boolean) {
    this.Filter = filterComponent
  }

  public getPessoa() {
    return this.pessoaService.getPessoa().subscribe(
      data => {
        this.dadosCols = data
      }
    )

  }

  public retornaIdUrl(idLinha: number) {
    this.idUrl = idLinha
    return this.route.navigate([`/cadfalecidos/${this.idUrl}`])
  }

  findCustom() {

    // let format = 'dd/MM/yyyy';
    // let locale = 'pt-BR';
    // let dataFormatada = formatDate(this.dateNasc, format,locale);
    // let dataformatada = this.dateNasc.split('-').reverse().join('/');
    // let format=new Date(dataformatada);

    return this.pessoaService.filterCustom(this.nomePessoa, this.sexoPessoa,this.dateNasc).subscribe(
      data => {
        this.dadosCols = data
      }
    )
  }

}
