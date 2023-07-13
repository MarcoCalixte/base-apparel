'use strict'

const emailInput = document.getElementById('input-email');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const thankYouMessage = document.getElementById('thankyou-message');
const errorIcon = document.getElementById('icon-error');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');


form.addEventListener('submit', validate);
submitBtn.addEventListener('click', validate);

function validate(e) {
    e.preventDefault();

    let inputValue = emailInput.value.trim();
    console.log(inputValue);

    if (!isEmail(inputValue)) { // if content not equal to isEmail then
        errorMessage.style.visibility = 'visible'; // show the error message
        errorIcon.style.visibility = 'visible'; // show the error icon
        form2.style.border = '1px solid hsl(0, 93%, 68%)';
    } else {
        errorMessage.style.visibility = 'hidden' // hide the error message
        errorIcon.style.visibility = 'hidden' // hide the error icon
        thankYouMessage.style.visibility = 'visible'; // show the thankyou-message
        emailInput.value = '' // empty the email value after text input
        form2.style.border = '1px solid hsla(0, 67%, 48%, 0.15)'
    }

    // function isEmail(emailInput) {
    //     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
    // }
    function isEmail(emailInput) {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (emailInput.match(regex))
            return true;
        else {
            return false;
        }
    }
}

function testing() {
    console.log(thankYouMessage);
}

validate()