import {Component, OnInit} from '@angular/core';
import {SepulturaServiceService} from "../services/sepultura-service.service";
import {ActivatedRoute} from "@angular/router";
import {sepulturaModel} from "../sepulturaModel";
import {HttpStatusCode} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {cemiterioModel} from "../../../models/cemiterio-model";


@Component({
  selector: 'app-cad-sepulturas',
  templateUrl: './cad-sepulturas.component.html',
  styleUrls: ['./cad-sepulturas.component.css']
})
export class CadSepulturasComponent implements OnInit {

  constructor(private sepulturaService: SepulturaServiceService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder
  ) {
  }

  form = this.formBuilder.group({
    codSepultura: [],
    descSepultura: ['', [Validators.required]],
    nomeCemiterio: ['', [Validators.required]]
  })

  codSep: any;
  descSep: String = '';
  cemiterioSep: String = '';
  cemiterioInserido: cemiterioModel = new cemiterioModel;
  idRoute: number = 0;
  dadosCemiterio:cemiterioModel[]=[];

  sepulturaInserida: sepulturaModel = {
    sepcodigo: 0,
    sepdescricao: '',
    sepcemiterio: '',
    cemiterio:this.cemiterioInserido
  }
  infoStatus: HttpStatusCode | undefined;
  clicaSalvar: boolean = false;
  msgError:String='';

  ngOnInit(): void {
    this.getById()
    this.getNameCemiterios()
  }

  getById() {
    this.route.params.subscribe(params => this.idRoute = params['id'])
    this.sepulturaService.getByIdSepultura(this.idRoute).subscribe(data => {
      this.codSep = data.sepcodigo;
      this.descSep = data.sepdescricao;
      this.cemiterioSep = data.sepcemiterio
    })

  }

  getByDescricao(){
    return this.sepulturaService.getByDescricao(this.descSep).subscribe(
      data =>{
        this.codSep = data.sepcodigo
      }
    )
  }


  insertSep() {
    if (this.form.valid) {
      this.sepulturaInserida.sepdescricao = this.descSep;
      this.sepulturaInserida.sepcemiterio = this.cemiterioSep;
      this.sepulturaInserida.cemiterio=this.cemiterioInserido;
      return this.sepulturaService.insertSepultura(this.sepulturaInserida).subscribe(
        response => {
          if (response.status == 200) {
            this.infoStatus = HttpStatusCode.Ok;
            this.getByDescricao();

          } else {
            this.infoStatus = HttpStatusCode.InternalServerError
          }
        },
        error =>{
          this.infoStatus = error.error.status
          if (error.error.message.indexOf('unique') ){
            this.msgError=`Sepultura: ${this.descSep} ja utilizado, Impossivel Nova Inclusão!`
          }else{
            this.msgError=error.error.message
          }
        }
      )
    } else {
      return this.infoStatus = HttpStatusCode.InternalServerError
    }
  }


  alteraSep() {
    if (this.form.valid) {
      this.sepulturaInserida.sepdescricao = this.descSep;
      this.sepulturaInserida.sepcemiterio = this.cemiterioSep;
      this.sepulturaInserida.cemiterio=this.cemiterioInserido;
      return this.sepulturaService.alteraSepultura(this.codSep, this.sepulturaInserida).subscribe(
        response => {
          if (response.status == 200) {
            this.infoStatus = HttpStatusCode.Ok
            this.getByDescricao();

          } else {
            this.infoStatus = HttpStatusCode.InternalServerError
          }
        }
      )
    } else {
      return this.infoStatus = HttpStatusCode.InternalServerError

    }
  }

  deleteSep() {
    return this.sepulturaService.deleteSepulturas(this.codSep).subscribe(
      response => {
        if (response.status == 200) {
          this.infoStatus = HttpStatusCode.Accepted
          setTimeout(this.backWindow, 1000)
        }
      },
      error =>{
        this.infoStatus = error.error.status
        this.msgError=error.error.message
      }
    );
  }

  getNameCemiterios() {
    return this.sepulturaService.getCemiterios().subscribe(
      data => {
        this.dadosCemiterio=data
      }
    )
  }

  getCemiterioSelecionado() {
    return this.sepulturaService.getCemiteriosNome(this.cemiterioSep).subscribe(
      data => {
        this.cemiterioInserido=data
      }
    )
  }


  salvarBtn() {
    this.clicaSalvar = true
    if (this.idRoute == undefined || this.idRoute == 0) {
      this.insertSep()
    } else {
      this.alteraSep()
    }
  }

  salvarFecharBtn() {
    this.clicaSalvar = true
    if (this.idRoute == undefined || this.idRoute == 0) {
      this.insertSep()
      if(this.form.valid){
        setTimeout(this.backWindow,500)
      }
    } else {
      this.alteraSep()
      if(this.form.valid){
        setTimeout(this.backWindow,500)
      }
    }
  }

  backWindow() {
    window.history.back();
  }


}
