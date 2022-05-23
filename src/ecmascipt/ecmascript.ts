import { Router } from 'express' 

const router = Router()

// let e const 
let seraQuePega = '?'
// console.log(seraQuePega)

let estaFrio = true
if(estaFrio){
 let acao = 'Colocar o casaco'
 console.log(acao)
}

const cpf: string = '123.456.789-09'
// cpf = '099.098.987.-88'
console.log(cpf)

var segredo = 'externo!'
function revelar() {
 const segredo = 'interno'
 console.log(segredo)
}
revelar()
console.log(segredo)

{
 const def = 'def'
 console.log(def)
}

for(let i = 0; i < 10 ; i++){
 console.log(i)
}
console.log()

// ARROW FUNCTION
function somar(n1: number, n2: number): number{
return n1 + n2
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number): number => n1 -n2
console.log(subtrair(2, 3))

const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa)
falarCom('Maria')

// Parâmetro
function contagemRegressiva(inicio: number = 3,
    fim: number = 5): void{
    console.log(inicio)
    while(inicio > fim ){
        inicio--
        console.log(inicio)
    }
    console.log('Fim')
}
// contagemRegressiva()
contagemRegressiva(10)

// Rest e Spread
const numbers = [ 1, 10, 87, 56, -2, 800, 1209]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
// const turmaB: string[] = ['Fernando'].concat(turmaA, ['MIguel', 'Lorena'])
const turmaB: string[] = ['Fernando', ...turmaA, 'Miguel', 'Lorena']
console.log(turmaB)

function retornarArray(...args: number[]): number[]{
    return args
}

const numeros = retornarArray(1, 2, 3, 4, 5, 6, 7, 8)
console.log(numeros)

console.log(retornarArray(...numbers))

// Rest e Spread (Tupla)
const tupla: [number, string, boolean] = [ 1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1°: ${a} ${b} ${c}`)
}
tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]): void{
    console.log(Array.isArray(params))
    console.log(`2°: ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motors Zec 9.0', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
    nome: 'SSD 1000GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
}

const nomeItem = item.nome
const precoItem = item.preco
// const { nome: n, preco:p } = item, sendo usando na linha abaixo

console.log(nomeItem)
console.log(precoItem)

const { nome: n, preco: p, caracteristicas: { w } } = item
console.log(n)
console.log(p)
console.log(w)

// Template string
const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '9'
const boasVindas = `
    Boas Vindas ${usuarioID},
    Notificacoes: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindas)

// Callback
function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois...')
    }, 3000)
}

// esperar3s(function(resultado: string){
//     console.log(resultado)
// })

function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois promise...')
        }, 3000)
    })
}
// esperar3sPromise()
//     .then(dados => console.log(dados))

// fetch('https://swapi.dev/api/people/1') - Isso só funciona no Browser
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))

export { router }