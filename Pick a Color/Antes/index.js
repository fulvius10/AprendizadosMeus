const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple']
const btnClick = document.getElementById('btn')
const colorPick = document.querySelector('.color')



btnClick.addEventListener('click', function(){
    let randomColor = getRandomNumber()
    document.body.style.background =colors[randomColor]
    console.log(randomColor)
    colorPick.textContent = colors[randomColor]
    console.log(colors[randomColor])

})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}