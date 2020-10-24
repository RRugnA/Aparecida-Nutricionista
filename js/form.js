var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // Previne comportamento padrão

    // Extraindo informações do paciente pelo Form
    const form = document.querySelector("#form-adiciona");
    const paciente = obterDados(form);    

    const erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);        
        return;
    }

    adicionaPacienteNaTabela(paciente);    

    form.reset();
    const mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    const pacienteTr = montarTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obterDados(form){
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montarTr(paciente){
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe){
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    const erros = [];

    if(paciente.nome.length == 0) erros.push("O campo 'Nome' não pode estar em branco!");
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido!");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");
    if(paciente.peso.length == 0) erros.push("O campo 'Peso' não pode estar em branco!");
    if(paciente.altura.length == 0) erros.push("O campo 'Altura' não pode estar em branco!");
    if(paciente.gordura.length == 0) erros.push("O campo '% de Gordura' não pode estar em branco!");
    
    return erros;
}

function exibeMensagensDeErro(erros){
    const ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// FUNÇÕES JS:

// titulo.addEventListener("click", function(){                     // Função Anônima
//     console.log("Olha só, posso chamar uma função anônima!");
// });

// titulo.addEventListener("click", mostraMensagem);                // Função Nomeada
// function mostraMensagem(){                                       
//     console.log("Olá eu fui clicado!");
// }