// string 
let nome: string = 'Maria'
console.log(nome)
// nome = 28
// return error for yor type 

// numbers 
let idade: number = 27
let idade2: number = 27.9
// idade = 'Ana'
console.log(idade)

// boolean
let pusseiHobbie: boolean = true
// pusseiHobbie = 0
console.log(pusseiHobbie)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)

// array
// irá receber qualquer tipo como array
// , portanto que seja definido que é um ARRAY
let hobbies: any[] = ["Cozinhar", "Praticar Cubo"]
console.log(hobbies[0])
console.log(hobbies[1])
console.log(typeof hobbies)

hobbies = ["100", "Yasmim"]
console.log(hobbies)
hobbies = [1, 2, 3]
console.log(hobbies)

// Tupla, é uma array predefinida de Tipos
let endereco: [string, number, string] = ["Yasmim Roza", 98, "Souza"]
console.log(endereco)

endereco = ["Souza", 4, "Roza Yasmim"]
console.log(endereco)

// Enum, define valores predefinidos
enum Cor {
    Azul,  // 0 
    Vermelho, // 1
    Amarelo = 1000 , // 1000
    Verde, // 3
    Cinza = 90,
    Preto, 
    Rosa = 1
}

let testeCor: Cor = Cor.Vermelho
console.log(testeCor)

console.log(Cor.Verde) // 1001
console.log(Cor.Cinza)
console.log(Cor.Preto)
console.log(Cor.Rosa)

// any 
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019}
console.log(carro)

// function
const names = 'Yasmim'

function returnName(): string{
    return names
}

console.log(returnName())

function speak(): void{
    console.log('Oi')
    // return returnName()
}

speak()

function multiplicar(numA: number, numB: number): number{
    return numA * numB
}

console.log(multiplicar(2, 2))

// function type 
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(6,5))

// objeto 
let usuario: {nome: string, idade: number} = {
    nome: 'Maria',
    idade: 23
}

console.log(usuario)

//usuario = {
//    name: 'Carla',
//    age: 23
//}

usuario = {
    idade: 23,
    nome: 'Carla',
}

console.log(usuario)

//Desafio
const supervisores: any[] = ["Tadeu", "Ana"]

function baterHora(hora:number){

    const bater = hora;

    if (bater <= 8) console.log('Dentro do horario')
    if (bater > 8) console.log('F9ra do horario')

    return bater
}

// baterHora(9)

let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ["Tadeu", "Ana"],
    baterPonto(horas: number): string {
    if (horas <= 8) {
        return 'Dentro do horario'
    }else{
         return 'Fora do horario'
    }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(7))
console.log(funcionario.baterPonto(10))

// Tipo criado
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario1: Funcionario = {
    supervisores: ["Tadeu", "Ana"],
    baterPonto(horas: number): string {
    if (horas <= 8) {
        return 'Dentro do horario'
    }else{
         return 'Fora do horario'
    }
    }
}

// Union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)

// nerver 
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: -2,
    validadarProduto(){
        if(!this.nome || this.nome.trim().length == 0 ){
            falha('Precisa ter nome')
        }
        if(this.preco <= 0){
            falha('Preco inválido')
        }
    }
}

produto.validadarProduto()

// null, como usa-lo

let altura = 12
// altura = null, não se pode fazer esse tipo de atribuição

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '5464646',
    tel2: null
}

console.log(contato1)

// Desafio
type Banco = {
    saldo: number
    depositar: (valor: number) => void
    // depositar: number | any | Quase acerto!!!
}

type ContaCorrente = {
    nome: string,
    contaBancaria: Banco
    contatos: string[]
}

let contaBancaria: Banco = {
    saldo: 2345,
    depositar(valor: number){
        this.saldo += valor
    }
}

let correntista: ContaCorrente = {
    nome: 'Yasmim',
    contaBancaria: contaBancaria,
    contatos: ['98765454', '21564876']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)