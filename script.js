// Write a function validCard that takes a number as an argument and returns true for a valid number and false for an invalid number.
const form = document.getElementById("form");
const cardNumber = document.getElementById("card-number");
const popUp = document.getElementById("popUp");
const isValid = document.getElementById("valid");
const isInvalid = document.getElementById("inValid");

const valid = (num) => {
    const numStr = num.toString().replace(/\D/g, '');

    let sum = 0;

    for (let i = numStr.length - 1; i >= 0; i--) {
        let digit = parseInt(numStr.charAt(i));

        sum += digit;
    }

    if (sum % 10 === 0) {
        popUp.style.visibility = "visible"
        isValid.style.visibility = "visible"

    } else {
        popUp.style.visibility = "visible";
        isInvalid.style.visibility = "visible"
    }
};

form.addEventListener("submit", event => {
    event.preventDefault();

    const number = parseInt(cardNumber.value);



    if (isNaN(number) || number.length < 10) {
        alert("Please enter your card number before submitting.");
    } else {
        valid(number);
    };
});