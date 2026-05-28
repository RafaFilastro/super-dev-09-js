/*
EXERCÍCIOS - FETCH API COM FRONT-END E BACK-END

https://api.franciscosensaulas.com/swagger/index.html

Objetivo geral:
Criar páginas HTML com botões que disparam requisições para o back-end usando fetch.
Os dados retornados pelo back-end devem ser apresentados em um textarea.

Regras gerais:
- Criar um botão para cada ação.
- Criar uma função JavaScript para cada botão.
- Usar fetch para fazer as requisições.
- Usar .then() e .catch().
- Usar JSON.stringify() quando enviar dados no body.
- Usar response.json() quando o back-end retornar JSON.
- Mostrar os dados retornados dentro de um textarea.
- Usar prompt() para solicitar ID e dados de cadastro/edição.
- Exibir alert() quando cadastrar, editar ou apagar com sucesso.
- Exibir alert() quando ocorrer erro.
- Após cadastrar, editar ou apagar, chamar novamente a função de listar.


1. CRUD DE PRODUTOS

Criar uma página para comunicação com o back-end de produtos.

No HTML criar:
- Um título: "Cadastro de Produtos"
- Um botão para cadastrar produto
- Um botão para listar produtos
- Um botão para consultar produto por ID
- Um botão para editar produto
- Um botão para apagar produto
- Um textarea com id="produtos"

No JavaScript criar as funções:
- cadastrarProduto()
- listarProdutos()
- consultarProdutoPorId()
- editarProduto()
- apagarProduto()

Endpoints que devem ser utilizados:

GET
/api/v1/empresa/produtos
Obtém todos os produtos

POST
/api/v1/empresa/produtos
Cria um novo produto

GET
/api/v1/empresa/produtos/{id}
Obtém um produto pelo ID

PUT
/api/v1/empresa/produtos/{id}
Atualiza um produto

DELETE
/api/v1/empresa/produtos/{id}
Exclui um produto

O que deve acontecer:

Na função cadastrarProduto():
- Solicitar os dados do produto usando prompt().
- Criar um objeto JavaScript com os dados do produto.
- Enviar os dados para o back-end usando POST.
- Converter o objeto para JSON usando JSON.stringify().
- Mostrar mensagem de sucesso.
- Chamar listarProdutos() após cadastrar.
*/

function cadastrarProduto(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";

    const nomeProduto = prompt("Digite o produto");
    const valorProduto = parseFloat(prompt("Digite o valor do produto"));
    const categoria = prompt("Informe a categoria")

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify({
            nome: nomeProduto,
            preco: valorProduto,
            categoria: categoria
            })
        })
        .then(response => response.json())
        .then(produto => {
            alert("Produto cadastrado com sucesso");
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar cadastrar o produto");
        });
}

/*
Na função listarProdutos():
- Fazer uma requisição GET para buscar todos os produtos.
- Limpar o textarea antes de apresentar os dados.
- Percorrer a lista de produtos com for.
- Mostrar no textarea os dados de cada produto.
- Exemplo de apresentação:
  ID: 1 | Nome: Teclado | Preço: 120.50
*/
function listarProduto(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";
    const textarea = document.getElementById("produtos");

    textarea.value = "";
    
    fetch(url)
        .then(response => response.json())
        .then(produtos => {
            for(let i = 0; i < produtos.length; i++){
                const produto = produtos[i];
                const texto = `ID: ${produto.id} | Nome: ${produto.nome} | Preço R$:${produto.preco.toFixed(2)} | Categoria: ${produto.categoria}\n`;
                textarea.value = textarea.value + texto;
            }
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar listar os produtos")
        })
}

/*
Na função consultarProdutoPorId():
- Solicitar o ID do produto usando prompt().
- Fazer uma requisição GET usando o ID informado.
- Limpar o textarea.
- Mostrar os dados do produto encontrado no textarea.
*/
function consultarProdutoPorId(){
    const idParaConsultar = parseInt(prompt("Digite o id para consulta."));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaConsultar;

    const textarea = document.getElementById("produtos");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(produtos => {
            const texto = `ID: ${produtos.id} \nNome: ${produtos.nome} \nPreço R$${produtos.preco.toFixed(2)} \nCategoria: ${produtos.categoria}`;
            textarea.value = textarea.value + texto;
        })
        .catch(error => {
            console.log("Erro: " + error);
            alert("Ocorreu um erro ao buscar o produto por ID");
        })
}

/*
Na função editarProduto():
- Solicitar o ID do produto usando prompt().
- Solicitar os novos dados do produto usando prompt().
- Criar um objeto JavaScript com os novos dados.
- Enviar os dados usando PUT.
- Mostrar mensagem de sucesso.
- Chamar listarProdutos() após editar.
*/
function editarProduto(){
    const idParaEditar = parseInt(prompt("Digite o id para editar"));

    const nomeProduto = prompt("Digite o produto");
    const valorProduto = prompt("Digite o valor do produto");
    const categoria = prompt("Informe a categoria")

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaEditar;

    const dados = {
        nome: nomeProduto,
        preco: valorProduto,
        categoria: categoria
    }
    fetch(url, {
       method: "PUT",
       headers: {
            "Content-Type": "application/json"
       },
       body: JSON.stringify(dados)
    })
    .then(response => response)
    .then(response => {
        alert("Produtos alterados com sucesso");
        listarProduto();
    })
    .catch(error => {
        console.log("ERRO: " + error);
        alert("Ocorreu um erro ao buscar por ID");
    })
}
/*
Na função apagarProduto():
- Solicitar o ID do produto usando prompt().
- Fazer uma requisição DELETE usando o ID informado.
- Mostrar mensagem de sucesso.
- Chamar listarProdutos() após apagar.
*/
function apagarProdutos(){

}

/*
2. CRUD DE ATENDIMENTOS

Criar uma página para comunicação com o back-end de atendimentos.

No HTML criar:
- Um título: "Cadastro de Atendimentos"
- Um botão para cadastrar atendimento
- Um botão para listar atendimentos
- Um botão para consultar atendimento por ID
- Um botão para editar atendimento
- Um botão para apagar atendimento
- Um textarea com id="atendimentos"

No JavaScript criar as funções:
- cadastrarAtendimento()
- listarAtendimentos()
- consultarAtendimentoPorId()
- editarAtendimento()
- apagarAtendimento()

Endpoints que devem ser utilizados:

GET
/api/v1/trabalho/atendimentos
Obtém todos os atendimentos

POST
/api/v1/trabalho/atendimentos
Cria um novo atendimento

GET
/api/v1/trabalho/atendimentos/{id}
Obtém um atendimento pelo ID

PUT
/api/v1/trabalho/atendimentos/{id}
Atualiza um atendimento

DELETE
/api/v1/trabalho/atendimentos/{id}
Exclui um atendimento

O que deve acontecer:

Na função listarAtendimentos():
- Fazer uma requisição GET para buscar todos os atendimentos.
- Limpar o textarea antes de apresentar os dados.
- Percorrer a lista de atendimentos com for.
- Mostrar no textarea os dados de cada atendimento.
- Exemplo de apresentação:
  ID: 1 | Nome: Maria | Descrição: Atendimento realizado

Na função cadastrarAtendimento():
- Solicitar os dados do atendimento usando prompt().
- Criar um objeto JavaScript com os dados informados.
- Enviar os dados para o back-end usando POST.
- Usar o header "Content-Type": "application/json".
- Converter o objeto para JSON usando JSON.stringify().
- Mostrar mensagem de sucesso.
- Chamar listarAtendimentos() após cadastrar.

Na função consultarAtendimentoPorId():
- Solicitar o ID do atendimento usando prompt().
- Fazer uma requisição GET usando o ID informado.
- Limpar o textarea.
- Mostrar os dados do atendimento encontrado no textarea.

Na função editarAtendimento():
- Solicitar o ID do atendimento usando prompt().
- Solicitar os novos dados usando prompt().
- Criar um objeto JavaScript com os novos dados.
- Enviar os dados usando PUT.
- Mostrar mensagem de sucesso.
- Chamar listarAtendimentos() após editar.

Na função apagarAtendimento():
- Solicitar o ID do atendimento usando prompt().
- Fazer uma requisição DELETE usando o ID informado.
- Mostrar mensagem de sucesso.
- Chamar listarAtendimentos() após apagar.

3. CRUD DE TRANSPORTES

Criar uma página para comunicação com o back-end de transportes.

No HTML criar:
- Um título: "Cadastro de Transportes"
- Um botão para cadastrar transporte
- Um botão para listar transportes
- Um botão para consultar transporte por ID
- Um botão para editar transporte
- Um botão para apagar transporte
- Um textarea com id="transportes"

No JavaScript criar as funções:
- cadastrarTransporte()
- listarTransportes()
- consultarTransportePorId()
- editarTransporte()
- apagarTransporte()

Endpoints que devem ser utilizados:

GET
/api/v1/trabalho/transportes
Obtém todos os transportes

POST
/api/v1/trabalho/transportes
Cria um novo transporte

GET
/api/v1/trabalho/transportes/{id}
Obtém um transporte pelo ID

PUT
/api/v1/trabalho/transportes/{id}
Atualiza um transporte

DELETE
/api/v1/trabalho/transportes/{id}
Exclui um transporte

O que deve acontecer:

Na função listarTransportes():
- Fazer uma requisição GET para buscar todos os transportes.
- Limpar o textarea antes de apresentar os dados.
- Percorrer a lista de transportes com for.
- Mostrar no textarea os dados de cada transporte.
- Exemplo de apresentação:
  ID: 1 | Origem: Centro | Destino: Bairro Norte

Na função cadastrarTransporte():
- Solicitar os dados do transporte usando prompt().
- Criar um objeto JavaScript com os dados informados.
- Enviar os dados para o back-end usando POST.
- Usar o header "Content-Type": "application/json".
- Converter o objeto para JSON usando JSON.stringify().
- Mostrar mensagem de sucesso.
- Chamar listarTransportes() após cadastrar.

Na função consultarTransportePorId():
- Solicitar o ID do transporte usando prompt().
- Fazer uma requisição GET usando o ID informado.
- Limpar o textarea.
- Mostrar os dados do transporte encontrado no textarea.

Na função editarTransporte():
- Solicitar o ID do transporte usando prompt().
- Solicitar os novos dados do transporte usando prompt().
- Criar um objeto JavaScript com os novos dados.
- Enviar os dados usando PUT.
- Mostrar mensagem de sucesso.
- Chamar listarTransportes() após editar.

Na função apagarTransporte():
- Solicitar o ID do transporte usando prompt().
- Fazer uma requisição DELETE usando o ID informado.
- Mostrar mensagem de sucesso.
- Chamar listarTransportes() após apagar.

*/
