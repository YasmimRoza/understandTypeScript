import { Router } from 'express'

const router3 = Router()

class Data {
    // Público por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia,
            this.mes = mes,
            this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1998)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data
casamento.ano = 2017
console.log(casamento)

// ----------------------------------------------------------------------------
class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1998)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new Data
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

// ------- Desafio --------
// Classe Produto
// Atributos: nome, preco e desconto 
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três params

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.preco} (${this.desconto})`
    }
}

const testeProduto = new Produto('Teste', 1200)
const testeProduto2 = new Produto('Teste2', 1400, 40)

testeProduto2.preco -= testeProduto2.preco / testeProduto2.desconto

console.log(testeProduto)
console.log(testeProduto.resumo())
console.log(testeProduto2)
console.log(testeProduto2.resumo())


export { router3 }