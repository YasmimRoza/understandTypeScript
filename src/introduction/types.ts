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
