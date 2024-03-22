let randomNumber
let numberGuessed = []
let attempts = 0
let maxAttempts = 10




function initNumber() {
   randomNumber = Math.floor(Math.random() * 100 + 1)
   console.log(randomNumber)
}


function compareNumbers() {
  let userNumber = Number(document.getElementById('inputBox').value)
  numberGuessed.push(' ' + userNumber)    
    
      if(attempts < maxAttempts){
        if(userNumber > randomNumber){
        
            document.getElementById('textOutput').innerHTML = 'Acima do num'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
    
        }else if (userNumber < randomNumber){
            
            document.getElementById('textOutput').innerHTML = 'Abaixo do num'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }else {
            
            document.getElementById('textOutput').innerHTML = 'É o número!!!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') 

        }
          document.getElementById('guesses').innerHTML =  numberGuessed

      }else{
            document.getElementById('textOutput').innerHTML = '=(=(Você perdeu=(=(' + '\n O número was: '  +randomNumber
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') 
        }
    
}

function novoJogo() {
   window.location.reload()
}