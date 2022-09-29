import { Component, OnInit } from '@angular/core';
import {FunerariaService} from "../Services/funeraria.service";
import {funerariaModel} from "../funerariaModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-funerarias',
  templateUrl: './list-funerarias.component.html',
  styleUrls: ['./list-funerarias.component.css']
})
export class ListFunerariasComponent implements OnInit {

  colunasName = [
    { name: 'Codigo' }, { name: 'Nome' }, { name: 'Endereco' }, { name: 'Cidade' }
  ]
  filterVisible: boolean = true;
  receberClick(filterComponent: boolean) {
    this.filterVisible = filterComponent;

  }

  dadosCols:funerariaModel[]=[];
  idUrl:number=0;

  codFun:any;
  nomeFun:String='';
  cidadeFun:String='';

  constructor(private funerariaService:FunerariaService,
              private router:Router
    ) { }

  ngOnInit(): void {

  }

  public listFun(){
    return this.funerariaService.listFun().subscribe(
      data =>{
        this.dadosCols=data;
      }
    )
  }



  public recebeIdPatch(id:number){
    this.idUrl=id;
    this.router.navigate([`/cadfunerarias`,this.idUrl])

  }

  public clearInput(){
    this.codFun='';
    this.nomeFun='';
    this.cidadeFun=''
  }





}
