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
// console.log(aniversario.dia)
// console.log(aniversario)

const casamento = new Data
casamento.ano = 2017
// console.log(casamento)

// ----------------------------------------------------------------------------
class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1998)
aniversarioEsperto.dia = 4
// console.log(aniversarioEsperto.dia)
// console.log(aniversarioEsperto)

const casamentoEsperto = new Data
casamentoEsperto.ano = 2017
// console.log(casamentoEsperto)

// ------- Desafio --------
// Classe Produto
// Atributos: nome, preco e desconto 
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três params

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    // Criar método precoComDesconto
    // Quais são os parametros e o retorno ?
    // Alterar método 'resumo' para mostrar o preço com descontro

    precoComDesconto(): number {
        return this.desconto !== 0 ? this.preco - ((this.preco * this.desconto) / 100) : this.preco
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()}, ${this.desconto}% desconto.`
    }
}

const testeProduto = new Produto('Teste', 1200)
const testeProduto2 = new Produto('Teste2', 1400, 40)

// console.log(testeProduto.resumo())

// console.log(testeProduto2.resumo())

class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima = 200) {
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', '1', 185)
const carro2 = new Carro('Tesla', '2', 1000)

console.log(carro2.acelerar())
console.log(carro2.frear())

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('Ferrari', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

export { router3 }