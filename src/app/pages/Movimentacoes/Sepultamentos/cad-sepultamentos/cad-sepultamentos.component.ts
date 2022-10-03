import { Component, OnInit } from '@angular/core';
import {SepultamentoService} from "../Service/sepultamento.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {cemiterioModel} from "../../../../models/cemiterio-model";
import {PessoaService} from "../../Pessoas/Service/pessoa.service";

@Component({
  selector: 'app-cad-sepultamentos',
  templateUrl: './cad-sepultamentos.component.html',
  styleUrls: ['./cad-sepultamentos.component.css']
})
export class CadSepultamentosComponent implements OnInit {

  idUrl:number=1

  form = this.formBuilder.group({
    sepulCodigo:[0, [Validators.required]],
    sepulFalecido:['',[Validators.required]],
    sepulCPF:['',[Validators.required]],
    sepulData:[Date,[Validators.required]],
    sepulFale:[Date,[Validators.required]],
    sepulFuneraria:['',[Validators.required]],
    sepulCemiterio:['',[Validators.required]],
    sepulSepultura:['',[Validators.required]]
  })

  sepulCodigo:any;
  sepulFalecido:String='';
  sepulCPF:String='';
  sepulData:Date=new Date();
  sepulFale:Date=new Date();
  sepulFuneraria:String='';
  sepulCemiterio:String='';
  sepulSepultura:String='';

  funNames:String[]=[]
  cemNames:String[]=[]
  constructor(private sepultamentoService:SepultamentoService,
              private route:ActivatedRoute,
              private formBuilder:FormBuilder,
              private pessoaService:PessoaService
  ) { }



  ngOnInit(): void {
    this.getById()
    this.populaFuneraria()
    this.populaCemiterio()
  }

 getById(){
   this.route.params.subscribe(params =>this.idUrl = params['id'])
    return this.sepultamentoService.findById(this.idUrl).subscribe(
      data =>{
        this.sepulCodigo = data.sepulcodigo;
        this.sepulFalecido=data.sepulfalecido;
        this.sepulCPF=data.sepulcpffal;
        this.sepulData=data.sepdatasepultamento;
        this.sepulFale=data.sepdatafalecimento;
        this.sepulCemiterio=data.sepulcemiterio;
        this.sepulFuneraria=data.sepulfuneraria
        this.sepulSepultura=data.sepulsepultura;
      }
    );
 }

 populaFuneraria(){
    return this.sepultamentoService.findNameFun().subscribe(
      data =>{
        this.funNames = data
      }
    )
 }

 populaCemiterio(){
    return this.sepultamentoService.findNameCem().subscribe(
      data =>{
        this.cemNames = data
      }
    )
 }

 idPessoa:number=0

 dadosFalecidos(){
    return this.pessoaService.getPessoaId(this.idPessoa).subscribe(
      data =>{
        console.log(data)
      }
    )
 }

}
