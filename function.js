
var audio = new Audio("IbangPlaneta1.mp3");
audio.volume = 0.1;



const noButton = document.querySelectorAll('.js-no-button');
const yesButton = document.querySelectorAll('.js-yes-button');
const continueButton = document.querySelector('.js-continue');
const mainContainer = document.querySelector('.main-container');
const mainContainer2 = document.querySelector('.main-container-2');
const mainContainer3 = document.querySelector('.main-container-3');
const buttonContainer = document.querySelectorAll('.button-container');

continueButton.addEventListener('click', () =>{


mainContainer.setAttribute('style', 'display:flex');
mainContainer2.setAttribute('style', 'display:none');
audio.play();
audio.loop = true;

});




noButton[0].addEventListener('click', () => {
    setTimeout( () =>{
        noButton[0].setAttribute('style', `opacity:0`);
        setTimeout( () =>{
            noButton[0].setAttribute('style', `opacity:1`);      
        },500);
    },100);
});




noButton[1].addEventListener('click', () => {
 
   updateFont(20);
});

function updateFont(a){
    let computedFont = getComputedStyle(yesButton[1]).fontSize;
    computedFont = parseInt(computedFont);

    if(computedFont == 0) return;
     yesButton[1].style.fontSize = `${computedFont + a}px`
 
}


yesButton[0].addEventListener('click', () =>{
    mainContainer.setAttribute('style', 'display:none');
    mainContainer3.setAttribute('style', 'display:flex');
    buttonContainer[1].setAttribute('style', 'display:block');
});
yesButton[1].addEventListener('click', () =>{
    mainContainer3.setAttribute('style', 'display:none');
    mainContainer.setAttribute('style', 'display:flex');
    document.querySelector('.main-container-text').innerHTML = 'Yay!';
    document.querySelector('#kuromi-image').src = './flowers-gif.gif';
    buttonContainer[0].setAttribute('style', 'display:none');
    document.querySelector('.js-insert-text').innerHTML = '<p>Here, a flower for uuu<p>'; 

});

















