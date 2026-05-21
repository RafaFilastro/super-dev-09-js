// Cria uma variável para guardar a quantidade de gols do Brasil, iniciando com 0
let golsBrasil = 0;

// Cria uma variável para guardar a quantidade de gols da Alemanha, iniciando com 0
let golsAlemanha = 0;

// Guarda o horário em que a partida começou
let horarioInicioPartida = new Date();

// Cria uma variável para contar quantas partidas já foram finalizadas
let partidas = 0;

// Busca no HTML o elemento que mostra os pontos do time azul
const pontosAzul = document.getElementById("pontos-azul");

// Busca no HTML o elemento que mostra os pontos do time vermelho
const pontosVermelho = document.getElementById("pontos-vermelho");

// Busca no HTML a primeira div que possui a classe resultado-partida
const divResultadoPartida = document.getElementsByClassName("resultado-partida")[0];

// Busca no HTML a primeira div que possui a classe partidas
const divPartidas = document.getElementsByClassName("partidas")[0];


// Cria uma função para adicionar ponto ao Brasil
function adicionarPontoAzul() {

    // Soma 1 gol para o Brasil
    golsBrasil = golsBrasil + 1;

    // Atualiza no HTML a quantidade de gols do Brasil
    pontosAzul.innerText = golsBrasil;

    // Chama a função que atualiza o status da partida
    atualizarStatusPartida();
}


// Cria uma função para adicionar ponto à Alemanha
function adicionarPontoVermelho() {

    // Soma 1 gol para a Alemanha
    golsAlemanha = golsAlemanha + 1;

    // Atualiza no HTML a quantidade de gols da Alemanha
    pontosVermelho.innerText = golsAlemanha;

    // Chama a função que atualiza o status da partida
    atualizarStatusPartida();
}


// Cria uma função para resetar o jogo
function resetarJogo() {

    // Zera os gols do Brasil
    golsBrasil = 0;

    // Zera os gols da Alemanha
    golsAlemanha = 0;

    // Pega o horário de início da nova partida
    horarioInicioPartida = new Date();

    // Atualiza no HTML os pontos do Brasil para 0
    pontosAzul.innerText = golsBrasil;

    // Atualiza no HTML os pontos da Alemanha para 0
    pontosVermelho.innerText = golsAlemanha;

    // Atualiza o status da partida depois de resetar
    atualizarStatusPartida();
}


// Cria uma função para atualizar o status da partida atual
function atualizarStatusPartida() {

    // Cria uma variável vazia para guardar o texto do resultado atual
    let resultado = "";

    // Verifica se o Brasil tem mais gols que a Alemanha
    if (golsBrasil > golsAlemanha) {

        // Define o texto informando que o Brasil está ganhando
        resultado = "Brasil ganhando";

    // Verifica se a Alemanha tem mais gols que o Brasil
    } else if (golsAlemanha > golsBrasil) {

        // Define o texto informando que a Alemanha está ganhando
        resultado = "Alemanha ganhando";

    // Caso nenhum time esteja ganhando, significa que está empatado
    } else {

        // Define o texto informando que a partida está empatada
        resultado = "A partida está empatada!";
    }

    // Cria uma nova div pelo JavaScript
    const divCardStatus = document.createElement("div");

    // Adiciona a classe card-status na div criada
    divCardStatus.classList.add("card-status");

    // Cria um título h2 pelo JavaScript
    const h2StatusPartida = document.createElement("h2");

    // Define o texto que aparecerá dentro do h2
    h2StatusPartida.innerText = "Status da partida atual";

    // Cria um parágrafo para mostrar o horário de início
    const pInicio = document.createElement("p");

    // Formata a hora de início da partida no padrão brasileiro
    const horaFormatada = horarioInicioPartida.toLocaleTimeString("pt-BR", {

        // Define que a hora terá dois dígitos
        hour: "2-digit",

        // Define que os minutos terão dois dígitos
        minute: "2-digit",

        // Define que os segundos terão dois dígitos
        second: "2-digit"
    });

    // Coloca o horário formatado dentro do parágrafo
    pInicio.innerText = `Início: ${horaFormatada}`;

    // Cria um parágrafo para mostrar o placar atual
    const pPlacar = document.createElement("p");

    // Define o texto do placar atual da partida
    pPlacar.innerText = `Brasil ${golsBrasil} x ${golsAlemanha} Alemanha`;

    // Cria um parágrafo para mostrar o status da partida
    const pStatus = document.createElement("p");

    // Coloca dentro do parágrafo o resultado atual da partida
    pStatus.innerText = resultado;

    // Adiciona o título dentro da div do card de status
    divCardStatus.appendChild(h2StatusPartida);

    // Adiciona o parágrafo com o início da partida dentro do card
    divCardStatus.appendChild(pInicio);

    // Adiciona o parágrafo com o placar dentro do card
    divCardStatus.appendChild(pPlacar);

    // Adiciona o parágrafo com o status dentro do card
    divCardStatus.appendChild(pStatus);

    // Remove todos os elementos que estavam dentro da div resultado-partida
    divResultadoPartida.innerHTML = "";

    // Adiciona o novo card de status dentro da div resultado-partida
    divResultadoPartida.appendChild(divCardStatus);
}


// Cria uma função para finalizar a partida atual
function finalizar() {

    // Soma 1 na quantidade de partidas finalizadas
    partidas++;

    // Cria uma nova div para guardar as informações da partida finalizada
    const divCardPartida = document.createElement("div");

    // Adiciona a classe card-partida na div criada
    divCardPartida.classList.add("card-partida");

    // Cria um título h3 para mostrar o número da partida
    const h3 = document.createElement("h3");

    // Define o texto do h3 com o número da partida
    h3.innerText = `Partida ${partidas}`;

    // Cria um parágrafo para mostrar o horário de início da partida
    const pInicio = document.createElement("p");

    // Formata o horário de início da partida no padrão brasileiro
    const horaInicioFormatada = horarioInicioPartida.toLocaleTimeString("pt-BR", {

        // Define que a hora terá dois dígitos
        hour: "2-digit",

        // Define que os minutos terão dois dígitos
        minute: "2-digit",

        // Define que os segundos terão dois dígitos
        second: "2-digit"
    });

    // Coloca o horário de início formatado dentro do parágrafo
    pInicio.innerText = `Início: ${horaInicioFormatada}`;

    // Guarda o horário em que a partida foi finalizada
    const horarioFimPartida = new Date();

    // Formata o horário final da partida no padrão brasileiro
    const horarioFimPartidaFormatada = horarioFimPartida.toLocaleTimeString("pt-BR", {

        // Define que a hora terá dois dígitos
        hour: "2-digit",

        // Define que os minutos terão dois dígitos
        minute: "2-digit",

        // Define que os segundos terão dois dígitos
        second: "2-digit"
    });

    // Cria um parágrafo para mostrar o horário final da partida
    const pFim = document.createElement("p");

    // Coloca o horário final formatado dentro do parágrafo
    pFim.innerText = `Fim: ${horarioFimPartidaFormatada}`;

    // Cria um parágrafo para mostrar a duração da partida
    const pDuracao = document.createElement("p");

    // Calcula a duração da partida usando o horário inicial e o horário final
    const duracao = calcularDuracao(horarioInicioPartida, horarioFimPartida);

    // Coloca a duração da partida dentro do parágrafo
    pDuracao.innerText = `Duração: ${duracao}`;

    // Cria um parágrafo para mostrar o placar final
    const pPlacar = document.createElement("p");

    // Define o texto do placar final da partida
    pPlacar.innerText = `Resultado: Brasil ${golsBrasil} x ${golsAlemanha} Alemanha`;

    // Cria uma imagem pelo JavaScript
    const imagem = document.createElement("img");

    // Define a largura da imagem como 300 pixels
    imagem.style.width = "300px";

    // Cria um parágrafo para mostrar o resultado final da partida
    const pResultado = document.createElement("p");

    // Verifica se o Brasil fez mais gols que a Alemanha
    if (golsBrasil > golsAlemanha) {

        // Define a imagem que será exibida quando o Brasil ganhar
        imagem.setAttribute("src", "./assets/imagens/brasil.png");

        // Define o texto informando que o Brasil ganhou
        pResultado.innerText = "Resultado: Brasil ganhou";

    // Verifica se a Alemanha fez mais gols que o Brasil
    } else if (golsAlemanha > golsBrasil) {

        // Define o texto informando que a Alemanha ganhou
        pResultado.innerText = "Resultado: Alemanha ganhou";

        // Define a imagem que será exibida quando a Alemanha ganhar
        imagem.setAttribute("src", "./assets/imagens/alemanha.jpg");

    // Caso nenhum time tenha mais gols, a partida terminou empatada
    } else {

        // Define o texto informando que houve empate
        pResultado.innerText = "Resultado: Empatou";

        // Define a imagem que será exibida quando houver empate
        imagem.setAttribute("src", "./assets/imagens/empate.png");
    }

    // Adiciona o título, o horário de início e o horário final dentro do card
    divCardPartida.append(h3, pInicio, pFim);

    // Adiciona o parágrafo da duração dentro do card
    divCardPartida.appendChild(pDuracao);

    // Adiciona o parágrafo do placar dentro do card
    divCardPartida.appendChild(pPlacar);

    // Adiciona o parágrafo do resultado dentro do card
    divCardPartida.appendChild(pResultado);

    // Adiciona a imagem dentro do card
    divCardPartida.appendChild(imagem);

    // Verifica se já existe mais de uma partida finalizada
    if (partidas > 1) {

        // Busca a primeira partida que já está aparecendo na tela
        const primeiraPartida = document.getElementsByClassName("card-partida")[0];

        // Insere a nova partida antes da primeira, deixando a mais recente no topo
        divPartidas.insertBefore(divCardPartida, primeiraPartida);

    // Caso seja a primeira partida finalizada
    } else {

        // Adiciona o card da partida dentro da div de partidas
        divPartidas.appendChild(divCardPartida);
    }

    // Reseta o jogo para iniciar uma nova partida
    resetarJogo();
}


// Cria uma função para calcular a duração da partida
function calcularDuracao(inicio, fim) {

    // Calcula a diferença entre o horário final e o horário inicial
    const diferencaEmMilissegundos = fim - inicio;

    // Converte a diferença de milissegundos para segundos
    const segundosTotais = Math.floor(diferencaEmMilissegundos / 1000);

    // Calcula a quantidade de minutos completos
    const minutos = Math.floor(segundosTotais / 60);

    // Calcula os segundos que sobraram depois de remover os minutos completos
    const segundos = segundosTotais % 60;

    // Retorna a duração formatada em minutos e segundos
    return `${minutos} minuto(s) e ${segundos} segundo(s)`;
}


// Executa a função atualizarStatusPartida assim que o JavaScript for carregado
atualizarStatusPartida();
