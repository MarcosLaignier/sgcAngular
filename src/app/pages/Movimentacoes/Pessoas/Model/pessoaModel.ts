export class pessoaModel{
  falcodigo!:number;
  falnome!:String;
  falcpf!:String;
  falsexo!:String;
  falnascimento!:Date;
  falnaturalidade!:String;
  falfalecimento!:Date;
  falmedresp!:String;

  public constructor(init?: Partial<pessoaModel>) {
    Object.assign(this, init);
  }
}
