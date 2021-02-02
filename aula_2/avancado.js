"use strict" // ativa o strict mode

function helloWorld(nome) {
    console.log("Hello World!" + nome)
}

// arrow functions nao conseguem acessar o escopo lexico (this)
const helloWorldFuncional = (nome) /* parametros */ => console.log("Hello World!" + nome) /* escopo da funcao */

// var const e let nao sao obrigatorios mas sao muito recomendados. Para evitar eswse tipo de coisa existe o strict mode
// nome = 'Funcionaldolfo' // isso roda
let nome = "Funcionaldolfo"
helloWorld(nome)
helloWorldFuncional(nome)

let vetor = [1,2,3,4,5]
console.log(
    vetor.length,
    vetor.pop(),
    vetor.push()
)

// callbacks: quando voce chama uma funcao como parametro de outra
funcao1(function () {
    console.log("Hello World!")
})

// dar delay em uma funcao (em ms)
setTimeout(function() {
    console.log("Executou")
}, 5000)

function olaMundo(funcao2, nome) {
    funcao2()
    console.log(nome)
}

const funcao1 = (funcao2) => funcao2()

// map: para cada elemento do vetor ele passará um parâmetro i diferente
vetor.map(function (i, index) {
    console.log(`[${index}] i\n`)
})

vetor.map((i) => console.log(i))

// reduce:
vetor.reduce(function (valorAcumulado, valorAtual) {
    return valorAcumulado + valorAtual
})

vetor.reduce((valorAcumulado, valorAtual) => valorAcumulado + valorAtual)

vetor.filter(function(i) {
    if (i % 2 == 0) {
        return true
    }
    else {
        return false
    }
})

vetor.filter((i) => (i % 2 == 0) ? true : false)