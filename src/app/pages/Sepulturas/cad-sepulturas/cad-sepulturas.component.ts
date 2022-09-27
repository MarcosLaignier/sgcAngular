import {Component, OnInit} from '@angular/core';
import {SepulturaServiceService} from "../services/sepultura-service.service";
import {ActivatedRoute} from "@angular/router";
import {sepulturaModel} from "../sepulturaModel";
import {HttpStatusCode} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";


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
    codSepultura: [0, [Validators.required]],
    descSepultura: ['', [Validators.required]],
    nomeCemiterio: ['', [Validators.required]]
  })

  codSep: number = 0;
  descSep: String = '';
  cemiterioSep: String = '';
  idRoute: number = 0;
  nameCemiterios: String[] = []
  sepulturaInserida: sepulturaModel = {
    sepcodigo: 0,
    sepdescricao: '',
    sepcemiterio: ''
  }
  infoStatus: HttpStatusCode | undefined;
  clicaSalvar: boolean = false;

  ngOnInit(): void {
    this.getById()
    this.getLastCod()
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

  getLastCod() {
    if (this.idRoute == undefined || this.idRoute == 0) {
      this.sepulturaService.getLastId().subscribe(
        data => {
          if (typeof data === "number") {
            this.codSep = data + 1;
          }
        }
      )
    }

  }

  insertSep() {
    if (this.form.valid) {
      this.sepulturaInserida.sepcodigo = this.codSep;
      this.sepulturaInserida.sepdescricao = this.descSep;
      this.sepulturaInserida.sepcemiterio = this.cemiterioSep;
      return this.sepulturaService.insertSepultura(this.sepulturaInserida).subscribe(
        response => {
          if (response.status == 200) {
            this.infoStatus = HttpStatusCode.Ok;
          } else {
            this.infoStatus = HttpStatusCode.InternalServerError
          }
        }
      )
    } else {
      return this.infoStatus = HttpStatusCode.InternalServerError
    }
  }


  alteraSep() {
    if (this.form.valid) {

      this.sepulturaInserida.sepcodigo = this.codSep;
      this.sepulturaInserida.sepdescricao = this.descSep;
      this.sepulturaInserida.sepcemiterio = this.cemiterioSep;
      return this.sepulturaService.alteraSepultura(this.codSep, this.sepulturaInserida).subscribe(
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

  deleteSep() {
    return this.sepulturaService.deleteSepulturas(this.codSep).subscribe(
      response => {
        if (response.status == 200) {
          this.infoStatus = HttpStatusCode.Accepted
          setTimeout(this.backWindow, 1000)
        }
      }
    );
  }

  getNameCemiterios() {
    return this.sepulturaService.getCemiterios().subscribe(
      data => {
        this.nameCemiterios = data

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
