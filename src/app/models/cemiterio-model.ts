export class cemiterioModel{
  undcodigo!:number;
  undnome!:String;
  undendereco!:String;
  undnumero!:number;
  undcidade!:String;
  undestado!:String;
  undresponsavel!:String;
  status!:boolean;

  public constructor(dados?: Partial<cemiterioModel>) {
    Object.assign(this, dados);
  }



}
