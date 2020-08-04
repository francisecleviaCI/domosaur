//Warmup Challenges//

//--#1--//
const changeSpan = document.querySelector('.mess-with-me');
changeSpan.style.fontSize = '3em';

//--#2--//
const changeParagraph = document.querySelector('p.mess-with-me');
changeParagraph.style.backgroundColor = 'green';

//--#3--//
//in CSS file//

//--#4--//
const firstDinoImage = document.querySelector('#triceratops')
firstDinoImage.style.width = '324px';


//Event Listener Challenges//

const addEventListener = function(type, func){
    if (type === 'click') {
        func();
    } else if (type === 'mouseover'){
        func()
    }
}


//--#1--//
const makeSpanBlue = function(){
    changeSpan.style.color = 'orange'; 
}

changeSpan.addEventListener('click', makeSpanBlue)

//--#2--//
const makeDinoBorderRed = function(){
    firstDinoImage.style.border = 'red'; 
}

firstDinoImage.addEventListener('click', makeDinoBorderRed)

//--#3--//
const featheredDinoImage = document.querySelector('#feathers')

const makeFeatheredDino = function(){
    featheredDinoImage.style.opacity = "0.5"; 
}

featheredDinoImage.addEventListener('click', makeFeatheredDino)

//--#4--//
const switchBackground = document.querySelector('#toggle')

const changeBackgroundColor = function(){
    switchBackground.style.backgroundColor = "pink"; 
}

switchBackground.addEventListener('click', changeBackgroundColor)

//--#5--//
const growBiggify = document.querySelector('#biggify')

const hoveredImageGrows = function(){
    growBiggify.style.width = "200px"; 
}

growBiggify.addEventListener('mouseover', hoveredImageGrows)