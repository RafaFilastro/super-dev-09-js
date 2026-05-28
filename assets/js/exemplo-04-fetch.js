function cadastrarEmpresa(){
    // URL que será chamada do back-end
    // https://dominio/api/v1/empresa
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";
    // resquest body
    const dados = {
        nome: "Rafael LTDA",
        cnpj: "84.703.562/0010-94"
    }
    // fetch é a função que permite fazer requisição do front para o bcak
    fetch(url, {
        method: "POST", // POST serve para cadastrar
        headers: {
            // serve para dizer a forma que está sendo enviado o dado
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados) // converter de objeto(dicionario) para string
    })
        .then(response => response.json()) // converter de string para objeto
        .then(dado => {
            // Codigo executado quando deu certo
            alert("Empresa for cadastrada com sucesso")
        })
        .catch(error => {
            // Codigo executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar cadastrar a empresa");
        })
}


function listarEmpresas(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";

    const textarea = document.getElementById("empresas");

    //Limpar o textarea
    textarea.value = "";
    fetch(url)
        .then(response => response.json())
        .then(empresas => {
            for(let i = 0; i < empresas.length; i++){
                const empresa = empresas[i];
                const texto = `${empresa.id} | ${empresa.nome} | ${empresa.cnpj}\n`;
                textarea.value = textarea.value + texto;
            }
        })
        .catch(error => {
            // Codigo executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar listar as empresas");
        })
}

function apagarEmpresa(){
    const idParaApagar = parseInt(prompt("Digite o id para apagar"));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })
        .then(response => response)
        .then(dados => {
            alert("Empresa apagada com sucesso");
            listarEmpresas();
        })
        .catch(error => {
            //Codigo executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar apagar a empresa");
        })
}

function consultarEmpresaPorId(){
    const idParaConsultar = parseInt(prompt("Digite o id para consultar"));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaConsultar;

    const textarea = document.getElementById("empresas");

    // Limpar o textarea
    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(empresa => {
            const texto = `ID: ${empresa.id}\nNome: ${empresa.nome}\nCNPJ: ${empresa.cnpj}\n`;
            textarea.value = textarea.value + texto;
        })
        .catch(error => {
            //Código executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar listar as empresas");
        })
}

function editarEmpresaPorId(){
    const idParaEditar = parseInt(prompt("Digite o id para Editar"));
    const novoNome = prompt("Digite o novo nome");
    const novoCnpj = prompt("Digite o novo CNPJ");

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaEditar;

    const dados = {
        nome: novoNome,
        cnpj: novoCnpj
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => response)
        .then(empresa => {
            alert("Empresa alterada com sucesso");
            listarEmpresas();
        })
        .catch(error => {
            //Código executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar alterar a empresa");
        })
}
