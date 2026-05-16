/*
1. Criar uma página de destaque de produto
   No HTML criar:
   - um título da página
   - uma caixa principal para representar o produto
   - três botões de cores diferentes
   - um botão para aumentar o tamanho da caixa
   - um botão para voltar ao estilo original
   - uma área de texto dentro da caixa para mostrar o nome do produto

   No CSS criar:
   - um estilo padrão para a caixa
   - pelo menos 3 classes com cores diferentes
   - uma classe para deixar a caixa maior
   - uma classe para destacar a borda da caixa
   - um visual diferente para os botões

   O que deve acontecer:
   - ao clicar em cada botão de cor, a caixa deve trocar de aparência
   - ao clicar no botão de aumentar, a caixa deve mudar de tamanho
   - ao clicar em redefinir, a caixa deve voltar ao estilo inicial
   - o aluno deve manipular classes CSS, sem precisar alterar tudo direto no style
*/

const caixa = document.getElementById("caixa");

function mudarCor(cor){

    caixa.classList.remove("vermelho");
    caixa.classList.remove("azul");
    caixa.classList.remove("verde");

    caixa.classList.add(cor);
    caixa.classList.add("destaque");
}

function aumentarCaixa(){
    caixa.classList.add("grande");
}

function resetarCaixa(){

    caixa.classList.remove("vermelho");
    caixa.classList.remove("azul");
    caixa.classList.remove("verde");

    caixa.classList.remove("grande");
    caixa.classList.remove("destaque");
}

/*
2. Criar uma página de perfil de usuário
   No HTML criar:
   - um campo para digitar o nome
   - um select para escolher o tema do perfil
   - um checkbox para ativar modo destaque
   - um botão para aplicar alterações
   - um card de perfil com nome, descrição e foto ilustrativa

   No CSS criar:
   - um estilo base para o card
   - pelo menos 3 temas visuais diferentes para o card
   - uma classe de destaque para aumentar sombra, borda ou escala
   - estilos para deixar o card visualmente bonito e diferente dos exemplos já passados

   O que deve acontecer:
   - ao clicar no botão, o card deve receber o tema escolhido
   - o nome digitado deve aparecer dentro do card
   - se o modo destaque estiver marcado, o card deve ganhar um visual mais chamativo
   - se o campo nome estiver vazio, deve mostrar mensagem pedindo preenchimento
*/

function aplicarAlteracoes(){
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;
    const tema = document.getElementById("tema").value;
    const destaque = document.getElementById("destaque").checked;
    const card = document.getElementById("card");
    const nomeCard = document.getElementById("nome-card");

    if(nome === ""){
        alert("Digite um nome");
        return;
    }

    card.style.display = "block";
    nomeCard.textContent = nome;

    card.classList.remove("tema-azul");
    card.classList.remove("tema-verde");
    card.classList.remove("tema-vermelho");
    card.classList.add(tema);

    if(destaque){
        card.classList.add("destaque");
    }else{
        card.classList.remove("destaque");
    }
}

/*
3. Criar uma página de cadastro com tipo de contato
   No HTML criar:
   - um campo para digitar o nome
   - opções do tipo radio para escolher entre contato pessoal e contato comercial
   - uma área com campos do contato pessoal
   - uma área com campos do contato comercial
   - um botão para validar o cadastro
   - uma área final para mostrar um resumo do cadastro

   No CSS criar:
   - uma classe para esconder elementos
   - uma classe para destacar a área visível
   - estilos diferentes para os blocos de contato pessoal e comercial
   - um visual melhorado para inputs e botões

   O que deve acontecer:
   - quando escolher contato pessoal, mostrar apenas os campos desse tipo
   - quando escolher contato comercial, mostrar apenas os campos desse tipo
   - ao clicar no botão, apresentar um resumo com os dados preenchidos
   - validar se o tipo foi escolhido
   - validar os campos principais antes de apresentar o resumo

4. Criar uma página de pesquisa com troca de imagem e fundo
   No HTML criar:
   - um campo de texto para pesquisa
   - um botão para pesquisar
   - uma área para exibir imagem
   - uma área para mostrar uma legenda
   - um botão para limpar a pesquisa

   No CSS criar:
   - uma área grande de imagem com borda arredondada
   - estilos diferentes de fundo para cada resultado possível
   - uma animação simples ou transição para a troca da imagem
   - um estilo visual diferente do exemplo já passado

   O que deve acontecer:
   - ao pesquisar uma palavra específica, deve trocar a imagem
   - também deve alterar a legenda da imagem
   - a área da imagem deve mudar de cor de fundo conforme o resultado encontrado
   - caso a pesquisa não corresponda a nenhum resultado esperado, mostrar uma imagem padrão
   - o botão limpar deve remover a imagem, limpar o campo e restaurar o estado inicial

5. Criar uma página de animação de banner
   No HTML criar:
   - uma faixa ou banner principal
   - um botão para iniciar animação de estilos
   - um botão para parar e voltar ao início
   - um texto dentro do banner

   No CSS criar:
   - pelo menos 5 classes com estilos bem diferentes entre si
   - mudar cor de fundo, cor do texto, borda, sombra e tamanho
   - um visual chamativo para parecer um banner promocional

   O que deve acontecer:
   - ao clicar em iniciar, o banner deve passar por vários estilos automaticamente
   - a troca deve acontecer com tempo entre uma alteração e outra
   - o texto do banner também pode mudar durante a animação
   - ao clicar em parar, o banner deve voltar ao estilo inicial
   - o exercício deve trabalhar troca de classes, tempo e atualização visual na tela
*/
