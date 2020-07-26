var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // lista de pacientes.

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var validaPeso = true;
    var validaAltura = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        validaPeso = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido"); // altera a classe do elemento
    }

    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida!");
        validaAltura = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(validaAltura && validaPeso){
        var imc = peso/(altura * altura);    
        tdImc.textContent = imc.toFixed(2); // 2 casas decimais
    }
}



