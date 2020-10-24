var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function(){
    const xhr = new XMLHttpRequest(); // responsável por fazer requisições

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        const erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");

            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });  
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }       
    });
    
    xhr.send();
});