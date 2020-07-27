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

// FUNÇÕES JS:

// titulo.addEventListener("click", function(){                     // Função Anônima
//     console.log("Olha só, posso chamar uma função anônima!");
// });

// titulo.addEventListener("click", mostraMensagem);                // Função Nomeada
// function mostraMensagem(){                                       
//     console.log("Olá eu fui clicado!");
// }

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // -------------------------------------->>> Previne comportamento padrão
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = 0;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    console.log(nomeTd);

});
