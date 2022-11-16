import {Component, OnInit,LOCALE_ID} from '@angular/core';
import {PessoaService} from "../Service/pessoa.service";
import {ActivatedRoute} from "@angular/router";
import {pessoaModel} from "../Model/pessoaModel";
import {HttpStatusCode} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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




  idUrl: number = 0;
  infoStatus: HttpStatusCode | undefined
  clicaSalvar: boolean = false;
  msgError:String = '';

 form:FormGroup = this.formBuilder.group({
    falcodigo: [0],
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

  constructor(private pessoaService: PessoaService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.pessoaById()
    this.recebeIdUrl()
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
    if (this.form.valid) {
      let novaPessoa = new pessoaModel(this.form.value)
      return this.pessoaService.includePessoa(novaPessoa).subscribe(
        response => {
          console.log(response.status)
          if (response.status == 201) {
            this.infoStatus = HttpStatusCode.Ok
          } else {
            this.infoStatus = HttpStatusCode.InternalServerError
          }
        },
        error =>{
          this.infoStatus = error.error.status
          if (error.error.message.indexOf('unique') ){
            this.msgError=`CPF: ${this.cpfFal} ja utilizado`
          }else{
            this.msgError=error.error.message
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
      let Pessoa = new pessoaModel(this.form.value)
      this.pessoaService.alterPessoa(this.codFal, Pessoa).subscribe(
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
        if (response.status == 202) {
          this.infoStatus = HttpStatusCode.Accepted
          setTimeout(this.backWindow, 1000)
        } else {
          this.infoStatus = HttpStatusCode.InternalServerError
        }
      },
      error =>{
        this.infoStatus = error.error.status
        this.msgError=error.error.message
      }
    )
  }

  recebeIdUrl() {
    this.route.params.subscribe(params => this.idUrl = params['id'])
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
