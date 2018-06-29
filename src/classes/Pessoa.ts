import FirebaseItem from "./FirebaseItem";
import Pergunta from "./Pergunta";

export default class Pessoa extends FirebaseItem {
    email: string = ''
    pessoa: string = ''
    // pergunta?: Pergunta = Pergunta()?
    pergunta?: string = '1'

}