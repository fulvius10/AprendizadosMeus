let corCliente = undefined
let corEstoque ='black'
let corVendida = corCliente || corEstoque

console.log(corVendida)


let driverSpeed = 110

if(driverSpeed > 110){
console.log('Dirigindo mto rapido corno')
}else if (driverSpeed > 70  && driverSpeed <= 110){
    console.log('Dirigindo corno')
}else{
    console.log('Dirigindo mto lento corno')
}

let aeroportos = 'MCO'
switch(aeroportos){
    case 'MCO':
        console.log('Orlando')
        break
    case 'JFK':
        console.log('John F. Kennedy')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default:
        console.log('Unknow')
}

const myCar ={
    model: 'Gol',
    year: 2023,
    km: 68000
}

//foreach (for in)
for(let i in myCar){
    console.log(i, myCar[i])
}
//foreach for of

const amigos = ['Marcos', 'Ana', 'José']

for (let i of amigos){
    console.log(i)
}

