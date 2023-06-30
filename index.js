

const checkmarks = document.getElementsByClassName('slider-container__circle');
const lines = document.getElementsByClassName('slider-container__line');
const stepTexts = document.getElementsByClassName('slider-container__step');
const prevBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const stepsArray = Array.from(checkmarks); 
const textsArray = Array.from(stepTexts);
const linesArray = Array.from(lines);

let indexSteps = 1;
let indexLines = 0;

stepsArray[0].classList.add('circle-update-greenColor');
textsArray[0].classList.add('text-update-greenColor');

function changeStepColorGreen() {
    if (indexSteps < stepsArray.length) {
        stepsArray[indexSteps].classList.add('circle-update-greenColor');
        textsArray[indexSteps].classList.add('text-update-greenColor');
        stepsArray[indexSteps].classList.remove('circle-update-grayColor');
        textsArray[indexSteps].classList.remove('text-update-grayColor');
        prevBtn.classList.add('btn-enable-color');
        indexSteps++;
    }

    if (indexLines < linesArray.length) {
        linesArray[indexLines].classList.add('line-update-greenColor');
        linesArray[indexLines].classList.remove('line-update-grayColor');
        indexLines++;
    }

    if (indexSteps === stepsArray.length) {
        nextBtn.classList.add('btn-disable-color');
        nextBtn.classList.remove('btn-enable-color');
    }
}

function changeStepColorGray() {
    
    if ((indexSteps - 1) >= 1) {
        indexSteps--;
        stepsArray[indexSteps].classList.add('circle-update-grayColor');
        textsArray[indexSteps].classList.add('text-update-grayColor');
        stepsArray[indexSteps].classList.remove('circle-update-greenColor');
        textsArray[indexSteps].classList.remove('text-update-greenColor');
        nextBtn.classList.add('btn-enable-color');
    }

    if (indexLines - 1 >= 0) {
        indexLines--;
        linesArray[indexLines].classList.add('line-update-grayColor');
        linesArray[indexLines].classList.remove('line-update-greenColor');
    }

    if (indexSteps === 1) {
        prevBtn.classList.add('btn-disable-color');
        prevBtn.classList.remove('btn-enable-color');
    }
}


nextBtn.addEventListener('click', changeStepColorGreen);
prevBtn.addEventListener('click', changeStepColorGray);
