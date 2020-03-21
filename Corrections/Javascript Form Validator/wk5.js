
const email = document.querySelector('[name="mail"]');
const password = document.querySelector('[name="password"]');
const username = document.querySelector('[name="username"]');
const form = document.querySelector("form");
const button = document.querySelector("#btn");

const heading1 =document.getElementById("title_hw");

form.addEventListener("input" , () => {
    username.validity.patternMismatch
    ? username.setCustomValidity(`A valid username must be entered. At least one number, one 
        special character with 8 characters must be entered`)
    :username.setCustomValidity(``);

    email.validity.patternMismatch
    ? email.setCustomValidity (`Emails must contain an @ to be acceptable with an existing extension, Some
        examples are @gmail.com, @yahoo.com`)
    :email.setCustomValidity(``);

    password.validity.patternMismatch
    ? password.setCustomValidity (`Password must contain 8 characters, a special character with a lower and capital letter.`)
    :password.setCustomValidity(``);

    if (
        email.validity.patternMismatch === false &&
        password.validity.patternMismatch === false &&
        username.validity.patternMismatch === false 
    ){
        heading1.innerHTML = `Your input is acceptable`; }
    
    else {
        heading1.innerHTML = `Your input has not been accepted. Please try again`;
    }
    });

    function clearForm () {
        window.location.reload();
    }

    const btnReset = document.getElementById("btnReset");
    btnReset.addEventListener("click", clearForm);