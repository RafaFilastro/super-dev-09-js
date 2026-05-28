// Objeto JavaScript com dados de um aluno
let aluno = {
    nome: "Maria",
    idade: 16,
    curso: "JavaScript"
};

// Variável que vai guardar o objeto convertido em texto JSON
let alunoTexto = "";

// Função chamada ao clicar no primeiro botão
function transformarObjetoEmTexto() {
    // JSON.stringify transforma um objeto JavaScript em texto JSON
    alunoTexto = JSON.stringify(aluno);

    // Mostra o resultado na tela
    document.getElementById("resultado").innerText = alunoTexto;
}

// Função chamada ao clicar no segundo botão
function transformarTextoEmObjeto() {
    // JSON.parse transforma um texto JSON em objeto JavaScript
    let alunoObjeto = JSON.parse(alunoTexto);

    // Mostra uma informação do objeto na tela
    document.getElementById("resultado").innerText =
        "Nome: " + alunoObjeto.nome +
        " | Idade: " + alunoObjeto.idade +
        " | Curso: " + alunoObjeto.curso;
}
