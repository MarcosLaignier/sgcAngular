import {Component, OnInit} from '@angular/core';
import {SepultamentoService} from "../Service/sepultamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Form, FormBuilder, Validators} from "@angular/forms";
import {PessoaService} from "../../Pessoas/Service/pessoa.service";
import {pessoaModel} from "../../Pessoas/Model/pessoaModel";
import {SepultamentoModel} from "../Model/sepultamentoModel";
import {HttpStatusCode} from "@angular/common/http";
import {CemiteriosService} from "../../../Cemiterios/service-cemiterios/cemiterios.service";
import {cemiterioModel} from "../../../../models/cemiterio-model";
import {FunerariaService} from "../../../Funerarias/Services/funeraria.service";
import {funerariaModel} from "../../../Funerarias/funerariaModel";


@Component({
  selector: 'app-cad-sepultamentos',
  templateUrl: './cad-sepultamentos.component.html',
  styleUrls: ['./cad-sepultamentos.component.css']
})
export class CadSepultamentosComponent implements OnInit {

  idUrl: number = 1
  infoStatus: HttpStatusCode | undefined;
  clicaSalvar: boolean = false;
  msgError:String = '';

  form = this.formBuilder.group({
    sepulCodigo: [],
    sepulFalecido: ['', [Validators.required]],
    sepulCPF: ['', [Validators.required]],
    sepulData: [Date, [Validators.required]],
    sepulFale: [Date, [Validators.required]],
    sepulFuneraria: [''],
    sepulCemiterio: ['', [Validators.required]],
    sepulSepultura: ['', [Validators.required]]
  })

  sepulCodigo: any;
  sepulFalecido: String = '';
  sepulCPF: String = '';
  sepulData: Date = new Date();
  sepulFale: Date = new Date();
  sepulFuneraria: String = '';
  sepulCemiterio: String = '';
  sepulSepultura: String = '';
  pessoaF: pessoaModel = new pessoaModel
  cemiterio: cemiterioModel = new cemiterioModel
  funeraria: funerariaModel = new funerariaModel

  namesPessoas: pessoaModel[] = [];


  funNames: String[] = []
  cemNames: String[] = []


  sepultamento: SepultamentoModel = {
    sepulcodigo: 0,
    sepulfalecido: '',
    sepulcpffal: '',
    sepulfuneraria: '',
    sepulcemiterio: '',
    sepulsepultura: '',
    sepdatasepultamento: new Date('01/01/1900'),
    sepdatafalecimento: new Date('01/01/1900'),
    pessoa: this.pessoaF,
    cemiterio: this.cemiterio,
    funeraria: this.funeraria
  }

  constructor(private sepultamentoService: SepultamentoService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private pessoaService: PessoaService,
              private cemiterioService: CemiteriosService,
              private funerariaService: FunerariaService
              // private router: Router,
  ) {

  }


  ngOnInit(): void {
    this.populaFuneraria()
    this.populaCemiterio()
    this.getById()

  }

  getById() {
    this.route.params.subscribe(params => this.idUrl = params['id'])
    return this.sepultamentoService.findById(this.idUrl).subscribe(
      data => {
        this.sepulCodigo = data.sepulcodigo;
        this.sepulFalecido = data.sepulfalecido;
        this.sepulCPF = data.sepulcpffal;
        this.sepulData = data.sepdatasepultamento;
        this.sepulFale = data.sepdatafalecimento;
        this.sepulFuneraria = data.sepulfuneraria;
        this.sepulCemiterio = data.sepulcemiterio;
        this.sepulSepultura = data.sepulsepultura;
      }
    );
  }

  getDadosPessoaNome() {
    return new Promise((resolve) => this.pessoaService.ByNome(this.sepulFalecido).subscribe(
      data => {
        this.pessoaF = data;
        console.log(this.pessoaF);
        resolve(
          {
            success: true
          }
        )

      }
    ))
  }

  getDadosCemiterioNome() {
    return new Promise((resolve) => {
      this.cemiterioService.getCemiteriosNome(this.sepulCemiterio).subscribe(
        data => {
          this.cemiterio = data;
          resolve({
            success:true
          })
        }
      )
    })
  }

  getDadosFunerariaNome() {
    return new Promise((resolve)=>{this.funerariaService.findByName(this.sepulFuneraria).subscribe(
      data => {
        this.funeraria = data;
        resolve({
          success:true
        })
      }
    )})
  }


  insertSepul(response: any) {

    this.clicaSalvar = true
    if (this.form.valid) {
      this.sepultamento.sepulfalecido = this.sepulFalecido;
      this.sepultamento.sepulcpffal = this.sepulCPF;
      this.sepultamento.sepdatasepultamento = this.sepulData;
      this.sepultamento.sepdatafalecimento = this.sepulFale;
      this.sepultamento.sepulcemiterio = this.sepulCemiterio;
      this.sepultamento.sepulfuneraria = this.sepulFuneraria
      this.sepultamento.sepulsepultura = this.sepulSepultura;
      this.sepultamento.pessoa = this.pessoaF
      this.sepultamento.cemiterio = this.cemiterio
      this.sepultamento.funeraria = this.funeraria
      console.log(this.sepultamento)
      return new Promise(() => {
          if (response.success) {
            this.sepultamentoService.insertSepultamento(this.sepultamento).subscribe(
              response => {
                if (response.status == 200) {
                  this.infoStatus = HttpStatusCode.Ok
                } else {
                  this.infoStatus = HttpStatusCode.InternalServerError
                }
              },
              error =>{
                this.infoStatus = error.error.status
                if (error.error.message.indexOf('unique') ){
                  this.msgError=`CPF: ${this.sepulCPF} ja utilizado, Impossivel Nova Inclusão!`
                }else{
                  this.msgError=error.error.message
                }
              }
            )
          }
        }
      )
    } else {
      return this.infoStatus = HttpStatusCode.InternalServerError

    }


  }

  alteraSepul() {

    if (this.form.valid) {
      this.sepultamento.sepulfalecido = this.sepulFalecido;
      this.sepultamento.sepulcpffal = this.sepulCPF;
      this.sepultamento.sepdatasepultamento = this.sepulData;
      this.sepultamento.sepdatafalecimento = this.sepulFale;
      this.sepultamento.sepulcemiterio = this.sepulCemiterio;
      this.sepultamento.sepulfuneraria = this.sepulFuneraria
      this.sepultamento.sepulsepultura = this.sepulSepultura;
      this.sepultamento.pessoa = this.pessoaF
      this.sepultamento.cemiterio = this.cemiterio
      this.sepultamento.funeraria = this.funeraria

      return this.sepultamentoService.alteraSepultamento(this.sepulCodigo, this.sepultamento).subscribe(
        response => {
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

  excludeSepul() {
    return this.sepultamentoService.excludeSepultamento(this.sepulCodigo).subscribe(
      response => {
        console.log(response.status)
        if (response.status == 200) {
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


  populaFuneraria() {
    return this.sepultamentoService.findNameFun().subscribe(
      data => {
        this.funNames = data
      }
    )
  }

  populaCemiterio() {
    return this.sepultamentoService.findNameCem().subscribe(
      data => {
        this.cemNames = data
      }
    )
  }

  dadosFalecidos() {

    return this.pessoaService.getByNome(this.sepulFalecido).subscribe(
      data => {
        this.namesPessoas = data
      }
    )
  }

  selectFalecido(id: number) {
    this.namesPessoas = [];
    return this.pessoaService.getPessoaId(id).subscribe(
      data => {
        this.sepulFalecido = data.falnome
        this.sepulCPF = data.falcpf
        this.sepulFale = data.falfalecimento
      }
    )
  }

  lastCod() {
    return this.sepultamentoService.findLastCod().subscribe(
      data => {
        if (this.sepulCodigo == 0 || this.sepulCodigo == undefined) {
          this.sepulCodigo = data + 1;
        } else {
          this.sepulCodigo = this.sepulCodigo
        }
      }
    )
  }


  async salvarBtn() {
    if (this.form.valid) {

      var resultBuscaPessoa = await this.getDadosPessoaNome()
      var resultBuscaCemiterio = await this.getDadosCemiterioNome()
      var resultBuscaFuneraria = await this.getDadosFunerariaNome()

    }
    if (this.idUrl == 0 || this.idUrl == undefined) {
      await this.insertSepul(resultBuscaPessoa)
    } else {
      this.alteraSepul()
    }

  }


  async salvarFecharBtn() {
    if (this.form.valid) {
      var resultBuscaPessoa = await this.getDadosPessoaNome()
      var resultBuscaCemiterio = await this.getDadosCemiterioNome()
      var resultBuscaFuneraria = await this.getDadosFunerariaNome()

    }
    if (this.idUrl == 0 || this.idUrl == undefined) {
      await this.insertSepul(resultBuscaPessoa)
      if (this.form.valid) {
        setTimeout(this.backWindow, 1000)
      }
    } else {
      this.alteraSepul()
      if (this.form.valid) {
        setTimeout(this.backWindow, 1000)
      }
    }
  }

  backWindow() {
    window.history.back()
  }
}
