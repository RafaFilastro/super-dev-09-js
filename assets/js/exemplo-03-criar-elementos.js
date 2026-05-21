function adcionarAluno(){
    const campoNome = document.getElementById("campo-nome");
    const nome = campoNome.value;

    if (nome.length === 0){
        alert("Digite o nome do aluno");
        campoNome.focus();
        return;
    }

    /*
    GERAR O HTML
    <div class="card-aluno">
        <h3>Matheus</h3>
        <p>Aluno cadastrado com JavaScript</p>
    </div>
    */

    const divCardAluno = document.createElement("div"); //<div></div>
    divCardAluno.classList.add("card-aluno"); // <div class="card-aluno"></div>

    const h3NomeAluno = document.createElement("h3");
    h3NomeAluno.innerText = nome;

    const pMensagem = document.createElement("p");
    pMensagem.innerText = "Aluno cadastrado com JavaScript";

    divCardAluno.appendChild(h3NomeAluno);
    divCardAluno.appendChild(pMensagem);

    // Pegar o elemento (lista-alunos) que eu adcionarei a nova div
    const divListaAlunos = document.getElementsByClassName("lista-alunos")[0];
    divListaAlunos.appendChild(divCardAluno);

    // limpar campo
    // campoNome = ""; <----Jeito errado
    campoNome.value = "";
    campoNome.focus();
}

function adcionarAlunoNoEnter(evento){
    if (evento.key === "Enter"){
        adcionarAluno();
    }
}
