import {Component, OnInit} from '@angular/core';
import {CemiteriosService} from "../service-cemiterios/cemiterios.service";
import {cemiterioModel} from "../../../models/cemiterio-model";
import {ActivatedRoute} from "@angular/router";
import {HttpStatusCode} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cad-cemiterio',
  templateUrl: './cad-cemiterio.component.html',
  styleUrls: ['./cad-cemiterio.component.css']
})
export class CadCemiterioComponent implements OnInit {

  constructor(
    private cemiteriosService: CemiteriosService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

    this.idUrl = 0

  }

  ngOnInit(): void {
    this.recebeIdUrl()
    // this.buscaCodCemiterio()
    this.buscaEstadosBr()

  }

  form: FormGroup = this.formBuilder.group({
    undcodigo: [0],
    undnome: ['', [Validators.required]],
    undendereco: ['', [Validators.required]],
    undnumero: [0, [Validators.required]],
    undcidade: ['', [Validators.required]],
    undestado: ['', [Validators.required]],
    undresponsavel: ['', [Validators.required]],
    status: [true, [Validators.required]]

  })

  infoStatus: HttpStatusCode | undefined;
  idUrl: number = 0;
  clickSalvar: boolean = false;
  msgError: String = '';

  codigoCemiterio: number = 0;
  nameCemiterio: String = '';
  enderecoCemiterio: String = '';
  numeroCemiterio: number = 0;
  cidadeCemiterio: String = '';
  estadoCemiterio: String = '';
  responsavelCemiterio: String = '';
  estados: any;
  statusCemiterio: boolean = true;

  cemiterioInserido: cemiterioModel = {
    undcodigo: 0,
    undnome: '',
    undendereco: '',
    undnumero: 0,
    undcidade: '',
    undestado: '',
    undresponsavel: '',
    status: true
  }

  insertCemiterio() {
    let novoCemiterio = new cemiterioModel(this.form.value)
    novoCemiterio.undcodigo = 0;
    console.log(novoCemiterio)
    return this.cemiteriosService.insertCemiterio(novoCemiterio).subscribe(
      response => {
        if (response.status == 201) {
          this.infoStatus = HttpStatusCode.Ok;
          this.findCodByName()
        } else {
          this.infoStatus = HttpStatusCode.InternalServerError
        }
      },
      error => {
        this.infoStatus = error.error.status
        if (error.error.message.indexOf('unique')) {
          this.msgError = `Nome: ${this.nameCemiterio} ja utilizado`
        } else {
          this.msgError = error.error.message
        }
      }
    );
  }

  deleteCemiterio() {
    return this.cemiteriosService.deleteCemiterio(this.idUrl).subscribe(
      response => {
        if (response.status == 200) {
          this.infoStatus = HttpStatusCode.Accepted;
          setTimeout(this.backWindow, 1000)
        } else {
          this.infoStatus = HttpStatusCode.InternalServerError
        }
      },
      error => {
        this.infoStatus = error.error.status
        this.msgError = error.error.message
      }
    )
      ;
  }


  recebeIdUrl() {
    this.route.params.subscribe(params => this.idUrl = params['id'])
    this.codigoCemiterio = this.idUrl;
    this.populaCadId()
  }

  populaCadId() {
    this.cemiteriosService.findById(this.idUrl).pipe().subscribe(
      data => {
        this.nameCemiterio = data.undnome;
        this.enderecoCemiterio = data.undendereco
        this.numeroCemiterio = data.undnumero
        this.cidadeCemiterio = data.undcidade
        this.estadoCemiterio = data.undestado
        this.responsavelCemiterio = data.undresponsavel
        this.statusCemiterio = data.status
      }
    )
  }

  alterCemiterio() {
    let Cemiterio = new cemiterioModel(this.form.value)
    this.cemiteriosService.putCemiterio(this.idUrl, Cemiterio).pipe().subscribe(
      response => {
        if (response.status == 200) {
          this.infoStatus = HttpStatusCode.Ok;
          this.findCodByName()
        } else {
          this.infoStatus = HttpStatusCode.InternalServerError
        }
      }
    )
  }


  salvarBtnF() {
    this.clickSalvar = true;
    if (this.form.valid == true) {
      if (this.idUrl == undefined || this.idUrl == 0) {
        this.insertCemiterio();

      } else {
        this.alterCemiterio()
      }
    } else {
      this.infoStatus = HttpStatusCode.InternalServerError
    }
  }

  salvarFecharBtnF() {
    this.clickSalvar = true;
    if (this.form.valid == true) {
      if (this.idUrl == undefined || this.idUrl == 0) {
        this.insertCemiterio();
        setTimeout(this.backWindow, 700)
      } else {
        this.alterCemiterio()
        this.backWindow()

      }
    } else {
      this.infoStatus = HttpStatusCode.InternalServerError
    }
  }

  findCodByName() {
    this.cemiteriosService.getCemiteriosNome(this.nameCemiterio).subscribe(
      data => {
        this.codigoCemiterio = data.undcodigo
      }
    )
  }


  buscaEstadosBr() {
    return this.cemiteriosService.getEstadosBrasil().subscribe(
      dados => {
        this.estados = dados

      }
    )

  }

  statusBtn() {
    this.statusCemiterio = !this.statusCemiterio;
  }


  backWindow() {
    window.history.back()
  }

}
