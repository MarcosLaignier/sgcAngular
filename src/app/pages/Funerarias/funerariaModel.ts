export class funerariaModel{

  funcodigo!:number;
  fundescricao!:String;
  funendereco!:String;
  funcidade!:String;
  funnumero!:number;

  public constructor(init?: Partial<funerariaModel>) {
    Object.assign(this, init);
  }

}
