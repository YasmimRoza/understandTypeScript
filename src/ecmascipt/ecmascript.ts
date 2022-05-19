import { Router } from 'express' 

const router = Router()

// let e const 
    let seraQuePega = '?'
    // console.log(seraQuePega)

    let estaFrio = true
    if(estaFrio){
        let acao = 'Colocar o casaco'
        // console.log(acao)
    }

    const cpf: string = '123.456.789-09'
    // cpf = '099.098.987.-88'
    // console.log(cpf)

    var segredo = 'externo!'
    function revelar() {
        const segredo = 'interno'
        // console.log(segredo)
    }
    revelar()
    // console.log(segredo)

    {
        const def = 'def'
        // console.log(def)
    }

    for(let i = 0; i < 10 ; i++){
        // console.log(i)
    }
    // console.log()

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



export { router }