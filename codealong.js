//These are types of DOM elements//
const heading = document.querySelector('hi');
const firstLi = document.querySelector('#item-1')
const secondLi = document.querySelector('#item-2');


//These are types of functions to use //
const makeHeadingBlue = function(){
    heading.style.color = 'blue'; 
}

const giveImageSource = function(){
    img.src = 'imageURL'
}


heading.addEventListener('click', makeHeadingBlue)
heading.addEventListener('click', giveImageSource)
firstLi.addEventListener('click', makeHeadingBlue)
secondLi.addEventListener('mouseover', makeHeadingBlue)

const addEventListener = function(type, func){
    if (type === 'click') {
        //wait for someone to click
        func();
    } else if (type === 'mouseenter'){

    }
}