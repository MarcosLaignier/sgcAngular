import {Component, Injectable, OnInit} from '@angular/core';
import {FunerariaService} from "../Services/funeraria.service";
import {ActivatedRoute} from "@angular/router";
import {funerariaModel} from "../funerariaModel";
import {HttpStatusCode} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {cemiterioModel} from "../../../models/cemiterio-model";

@Component({
  selector: 'app-cad-funerarias',
  templateUrl: './cad-funerarias.component.html',
  styleUrls: ['./cad-funerarias.component.css']
})
@Injectable()
export class CadFunerariasComponent implements OnInit {

  idUrl: number = 0;
  codFun: any;
  nameFun: String = '';
  cidadeFun: String = '';
  enderecoFun: String = '';
  numeroFun: any;

  infoStatus: HttpStatusCode | undefined;
  clicaSalvar: boolean = false;
  msgError:String='';
  // funeraria: funerariaModel = {
  //   funcodigo: 0,
  //   fundescricao: '',
  //   funendereco: '',
  //   funcidade: '',
  //   funnumero: 0
  //
  // };

  constructor(private funerariaService: FunerariaService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder
  ) {

  }
form:FormGroup = this.formBuilder.group({
    funcodigo: [0],
    fundescricao:['',[Validators.required]],
    funendereco: ['', [Validators.required]],
    funcidade: ['', [Validators.required]],
    funnumero: ['', [Validators.required]]

  })



  ngOnInit(): void {
    this.getById()
  }

  public getById() {

    this.route.params.subscribe(params => this.idUrl = params['id'])
    return this.funerariaService.listById(this.idUrl).subscribe(
      data => {
        this.codFun = data.funcodigo
        this.nameFun = data.fundescricao
        this.enderecoFun = data.funendereco
        this.cidadeFun = data.funcidade
        this.numeroFun = data.funnumero
      }
    )
  }

  public insertFun() {
    console.log(this.form.valid)
    if (this.form.valid) {
      let novaFuneraria = new funerariaModel(this.form.value)
      return this.funerariaService.insertFun(novaFuneraria).subscribe(
        response => {
          if (response.status == 201) {
            this.infoStatus = HttpStatusCode.Ok
          } else (
            this.infoStatus = HttpStatusCode.InternalServerError
          )
        },
        error =>{
          this.infoStatus = error.error.status
          if (error.error.message.indexOf('unique') ){
            this.msgError=`Nome: ${this.nameFun} ja utilizado`
          }else{
            this.msgError=error.error.message
          }
        }
      )
    }else {
      return this.infoStatus = HttpStatusCode.InternalServerError

    }
  }


  public alterFun() {
    if (this.form.valid) {
      let funeraria = new funerariaModel(this.form.value)
      return this.funerariaService.alteraFun(funeraria.funcodigo, funeraria).subscribe(
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

  public deleteFun() {
    return this.funerariaService.deleteFun(this.codFun).subscribe(
      response => {
        if (response.status == 202) {
          this.infoStatus = HttpStatusCode.Accepted
          setTimeout(this.backWindow, 1000)
        } else (
          this.infoStatus = HttpStatusCode.InternalServerError
        )
      },
      error => {
        this.infoStatus = error.error.status
        this.msgError=error.error.message
      }
    )
  }

  public btnSalvar() {
    this.clicaSalvar = true
    if (this.idUrl == undefined || this.idUrl == 0) {
      this.insertFun()
    } else {
      this.alterFun()
    }
  }

  public btnSalvarFechar() {
    this.clicaSalvar = true

    if (this.idUrl == undefined || this.idUrl == 0) {
      this.insertFun()
      if (this.form.valid) {
        setTimeout(this.backWindow, 500)
      }
    } else {
      this.alterFun()
      if (this.form.valid) {

        setTimeout(this.backWindow, 500)
      }
    }
  }


  backWindow() {
    window.history.back()
  }

}
