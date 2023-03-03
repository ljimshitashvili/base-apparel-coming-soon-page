const email = document.getElementById("input");
const button = document.querySelector("#submit");
const icon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error");
const container = document.querySelector(".input-container");


let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input){
    let active = document.querySelector(".active");
    if(!mailRegex.test(input.value)){
        icon.classList.add("active");
        errorText.classList.add("active");
        container.classList.add("active");
    }
}

button.addEventListener("click", () => {
    testMail(email);
});