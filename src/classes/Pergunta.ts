import { Regioes } from './Regiao'
import Alternativa from './Alternativa';
import FirebaseItem from './FirebaseItem';

export default class Pergunta extends FirebaseItem {
    ordem: number = null
    pergunta: string = ''
    peso: number = 0
    regiao: Regioes = null
    alternativas: Alternativa[] = []
    dica?: string = ''
}