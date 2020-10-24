const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // lista de pacientes.

for(let i = 0; i < pacientes.length; i++){

    const paciente = pacientes[i];

    const peso = paciente.querySelector(".info-peso").textContent;

    const altura = paciente.querySelector(".info-altura").textContent;

    const tdImc = paciente.querySelector(".info-imc");

    const pesoEhValido = validaPeso(peso);
    const alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido"); // altera a classe do elemento
    }

    if(!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        const imc = calculaImc(peso, altura);    
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    const imc = peso/(altura * altura); 

    return imc.toFixed(2);
}