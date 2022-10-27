import {cemiterioModel} from "../../models/cemiterio-model";

export class sepulturaModel{
  sepcodigo!:number;
  sepdescricao!:String;
  sepcemiterio!:String;
  cemiterio!:cemiterioModel;

  public constructor(init?: Partial<sepulturaModel>) {
    Object.assign(this, init);
  }
}
