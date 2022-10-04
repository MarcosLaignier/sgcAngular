import {Component, OnInit} from '@angular/core';
import {SepultamentoService} from "../Service/sepultamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {PessoaService} from "../../Pessoas/Service/pessoa.service";
import {pessoaModel} from "../../Pessoas/Model/pessoaModel";
import {SepultamentoModel} from "../Model/sepultamentoModel";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-cad-sepultamentos',
  templateUrl: './cad-sepultamentos.component.html',
  styleUrls: ['./cad-sepultamentos.component.css']
})
export class CadSepultamentosComponent implements OnInit {

  idUrl: number = 1
  infoStatus:HttpStatusCode | undefined;

  form = this.formBuilder.group({
    sepulCodigo: [0, [Validators.required]],
    sepulFalecido: ['', [Validators.required]],
    sepulCPF: ['', [Validators.required]],
    sepulData: [Date, [Validators.required]],
    sepulFale: [Date, [Validators.required]],
    sepulFuneraria: ['', [Validators.required]],
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
    sepdatafalecimento: new Date('01/01/1900')
  }

  constructor(private sepultamentoService: SepultamentoService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private pessoaService: PessoaService,
              private router: Router
  ) {

  }


  ngOnInit(): void {
    this.getById()
    this.populaFuneraria()
    this.populaCemiterio()
    this.lastCod()
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

  insertSepul() {
    this.sepultamento.sepulcodigo = this.sepulCodigo;
    this.sepultamento.sepulfalecido = this.sepulFalecido;
    this.sepultamento.sepulcpffal = this.sepulCPF;
    this.sepultamento.sepdatasepultamento = this.sepulData;
    this.sepultamento.sepdatafalecimento = this.sepulFale;
    this.sepultamento.sepulcemiterio = this.sepulCemiterio;
    this.sepultamento.sepulfuneraria = this.sepulFuneraria
    this.sepultamento.sepulsepultura = this.sepulSepultura;
    return this.sepultamentoService.insertSepultamento(this.sepultamento).subscribe(
      response =>{
        if(response.status == 200){
          this.infoStatus = HttpStatusCode.Ok
        }else{
          this.infoStatus = HttpStatusCode.InternalServerError
        }
      }
    )
  }

  alteraSepul(){
    this.sepultamento.sepulcodigo = this.sepulCodigo;
    this.sepultamento.sepulfalecido = this.sepulFalecido;
    this.sepultamento.sepulcpffal = this.sepulCPF;
    this.sepultamento.sepdatasepultamento = this.sepulData;
    this.sepultamento.sepdatafalecimento = this.sepulFale;
    this.sepultamento.sepulcemiterio = this.sepulCemiterio;
    this.sepultamento.sepulfuneraria = this.sepulFuneraria
    this.sepultamento.sepulsepultura = this.sepulSepultura;
    return this.sepultamentoService.alteraSepultamento(this.sepulCodigo,this.sepultamento).subscribe(
      response =>{
        if(response.status == 200){
          this.infoStatus = HttpStatusCode.Ok
        }else{
          this.infoStatus = HttpStatusCode.InternalServerError
        }
      }
    )
  }

  excludeSepul(){
    return this.sepultamentoService.excludeSepultamento(this.sepulCodigo).subscribe(
      response =>{
        if(response.status == 200){
          this.infoStatus = HttpStatusCode.Accepted
          setTimeout(this.backWindow,1000)
        }else{
          this.infoStatus = HttpStatusCode.InternalServerError
        }
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

  salvarBtn(){
    if(this.idUrl == 0 || this.idUrl == undefined){
      this.insertSepul()
    }else{
      this.alteraSepul()
    }
  }
  backWindow(){
    window.history.back()
  }
}
