var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

// var tdPeso = paciente.querySelector(".info-peso");
// var peso = tdPeso.textContent;
var peso = paciente.querySelector(".info-peso").textContent;

var altura = paciente.querySelector(".info-altura").textContent;

var tdImc = paciente.querySelector(".info-imc");

var validaPeso = true;
var validaAltura = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    validaPeso = false;
    tdImc.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida!");
    validaAltura = false;
    tdImc.textContent = "Altura inválida!";
}

if(validaAltura && validaPeso){
    var imc = peso/(altura * altura);    
    tdImc.textContent = imc;
}


