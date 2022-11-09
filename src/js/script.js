let rektonText = document.getElementById("wrapper-rekton");
let dgText = document.getElementById("wrapper-dg");
let focusText = document.getElementById("wrapper-focus");

function showDg(){
    rektonText.style.display = "none";
    focusText.style.display = "none";
    dgText.style.display = "block";
}

function showFocus(){
    rektonText.style.display = "none";
    dgText.style.display = "none";
    focusText.style.display = "block";
}

function showRekton(){
    dgText.style.display = "none";
    focusText.style.display = "none";
    rektonText.style.display = "block";
}