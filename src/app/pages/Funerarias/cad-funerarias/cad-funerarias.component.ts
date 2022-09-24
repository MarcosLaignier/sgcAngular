import { Component, Injectable, OnInit,NgModule } from '@angular/core';

@Component({
  selector: 'app-cad-funerarias',
  templateUrl: './cad-funerarias.component.html',
  styleUrls: ['./cad-funerarias.component.css']
})
@Injectable()
export class CadFunerariasComponent implements OnInit {


  nomeFun:string = '';
  nome1:string='';
  Index:Number = 0;
  constructor() { }

  ngOnInit(): void {

  }
 
  saveInformations() {
    
    console.log(this.nomeFun)
    localStorage.setItem('cadFun', JSON.stringify( this.colunasName));
   
}
colunasName = [
  {index:this.Index},{ dados: this.nomeFun }
]

}
