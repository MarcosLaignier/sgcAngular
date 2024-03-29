import {Component, OnInit} from '@angular/core';
import {SepultamentoService} from "../Service/sepultamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PessoaService} from "../../Pessoas/Service/pessoa.service";
import {pessoaModel} from "../../Pessoas/Model/pessoaModel";
import {SepultamentoModel} from "../Model/sepultamentoModel";
import {HttpStatusCode} from "@angular/common/http";
import {CemiteriosService} from "../../../Cemiterios/service-cemiterios/cemiterios.service";
import {cemiterioModel} from "../../../../models/cemiterio-model";
import {FunerariaService} from "../../../Funerarias/Services/funeraria.service";
import {funerariaModel} from "../../../Funerarias/funerariaModel";
import {SepulturaServiceService} from "../../../Sepulturas/services/sepultura-service.service";
import {sepulturaModel} from "../../../Sepulturas/sepulturaModel";


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
  dadosSepulturas:sepulturaModel[]=[]

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
              private funerariaService: FunerariaService,
              private sepulturaService:SepulturaServiceService
              // private router: Router,
  ) {

  }
 form:FormGroup = this.formBuilder.group({
   sepulcodigo: [],
   sepulfalecido: ['', [Validators.required]],
   sepulcpffal: ['', [Validators.required]],
   sepdatasepultamento: [Date, [Validators.required]],
   sepdatafalecimento: [Date, [Validators.required]],
   sepulfuneraria: [''],
   sepulcemiterio: ['', [Validators.required]],
   sepulsepultura: ['', [Validators.required]],
   pessoa:[pessoaModel,[Validators.required]],
   cemiterio:[cemiterioModel,[Validators.required]],
   funeraria:[funerariaModel,[Validators.required]]
  })

  ngOnInit(): void {
    this.populaFuneraria()
    this.populaCemiterio()
    this.getById()
    this.getSepulturas()

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
      let novoSepultamento = new SepultamentoModel(this.form.value)
      novoSepultamento.pessoa=this.pessoaF
      novoSepultamento.cemiterio=this.cemiterio
      novoSepultamento.funeraria=this.funeraria
      return new Promise(() => {
          if (response.success) {
            this.sepultamentoService.insertSepultamento(novoSepultamento).subscribe(
              response => {
                if (response.status == 201){
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
      let Sepultamento = new SepultamentoModel(this.form.value)
      Sepultamento.pessoa=this.pessoaF
      Sepultamento.cemiterio=this.cemiterio
      Sepultamento.funeraria=this.funeraria
      return this.sepultamentoService.alteraSepultamento(this.sepulCodigo, Sepultamento).subscribe(
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

  getSepulturas(){
    return this.sepulturaService.getSepulturasByCemiterio(this.sepulCemiterio).subscribe(
      data =>{
        this.dadosSepulturas = data
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
      console.log(this.form.valid)
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
