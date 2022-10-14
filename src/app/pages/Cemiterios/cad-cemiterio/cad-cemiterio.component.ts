import {Component, OnInit} from '@angular/core';
import {CemiteriosService} from "../service-cemiterios/cemiterios.service";
import {cemiterioModel} from "../../../models/cemiterio-model";
import {ActivatedRoute} from "@angular/router";
import {HttpStatusCode} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {delay, map} from "rxjs";

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
    this.form = this.formBuilder.group({
      cod: [0, [Validators.required]],
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      numero: [0, [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      status:[true,[Validators.required]]

    })
    this.idUrl = 0

  }

  ngOnInit(): void {
    this.recebeIdUrl()
    this.buscaCodCemiterio()
    this.buscaEstadosBr()

  }

  form: FormGroup;
  infoStatus: HttpStatusCode | undefined;
  idUrl: number = 0;
  clickSalvar: boolean = false;

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
    this.cemiterioInserido.undcodigo = this.codigoCemiterio;
    this.cemiterioInserido.undnome = this.nameCemiterio;
    this.cemiterioInserido.undendereco = this.enderecoCemiterio;
    this.cemiterioInserido.undnumero = this.numeroCemiterio;
    this.cemiterioInserido.undcidade = this.cidadeCemiterio;
    this.cemiterioInserido.undestado = this.estadoCemiterio;
    this.cemiterioInserido.undresponsavel = this.responsavelCemiterio;
    this.cemiterioInserido.status = this.statusCemiterio;

    return this.cemiteriosService.insertCemiterio(this.cemiterioInserido).subscribe(
      response => {
        if (response.status == 200) {
          this.infoStatus = HttpStatusCode.Ok;
          console.log(this.infoStatus)
        } else {
          this.infoStatus = HttpStatusCode.InternalServerError
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
      }
    );
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
        this.statusCemiterio=data.status
      }
    )
  }

  alterCemiterio() {
    this.cemiterioInserido.undcodigo = this.codigoCemiterio;
    this.cemiterioInserido.undnome = this.nameCemiterio;
    this.cemiterioInserido.undendereco = this.enderecoCemiterio;
    this.cemiterioInserido.undnumero = this.numeroCemiterio;
    this.cemiterioInserido.undcidade = this.cidadeCemiterio;
    this.cemiterioInserido.undestado = this.estadoCemiterio;
    this.cemiterioInserido.undresponsavel = this.responsavelCemiterio;
    this.cemiterioInserido.status = this.statusCemiterio;

    this.cemiteriosService.putCemiterio(this.idUrl, this.cemiterioInserido).pipe().subscribe(
      response => {
        if (response.status == 200) {
          this.infoStatus = HttpStatusCode.Ok;
          console.log(this.infoStatus)
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


  buscaCodCemiterio() {
    return this.cemiteriosService.getCodigo().subscribe(
      data => {
        if (typeof data === "number" && (this.idUrl == 0 || this.idUrl == undefined)) {
          this.codigoCemiterio = data + 1
        }
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
 this.statusCemiterio=!this.statusCemiterio;
  }


  backWindow() {
    window.history.back()
  }

}
