import FirebaseItem from "./FirebaseItem";

export default class Pessoa extends FirebaseItem {
    email: string = ''
    pessoa: string = ''
    fotourl: string = ''
    datacriacao: number | Object = null
    pontos: number = null
    respondidas_1?: string[] = []
    respondidas_2?: string[] = []
    respondidas_3?: string[] = []
    respondidas_4?: string[] = []
    respondidas_5?: string[] = []
}