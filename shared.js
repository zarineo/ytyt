
let modal = document.querySelector ('.modal');
let backdrop = document.querySelector('#backdrop');
let questionOne = document.querySelector('.modal__question-one');
let modalAnswer = document.querySelector('.modal__answer');
let modal__result = document.querySelector('.modal__result');
let button = document.querySelector ('.button'); //кнопка пройти тестирование
let startTest = document.querySelector('.modal__button');
let answerButton = document.querySelector('#answer');
let buttonForResult = document.querySelector('#next');
let closeAll = document.querySelector('.modal__result-button');
let mobileMenu = document.querySelector('.mobile-nav');
let toggleButton = document.querySelector('.toggle-button');
let close = document.querySelector('#close');
let loginButton = document.querySelector('.button-login');

const animItems = document.querySelectorAll('.anim-items');
//const animItem = animItems.length; //для себя запись сделала

if (animItems.length > 0) {
    window.addEventListener ('scroll', animOnScroll);
    function animOnScroll (params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset (animItem).top;
            const animStart = 4; //коэф который регулирует что-то там

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('activeee');
            } else {
                animItem.classList.remove('activeee');
            }             
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

console.log (mobileMenu);

toggleButton.addEventListener ('click', openMenu);
backdrop.addEventListener ('click', closeMenu);
backdrop.addEventListener ('click', closeAllWindows);
close.addEventListener ('click', closeMenu);
button.addEventListener ('click', openModal);
startTest.addEventListener ('click', startingTest );
answerButton.addEventListener ('click', oneQuestionAnswer);
buttonForResult.addEventListener ('click', openResult);
closeAll.addEventListener ('click', closeAllWindows);
loginButton.addEventListener ('click', closeAllWindows);

function closeAllWindows () {
    document.querySelector('.modal__result').style.display= 'none';
    document.getElementById('backdrop').style.display= 'none';
    document.querySelector('.modal__answer').style.display= 'none';
    document.querySelector('.modal__question-one').style.display= 'none';
    document.querySelector ('.modal').style.display= 'none';
    document.getElementById('mobile-nav').style.display= 'none';
}

function openResult () {
    document.querySelector('.modal__result').style.display= 'block';
    document.querySelector('.modal__answer').style.display= 'none';
    document.getElementById('backdrop').style.display= 'block';
}

function oneQuestionAnswer () {
    document.querySelector('.modal__answer').style.display= 'block';
    document.querySelector('.modal__question-one').style.display= 'none';
    document.getElementById('backdrop').style.display= 'block';
}

function startingTest () {
    document.querySelector('.modal__question-one').style.display= 'block';
    document.querySelector ('.modal').style.display= 'none';
    document.getElementById('backdrop').style.display= 'block';
}

function openModal () {
    document.querySelector ('.modal').style.display= 'block';
    document.getElementById('backdrop').style.display= 'block';
}

function openMenu () {
    document.getElementById('mobile-nav').style.display= 'block';
    document.getElementById('backdrop').style.display= 'block';
}

function closeMenu () {
    document.getElementById('mobile-nav').style.display='none';
    document.getElementById('backdrop').style.display='none';
}








