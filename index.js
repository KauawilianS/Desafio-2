function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    let rank

    switch (true) {
        case (vitorias < 10):
            rank = "Ferro"
            break
        case (vitorias >= 11 && vitorias <= 20):
            rank = "Bronze"
            break
        case (vitorias >= 21 && vitorias <= 50):
            rank = "Prata"
            break
        case (vitorias >= 51 && vitorias <= 80):
            rank = "Ouro"
            break
        case (vitorias >= 81 && vitorias <= 90):
            rank = "Diamante"
            break
        case (vitorias >= 91 && vitorias <= 100):
            rank = "Lendário"
            break
        case (vitorias >= 101):
            rank = "Imortal"
            break
        default:
            rank = "Indefinido"
    }

    return {
        saldo: saldo,
        rank: rank
    };
}

let vitorias = 45
let derrotas = 20
let resultado = calcularRank(vitorias, derrotas)
console.log("O Herói tem de saldo de " + resultado.saldo + " e está no nível de " + resultado.rank + ".")







