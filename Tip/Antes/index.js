function update(){
   let bill = Number(document.getElementById('yourBill').value)
   let percentTip = Number(document.getElementById('tipInput').value)
   let split = Number(document.getElementById('splitInput').value)

   let tipValue = bill * (percentTip / 100)
   let billTotal = bill + tipValue
   let billEach = billTotal / split

   document.getElementById('tipPercent').innerHTML = percentTip+'%'
   document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
   document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
   document.getElementById('splitValue').innerHTML = formatSplit(split)
   document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
   
}

function formatMoney(value){
    value = Math.ceil(value * 100) /100
    value  = value.toFixed(2)
    return 'R$'+ value
}

function formatSplit(value){
    if(value == 1){
        return value + ' pessoa'
    }else{
        return value + ' pessoas'
    }
}