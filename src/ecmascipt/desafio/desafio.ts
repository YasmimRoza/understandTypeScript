import { Router } from 'express'

const router2 = Router()

// Questão 1
// function calc (value: number){
//     return value * 2
// }
const calc = (valor: number): number => valor * 2
console.log(calc(2))

// Questão 2
// const dizerOla = (nome: string) => {
//     if(nome === undefined) return 'Pessoa'
//     return 'Olá, ' + nome
// }
const dizerOla = (nome: string = 'Pessoa') => {
    return 'Olá, ' + nome
}
console.log(dizerOla('Yasmim'))

// Questão 3
const nums = [-3, 33, 87, 100, 9]
console.log(Math.min(...nums))

// Questão 4
const array = [555, 20]

array.push(...nums)

console.log(array)

// Questão 5
let notas = [8.5, 6.3, 9.4]
let [nota1, nota2, nota3 ] = notas
console.log(nota1, nota2, nota3)

// Questão 6
let cientista = { 
    primeiroNome: "Will", 
    experiencia: 12
}

const { primeiroNome: PN, experiencia: XP } = cientista

console.log(PN, XP)

export {router2}