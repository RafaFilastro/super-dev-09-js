/*
------------------------------------------Exercicio 01---------------------------------------------------

1. Criar uma página de cardápio digital
   No HTML criar:
   - um título da página
   - um campo para digitar o nome do prato
   - um campo para digitar o preço do prato
   - um select para escolher a categoria: lanche, bebida ou sobremesa
   - um botão para adicionar ao cardápio
   - uma área para mostrar os pratos cadastrados

   No CSS criar:
   - um estilo para o formulário
   - uma classe para o card de cada prato
   - classes diferentes para lanche, bebida e sobremesa
   - estilos para deixar o preço em destaque
   - um visual organizado para o cardápio

   O que deve acontecer:
   - ao clicar no botão, criar um novo card com JavaScript
   - o card deve mostrar nome, preço e categoria do prato
   - cada categoria deve ter uma aparência diferente
   - se algum campo estiver vazio, mostrar uma mensagem de alerta
   - depois de adicionar, os campos devem ser limpos
*/

function adcionarNoCardapio() {
    const nomePrato = document.getElementById("nome");
    const nome = nomePrato.value.charAt(0).toUpperCase() + nomePrato.value.slice(1).toLowerCase();

    const precoPrato = document.getElementById("preco");
    const preco = Number(precoPrato.value);

    const tipoPrato = document.getElementById("selecao");
    const categoria = tipoPrato.value;

    if (nome.length === 0) {
        alert("Digite um prato válido");
        return;
    }
    if (precoPrato.value === "") {
        alert("Digite um valor válido");
        return;
    }
    if (categoria === "") {
        alert("Selecione uma categoria");
        return;
    }

    const divCardapio = document.createElement("div");
    divCardapio.classList.add("cardapio");
    divCardapio.classList.add(categoria);

    const pNomePrato = document.createElement("h3");
    pNomePrato.innerText = "Prato: " + nome;

    const pPrecoPrato = document.createElement("h3");
    pPrecoPrato.innerText = "Preço R$: " + preco.toFixed(2);
    pPrecoPrato.classList.add("preco");

    const pTipoPrato = document.createElement("h3");
    pTipoPrato.innerText = "Categoria: " + categoria;

    divCardapio.appendChild(pNomePrato);
    divCardapio.appendChild(pPrecoPrato);
    divCardapio.appendChild(pTipoPrato);

    const divCardapioPronto = document.getElementsByClassName("cardapio-pronto")[0];

    divCardapioPronto.appendChild(divCardapio);
    divCardapioPronto.prepend(divCardapio);

    nomePrato.value = "";
    precoPrato.value = "";
    tipoPrato.value = "";

    nomePrato.focus();


}
/*
------------------------------------------Exercicio 02---------------------------------------------------

2. Criar uma página de mural de recados
   No HTML criar:
   - um título da página
   - um campo para digitar o nome da pessoa
   - uma área de texto para digitar o recado
   - um botão para publicar recado
   - uma área para mostrar todos os recados publicados

   No CSS criar:
   - um estilo para a área de digitação
   - uma classe para cada recado publicado
   - uma classe para destacar o nome da pessoa
   - uma classe para mostrar a data ou horário
   - um visual parecido com cartões de aviso

   O que deve acontecer:
   - ao clicar no botão, criar um novo recado na tela
   - o recado deve mostrar o nome da pessoa
   - o recado deve mostrar o texto digitado
   - o recado deve mostrar o horário em que foi publicado
   - os recados mais novos devem aparecer antes dos antigos
   - se o nome ou o recado estiver vazio, mostrar uma mensagem de alerta
*/

function publicarMensagem(){
   const nomeDigitadoPessoa = document.getElementById("pessoa")
   const pessoa = nomeDigitadoPessoa.value.charAt(0).toUpperCase() + nomeDigitadoPessoa.value.slice(1).toLowerCase();
   const mensagemDigitada = document.getElementById("mensagem")
   const mensagem = mensagemDigitada.value;

   const horaMinuto = new Date();
   const hora = horaMinuto.getHours();
   const minutos = horaMinuto.getMinutes();
   const segundos = horaMinuto.getSeconds(2);
   const horario = hora + ":" + minutos + ":" + segundos;

   if (pessoa === ""){
      alert("Digite um nome")
      return;
   }
   if (mensagem === ""){
      alert("Digite uma mensagem")
      return;
   }

   const divTextoPublicado = document.createElement("div")
   divTextoPublicado.classList.add("texto-publicado");

   const h3Nome = document.createElement("h3")
   h3Nome.innerText = "Recado de " + pessoa + "."

   const textoDigitado = document.createElement("p")
   textoDigitado.innerText = mensagem;

   const pHorario = document.createElement("p")
   pHorario.innerText = "Publica às: " + horario;

   divTextoPublicado.appendChild(h3Nome)
   divTextoPublicado.appendChild(textoDigitado)
   divTextoPublicado.appendChild(pHorario)

   const divPublicadas = document.getElementsByClassName("publicadas")[0];
   divPublicadas.appendChild(divTextoPublicado)

   divPublicadas.prepend(divTextoPublicado);

   nomeDigitadoPessoa.value = ""
   mensagemDigitada.value = ""

   nomeDigitadoPessoa.focus();
}

/*
3. Criar uma página de controle de biblioteca
   No HTML criar:
   - um título da página
   - um campo para digitar o nome do livro
   - um campo para digitar o autor
   - um select para escolher o status: disponível ou emprestado
   - um botão para cadastrar livro
   - uma área para mostrar os livros cadastrados

   No CSS criar:
   - uma classe para o card do livro
   - uma classe para livro disponível
   - uma classe para livro emprestado
   - estilos diferentes para os status
   - um visual organizado para a biblioteca

   O que deve acontecer:
   - ao cadastrar, criar um novo card de livro com JavaScript
   - o card deve mostrar nome do livro, autor e status
   - livros disponíveis devem ter uma aparência diferente dos emprestados
   - cada livro deve ter um botão para alterar o status
   - ao clicar no botão, o status deve trocar entre disponível e emprestado
   - o visual do card deve mudar junto com o status
*/

function cadastroDeLivros() {
   const nomeDoLivro = document.getElementById("livro");
   const livro = nomeDoLivro.value.charAt(0).toUpperCase() + nomeDoLivro.value.slice(1).toLowerCase();

   const nomeDoAutor = document.getElementById("autor");
   const autor = nomeDoAutor.value.charAt(0).toUpperCase() + nomeDoAutor.value.slice(1).toLowerCase();

   const definaStatus = document.getElementById("status");
   let statusCategoria = definaStatus.value;

   if (livro === "") {
        alert("Digite o nome do Livro");
        return;
   }
   if (autor === "") {
        alert("Digite o nome do Autor");
        return;
   }
   if (statusCategoria === "") {
        alert("Defina o status");
        return;
   }

   const divBibliotecaAtualizada = document.createElement("div");
   divBibliotecaAtualizada.classList.add("biblioteca-atualizada", statusCategoria);
   const h3NomeLivro = document.createElement("h3");
   h3NomeLivro.innerText = "Nome do livro: " + livro;
   const h3NomeAutor = document.createElement("h3");
   h3NomeAutor.innerText = "Nome do Autor: " + autor;
   const h3Status = document.createElement("h3");
   h3Status.innerText = "Status : " + statusCategoria;
   const h3Button = document.createElement("button");
   h3Button.innerText = "Alterar Status";
   h3Button.classList.add("botao-status");

   h3Button.addEventListener("click", () => {
   if (h3Status.innerText === "Status : disponivel") {
        h3Status.innerText = "Status : emprestado";
        divBibliotecaAtualizada.className = "biblioteca-atualizada emprestado";
   } else {
        h3Status.innerText = "Status : disponivel";
        divBibliotecaAtualizada.className = "biblioteca-atualizada disponivel";
   }
});

   divBibliotecaAtualizada.appendChild(h3NomeLivro);
   divBibliotecaAtualizada.appendChild(h3NomeAutor);
   divBibliotecaAtualizada.appendChild(h3Status);
   divBibliotecaAtualizada.appendChild(h3Button);

   const livrosCadastrados = document.getElementsByClassName("livros-cadastrados")[0];
   livrosCadastrados.prepend(divBibliotecaAtualizada);

   nomeDoLivro.value = "";
   nomeDoAutor.value = "";
   definaStatus.value = "";

   nomeDoLivro.focus();
}

/*

4. Criar uma página de pedidos de pizzaria
   No HTML criar:
   - um título da página
   - um campo para digitar o nome do cliente
   - um select para escolher o sabor da pizza
   - um campo para digitar a quantidade
   - um botão para adicionar pedido
   - uma área para listar os pedidos feitos

   No CSS criar:
   - um estilo para o formulário de pedido
   - uma classe para cada pedido
   - uma classe para destacar pedidos grandes
   - estilos para botões
   - um visual parecido com uma comanda

   O que deve acontecer:
   - ao clicar no botão, criar um novo pedido na tela
   - o pedido deve mostrar cliente, sabor e quantidade
   - se a quantidade for maior que 3, o pedido deve receber uma classe de destaque
   - o sistema deve mostrar o horário em que o pedido foi feito
   - deve existir um botão em cada pedido para marcar como entregue
   - ao marcar como entregue, o pedido deve mudar de aparência
*/

function adcionarPedido(){
   const nomeCliente = document.getElementById("cliente")
   const cliente = nomeCliente.value.charAt(0).toUpperCase() + nomeCliente.value.slice(1).toLowerCase()
   const totalPizzas = document.getElementById("quantidadepizzas");
   const quantidadepizzas = Number(totalPizzas.value);
   const escolhaSabor = document.getElementById("sabor")
   const saborEscolhido = escolhaSabor.value;

   const horaMinuto = new Date();
   const hora = horaMinuto.getHours();
   const minutos = horaMinuto.getMinutes();
   const segundos = horaMinuto.getSeconds(2);
   const horario = hora + ":" + minutos + ":" + segundos;

   if(cliente.length === 0){
      alert("Digite um nome valído");
      return;
   }
   if(saborEscolhido === ""){
      alert("Escolha um sabor");
      return;
   }
   if(quantidadepizzas === 0){
      alert("Digite uma quantidade valída");
      return;
   }

   const divCriarPedidos = document.createElement("div");
   divCriarPedidos.classList.add("pedidos-realizados");
      if (quantidadepizzas > 3) {
      divCriarPedidos.classList.add("pedido-grande");
      }

   const h3NomeCliente = document.createElement("h3");
   h3NomeCliente.innerText = "Nome: " + cliente;
   const h3SaborEscolhido = document.createElement("h3");
   h3SaborEscolhido.innerText = "Sabor: " + saborEscolhido;
   const h3QuantidadePizzas = document.createElement("h3");
   h3QuantidadePizzas.innerText = "Quantidade: " + quantidadepizzas;
   const pHorario = document.createElement("p")
   pHorario.innerText = "Pedido realizado às " + horario;

   let entregue = false;

   const h3Status = document.createElement("h3");
   h3Status.innerText = "Entregue: Não";
   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";

   checkbox.addEventListener("change", () => {
    if (checkbox.checked === true) {
        h3Status.innerText = "Entregue: Sim";
        divCriarPedidos.classList.add("pedido-entregue");
    } else {
        h3Status.innerText = "Entregue: Não";
        divCriarPedidos.classList.remove("pedido-entregue");
    }
   });


   divCriarPedidos.appendChild(h3NomeCliente);
   divCriarPedidos.appendChild(h3QuantidadePizzas);
   divCriarPedidos.appendChild(h3SaborEscolhido);
   divCriarPedidos.appendChild(h3Status);
   divCriarPedidos.appendChild(checkbox);
   divCriarPedidos.appendChild(pHorario)


   const pizzasFinalizadas = document.getElementsByClassName("pedidios-feitos")[0];
   pizzasFinalizadas.prepend(divCriarPedidos);

   nomeCliente.value = ""
   totalPizzas.value = ""
   escolhaSabor.value = ""

   nomeCliente.focus();
}

/*
5. Criar uma página de ranking de jogadores
   No HTML criar:
   - um título da página
   - um campo para digitar o nome do jogador
   - um campo para digitar a pontuação
   - um botão para adicionar ao ranking
   - uma área para mostrar o ranking
   - uma área para mostrar o maior pontuador

   No CSS criar:
   - uma classe para cada jogador do ranking
   - uma classe para destacar o primeiro lugar
   - uma classe para destacar pontuações altas
   - estilos para deixar o ranking visualmente bonito
   - um visual diferente para o maior pontuador

   O que deve acontecer:
   - ao clicar no botão, criar um novo item no ranking
   - o item deve mostrar o nome do jogador e sua pontuação
   - se a pontuação for alta, o card deve receber uma classe especial
   - o sistema deve verificar quem tem a maior pontuação
   - o maior pontuador deve aparecer em uma área separada
   - os elementos devem ser criados usando createElement e adicionados com appendChild
*/

const jogadores = [];

function adcionarRanking() {

   const nomeJogador = document.getElementById("jogador");
   const jogador = nomeJogador.value;
   const pontosJogador = document.getElementById("pontos");
   const pontos = Number(pontosJogador.value);

   if (jogador === "") {
      alert("Digite um nome");
      return;
   }
   if (pontos === 0) {
      alert("Digite uma pontuação válida");
      return;
   }
   jogadores.push({
      nome: jogador,
      pontos: pontos
   });

   jogadores.sort(function(a, b) {

      if (a.pontos < b.pontos) {
         return 1;
      }
      if (a.pontos > b.pontos) {
         return -1;
      }
      return 0;

   });
   const rankingFinal = document.getElementsByClassName("ranking")[0];

   rankingFinal.innerHTML = "";

   for (let i = 0; i < jogadores.length; i++) {

      const divRankingAtualizado = document.createElement("div");
      divRankingAtualizado.classList.add("atualizacao");
         if (jogadores[i].pontos >= 100) {
            divRankingAtualizado.classList.add("pontuacao-alta");
      }
      const h3Posicao = document.createElement("h3");
      h3Posicao.innerText = "Posição: " + (i + 1);
      const h3NomeJogador = document.createElement("h3");
      h3NomeJogador.innerText = "Nome do jogador: " + jogadores[i].nome;
      const h3PontosJogador = document.createElement("h3");
      h3PontosJogador.innerText = "Pontuação: " + jogadores[i].pontos;

      divRankingAtualizado.appendChild(h3Posicao);
      divRankingAtualizado.appendChild(h3NomeJogador);
      divRankingAtualizado.appendChild(h3PontosJogador);

      rankingFinal.appendChild(divRankingAtualizado);
   }

   nomeJogador.value = "";
   pontosJogador.value = "";

   nomeJogador.focus();
}
