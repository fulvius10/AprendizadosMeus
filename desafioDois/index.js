//acessar valor de array 

//criar o valor 
const num = [7,8,9]
//adiciona ao array no final
num.push(
   10,11,12,13,14,15
)
//adiciona no inicio do array
num.unshift(
    1,2,3
)

//adiciona no (index, deletar a partir do ponto)
//quais quer adicionar )
num.splice(
   3, 0, 4,5,6
)
//remover itens de um array a partir do ultimo indice
const final = num.pop()

//remove a partir do primeiro
const final2 = num.shift()

//remove os valores selecionados
const final3 = num.splice(
    2,1
)


const movies = [
    {id:1, movieName:'Largados e Pelados'},
    {id:2, movieName:'Harry Potter'},
    {id:3, movieName:'Hobbit'}
]
//procurar com find dentro de um array 
console.log(movies.find(function(movie){
return movie.movieName == 'Harry Potter'
}))

//procurar com arrow function
console.log(movies.find(movie =>
     movie.movieName == 'Hobbit'
    )
)
//zerar uma array 
let num2 = [5,6,7,8]

//setando o let vazio
// num2 = []

// num2.length = 0
//
//vai retirar com splice a partir do indice 0 baseado no legnht

//num2.splice(0, num2.length)


//concatenar array 
let num3 = [5,6,7,8]
let letters = ['a', 'b', 'c']

all = num3.concat(letters)

half = all.slice(3, 5)


console.log(all)
console.log(half)

//utilizar o join array 
//serve para adicionar algo a uma array
let clients = ['Fulvius', 'Lucas', 'Felipe']

let clientsJoin = clients.join(', ')

console.log(clientsJoin)

//transforma em ordem alfabética
clients.sort()

console.log(clients)

//verificar arquivos dentro de uma array 

const tempBh = [18, 13, 8, 2]

const tempPositive = tempBh.every(value => value >= 0
)
console.log(tempPositive)


//verificar arquivos dentro de um array com condicao
const tempBh2=[18,13,8,2,-2,-5]
const temppositive2 = tempBh2.filter(valuefilter =>{
    return valuefilter >= 0 
})
console.log(temppositive2)
//const tempPositive2 = tempBh.filter(valueFilter => valueFilter >= 0)

let kw = 0
let potencia = 0
let tempo = 0

potencia = 800
tempo = 8


kw = potencia  * (tempo*30)/1000

let consumo = 0
consumo = 0.4 * kw


document.getElementById('result').innerHTML = consumo
