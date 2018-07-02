export enum Regioes {
    Sul = 1,
    Sudeste = 2,
    CentroOeste = 3,
    Nordeste = 4,
    Norte = 5
}

export class Regiao {
    static getNomeRegiao(regiao: Regioes): string {
        switch (regiao) {
            case Regioes.Sul:
                return 'Região Sul'
            case Regioes.Sudeste:
                return 'Região Sudeste'
            case Regioes.CentroOeste:
                return 'Região Centro Oeste'
            case Regioes.Nordeste:
                return 'Região Nordeste'
            case Regioes.Norte:
                return 'Região Norte'
            default:
                return ''
        }
    }
}