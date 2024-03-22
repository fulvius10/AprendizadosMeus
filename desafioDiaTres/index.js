function saida(){
    let numOne = Number(document.getElementById('num-one').value)
    let numTwo = Number(document.getElementById('num-two').value)
    let total = 0

    if (document.getElementById('box1').checked){
        total = numOne + numTwo
    }else if(document.getElementById('box2').checked){
        total = numOne - numTwo
    }else if(document.getElementById('box3').checked){
        total = numOne * numTwo
    }else {
        total = numOne / numTwo
    }

    document.getElementById('resultArea').innerHTML = total

}