import {pessoaModel} from "../../Pessoas/Model/pessoaModel";
import {cemiterioModel} from "../../../../models/cemiterio-model";
import {funerariaModel} from "../../../Funerarias/funerariaModel";

export class SepultamentoModel{
  sepulcodigo!:number;
  sepulfalecido!:String;
  sepulcpffal!:String;
  sepulfuneraria!:String;
  sepulcemiterio!:String;
  sepulsepultura!:String;
  sepdatasepultamento!:Date;
  sepdatafalecimento!:Date;
  pessoa!:pessoaModel;
  cemiterio!:cemiterioModel
  funeraria!:funerariaModel

  public constructor(init?: Partial<SepultamentoModel>) {
    Object.assign(this, init);
  }
}
