import {Component, OnInit,LOCALE_ID} from '@angular/core';
import {PessoaService} from "../Service/pessoa.service";
import {ActivatedRoute} from "@angular/router";
import {pessoaModel} from "../Model/pessoaModel";
import {HttpStatusCode} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-cad-falecidos',
  templateUrl: './cad-falecidos.component.html',
  styleUrls: ['./cad-falecidos.component.css']
})
export class CadFalecidosComponent implements OnInit {

  dadosGerais: boolean = true
  docFalecido: boolean = false
  causaMortis: boolean = false

  codFal: any;
  nomeFal: String = '';
  sexoFal: String = '';
  nascFal: any;
  falecimentoFal: any;
  nacionalidadeFal: String = '';
  cpfFal: String = '';
  medResponsavel: String = '';

  pessoa: pessoaModel = {
    falcodigo: 0,
    falnome: '',
    falsexo: '',
    falnascimento: new Date(),
    falcpf: '',
    falmedresp: '',
    falfalecimento: new Date(),
    falnaturalidade: ''
  }

  form = this.formBuilder.group({
    falcodigo: [0, [Validators.required]],
    falnome: ['', [Validators.required]],
    falsexo: ['', [Validators.required]],
    falnascimento: [Date, [Validators.required]],
    falnaturalidade: ['', [Validators.required]],
    falcpf: ['', [Validators.required]],
    falRG: [''],
    falfalecimento: [Date, [Validators.required]],
    falmedresp: ['', [Validators.required]],
    falCausaMortis: ['']
  })


  idUrl: number = 0;
  infoStatus: HttpStatusCode | undefined
  clicaSalvar: boolean = false;


  constructor(private pessoaService: PessoaService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.pessoaById()
    this.recebeIdUrl()
    this.getLastCod()
  }

  activeDadosGerais() {
    this.dadosGerais = true
    this.causaMortis = false
    this.docFalecido = false
  }

  activeDoc() {
    this.docFalecido = true
    this.dadosGerais = false
    this.causaMortis = false
  }

  activeCausa() {
    this.docFalecido = false
    this.dadosGerais = false
    this.causaMortis = true
  }



  pessoaById() {
    this.recebeIdUrl()
    return this.pessoaService.getPessoaId(this.idUrl).subscribe(
      data => {


        this.codFal = data.falcodigo
        this.nomeFal = data.falnome
        this.sexoFal = data.falsexo
        this.nascFal = data.falnascimento
        this.nacionalidadeFal = data.falnaturalidade
        this.falecimentoFal = data.falfalecimento
        this.cpfFal = data.falcpf
        this.medResponsavel = data.falmedresp
      }
    )
  }

  includePessoa() {
    this.clicaSalvar = true
    console.log(this.form.valid)
    if (this.form.valid) {
      this.pessoa.falcodigo = this.codFal
      this.pessoa.falnome = this.nomeFal
      this.pessoa.falsexo = this.sexoFal
      this.pessoa.falfalecimento = this.falecimentoFal
      this.pessoa.falnaturalidade = this.nacionalidadeFal
      this.pessoa.falnascimento = this.nascFal
      this.pessoa.falcpf = this.cpfFal
      this.pessoa.falmedresp = this.medResponsavel
      return this.pessoaService.includePessoa(this.pessoa).subscribe(
        response => {
          console.log(response.status)
          if (response.status == 200) {
            this.infoStatus = HttpStatusCode.Ok
          } else {
            this.infoStatus = HttpStatusCode.InternalServerError
          }
        }
      )
    } else {
      return this.infoStatus = HttpStatusCode.InternalServerError
    }
  }

  alteraPessoa() {
    this.clicaSalvar = true
    if (this.form.valid) {
      this.pessoa.falcodigo = this.codFal
      this.pessoa.falnome = this.nomeFal
      this.pessoa.falsexo = this.sexoFal
      this.pessoa.falfalecimento = this.falecimentoFal
      this.pessoa.falnaturalidade = this.nacionalidadeFal
      this.pessoa.falnascimento = this.nascFal
      this.pessoa.falcpf = this.cpfFal
      this.pessoa.falmedresp = this.medResponsavel
      this.pessoaService.alterPessoa(this.codFal, this.pessoa).subscribe(
        response => {
          console.log(response.status)
          if (response.status == 200) {
            this.infoStatus = HttpStatusCode.Ok
          } else {
            this.infoStatus = HttpStatusCode.InternalServerError
          }
        }
      )
    } else {
      this.infoStatus = HttpStatusCode.InternalServerError
    }
  }


  deletePessoa() {
    return this.pessoaService.deletePessoa(this.codFal).subscribe(
      response => {
        console.log(response.status)
        if (response.status == 200) {
          this.infoStatus = HttpStatusCode.Accepted
          setTimeout(this.backWindow, 1000)
        } else {
          this.infoStatus = HttpStatusCode.InternalServerError
        }
      }
    )
  }

  recebeIdUrl() {
    this.route.params.subscribe(params => this.idUrl = params['id'])
  }

  getLastCod() {
    return this.pessoaService.getLastCod().subscribe(
      data => {
        if (this.idUrl == 0 || this.idUrl == undefined) {
          this.codFal = data + 1
        } else {
          this.codFal = this.idUrl
        }

      }
    )
  }


  salvarBtn() {
    if (this.idUrl == 0 || this.idUrl == undefined) {
      this.includePessoa()
    } else {
      this.alteraPessoa()
    }
  }

  salvarFecharBtn() {
    if (this.idUrl == 0 || this.idUrl == undefined) {
      this.includePessoa()
      if (this.form.valid) {
        setTimeout(this.backWindow, 1000)

      }
    } else {
      this.alteraPessoa()
      if (this.form.valid) {
        setTimeout(this.backWindow, 1000)

      }
    }


  }

  backWindow() {
    window.history.back()
  }
}
