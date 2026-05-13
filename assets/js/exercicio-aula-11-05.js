/*
Nome dos arquivos exercicio-01-seletores.html e exercicio-01-seletores.js

1. Criar uma função exercicio01CompararDoisNumeros
   No HTML criar:
   - um campo para digitar o primeiro número
   - um campo para digitar o segundo número
   - um botão para executar a função

   O que a função deve fazer:
   - pegar os dois números digitados
   - verificar qual deles é o maior
   - informar também se os dois números são iguais
   - mostrar o resultado em uma mensagem
   - validar se os dois campos foram preenchidos corretamente
*/

function exercicio01CompararDoisNumeros() {
  const campoNumero1 = document.getElementById("numero1");
  const numero1 = parseInt(campoNumero1.value);

  const campoNumero2 = document.getElementById("numero2");
  const numero2 = parseInt(campoNumero2.value);
  if (numero1 && numero2) {
    if (numero1 > numero2) {
      alert(`O número ${numero1} é maior que o número ${numero2}`);
    } else if (numero2 > numero1) {
      alert(`O número ${numero2} é maior que o número ${numero1}`);
    } else {
      alert(`Os números são iguais`);
    }
  } else {
    alert("Por favor, preencha os dois campos corretamente.");
  }
}

/*
2. Criar uma função exercicio02ClassificarIdade
   No HTML criar:
   - um campo para digitar o nome
   - um campo para digitar a idade
   - um botão para executar a função

   O que a função deve fazer:
   - pegar o nome e a idade informados
   - classificar a pessoa em uma faixa etária
   - mostrar uma mensagem com o nome e a classificação
   - validar se a idade foi preenchida corretamente
*/

function exercicio02ClassificarIdade() {
  const campoNome = document.getElementById("nome");
  const nome = campoNome.value;

  const campoIdade = document.getElementById("idade");
  const idade = parseInt(campoIdade.value);

  if (nome && idade) {
    let classificacao;
    if (idade < 12) {
      classificacao = "criança";
    } else if (idade < 18) {
      classificacao = "adolescente";
    } else if (idade < 60) {
      classificacao = "adulto";
    } else {
      classificacao = "idoso";
    }
    alert(`${nome} é ${classificacao}`);
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
}

/*
3. Criar uma função exercicio03CalcularMediaEscolar
   No HTML criar:
   - três campos para digitar notas
   - um botão para executar a função
   - uma área para mostrar o resultado

   O que a função deve fazer:
   - pegar as três notas
   - calcular a média final
   - mostrar a média
   - informar se o aluno foi aprovado, em recuperação ou reprovado
   - validar os campos antes de calcular
*/

function exercicio03CalcularMediaEscolar() {
  const campoNota1 = document.getElementById("nota1");
  const nota1 = parseFloat(campoNota1.value);

  const campoNota2 = document.getElementById("nota2");
  const nota2 = parseFloat(campoNota2.value);

  const campoNota3 = document.getElementById("nota3");
  const nota3 = parseFloat(campoNota3.value);

  if (
    nota1 >= 0 &&
    nota1 <= 10 &&
    nota2 >= 0 &&
    nota2 <= 10 &&
    nota3 >= 0 &&
    nota3 <= 10
  ) {
    const media = (nota1 + nota2 + nota3) / 3;
    let resultado;
    if (media >= 7) {
      resultado = "aprovado";
    } else if (media >= 5) {
      resultado = "em recuperação";
    } else {
      resultado = "reprovado";
    }
    alert(`A média final é ${media.toFixed(2)}\nO aluno está ${resultado}.`);
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

/*
4. Criar uma função exercicio04CalcularDescontoProduto
   No HTML criar:
   - um campo para digitar o nome do produto
   - um campo para digitar o preço
   - um select para escolher a porcentagem de desconto
   - um botão para executar a função
   - uma área para mostrar o resultado

   O que a função deve fazer:
   - pegar os dados informados
   - calcular o valor do desconto
   - calcular o valor final do produto
   - apresentar um resumo com nome do produto, valor original, desconto e valor final
   - validar se o preço informado é válido
*/

function exercicio04CalcularDescontoProduto() {
  const campoProduto = document.getElementById("produto");
  const produto = campoProduto.value;

  const campoPreco = document.getElementById("preco");
  const preco = parseFloat(campoPreco.value);

  const campoDesconto = document.getElementById("desconto");
  const desconto = parseFloat(campoDesconto.value);

  if (produto && preco > 0 && desconto >= 0 && desconto <= 100) {
    const valorDesconto = preco * (desconto / 100);
    const valorFinal = preco - valorDesconto;
    alert(
      `Produto: ${produto}\nValor Original: R$ ${preco.toFixed(2)}\nDesconto: ${desconto}%\nValor Final: R$ ${valorFinal.toFixed(2)}`,
    );
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
}

/*
5. Criar uma função exercicio05SimularSalario
   No HTML criar:
   - um campo para digitar o nome do funcionário
   - um campo para digitar o salário atual
   - um select para escolher o cargo
   - um botão para executar a função
   - uma área para mostrar o resultado

   O que a função deve fazer:
   - pegar os dados informados
   - definir uma porcentagem de aumento de acordo com o cargo escolhido
   - calcular o novo salário
   - mostrar um resumo com nome, cargo, salário atual e salário reajustado
   - validar os campos antes de calcular
*/

function exercicio05SimularSalario() {
  const campoFuncionario = document.getElementById("funcionario");
  const funcionario = campoFuncionario.value;
  const campoSalario = document.getElementById("salario");
  const salario = parseFloat(campoSalario.value);
  const campoCargo = document.getElementById("cargo");
  const cargo = campoCargo.value;
  let percentualAumento;
  if (funcionario && salario > 0 && cargo) {
    switch (cargo) {
      case "gerente":
        percentualAumento = 0.1;
        break;
      case "analista":
        percentualAumento = 0.07;
        break;
      case "desenvolvedor":
        percentualAumento = 0.05;
        break;
      default:
        percentualAumento = 0;
    }
    const novoSalario = salario + salario * percentualAumento;
    alert(
      `Funcionário: ${funcionario}\nCargo: ${cargo}\nSalário Atual: R$ ${salario.toFixed(2)}\nSalário Reajustado: R$ ${novoSalario.toFixed(2)}`,
    );
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
}

/*
6. Criar uma função exercicio06CalcularContaRestaurante
   No HTML criar:
   - um campo para digitar o nome do cliente
   - um campo para digitar o valor consumido
   - um checkbox para informar se deseja pagar taxa de serviço
   - um botão para executar a função
   - uma área para mostrar o resultado

   O que a função deve fazer:
   - pegar os dados informados
   - calcular o valor final da conta
   - adicionar a taxa de serviço caso o checkbox esteja marcado
   - mostrar um resumo com nome do cliente, valor consumido, taxa de serviço e total a pagar
   - validar se o valor informado é válido
*/

function exercicio06CalcularContaRestaurante() {
  const campoCliente = document.getElementById("cliente");
  const cliente = campoCliente.value;
  const campoValor = document.getElementById("valor");
  const valor = parseFloat(campoValor.value);
  const campoTaxa = document.getElementById("taxa");
  const taxa = campoTaxa.checked;

  if (cliente && valor > 0) {
    let valorFinal = valor;
    if (taxa) {
      valorFinal += valor * 0.1;
    }
    alert(
      `Cliente: ${cliente}\nValor Consumido: R$ ${valor.toFixed(2)}\nTaxa de Serviço: ${taxa ? "Sim" : "Não"}\nTotal a Pagar: R$ ${valorFinal.toFixed(2)}`,
    );
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
}

/*
7. Criar uma função exercicio07CadastrarAlunoTurnoCurso
   No HTML criar:
   - um campo para digitar o nome do aluno
   - opções do tipo radio para escolher o turno
   - um select para escolher o curso
   - um botão para executar a função
   - uma área para mostrar o resultado

   O que a função deve fazer:
   - pegar os dados informados
   - validar se um turno foi selecionado
   - validar se um curso válido foi escolhido
   - apresentar um resumo com nome, turno e curso
   - mostrar uma mensagem diferente de acordo com o turno escolhido
*/

function exercicio07CadastrarAlunoTurnoCurso() {
  const campoAluno = document.getElementById("aluno");
  const aluno = campoAluno.value;
  const campoTurno = document.querySelector('input[name="turno"]:checked');
  const turno = campoTurno ? campoTurno.value : null;
  const campoCurso = document.getElementById("curso");
  const curso = campoCurso.value;
  if (aluno && turno && curso) {
    let mensagemTurno;
    switch (turno) {
      case "manha":
        mensagemTurno = "Bom dia!";
        break;
      case "tarde":
        mensagemTurno = "Boa tarde!";
        break;
      case "noite":
        mensagemTurno = "Boa noite!";
        break;
      default:
        mensagemTurno = "";
    }
    alert(
      `Aluno: ${aluno}\nTurno: ${turno}\nCurso: ${curso}\nMensagem: ${mensagemTurno}`,
    );
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
}

/*
8. Criar uma função exercicio08SimularLocacaoCarro
   No HTML criar:
   - um campo para digitar o nome do cliente
   - um select para escolher o tipo de carro
   - um campo para digitar a quantidade de dias
   - um checkbox para seguro
   - um checkbox para cadeira infantil
   - um botão para executar a função
   - uma área para mostrar o resultado

   O que a função deve fazer:
   - pegar todos os dados do formulário
   - definir o valor da diária conforme o tipo de carro
   - calcular o valor base pela quantidade de dias
   - adicionar os extras marcados
   - mostrar um resumo completo com os dados da locação
   - apresentar o valor total
   - validar todos os campos antes do cálculo
*/

function exercicio08SimularLocacaoCarro() {
  const campoCliente = document.getElementById("cliente");
  const cliente = campoCliente.value;
  const campoCarro = document.getElementById("carro");
  const carro = campoCarro.value;
  const campoDias = document.getElementById("dias");
  const dias = parseInt(campoDias.value);
  const campoSeguro = document.getElementById("seguro");
  const seguro = campoSeguro.checked;
  const campoCadeira = document.getElementById("cadeira");
  const cadeira = campoCadeira.checked;
  let valorDiaria;
  if (cliente && carro && dias > 0) {
    switch (carro) {
      case "popular":
        valorDiaria = 100;
        break;
      case "sedan":
        valorDiaria = 150;
        break;
      case "suv":
        valorDiaria = 200;
        break;
      default:
        valorDiaria = 0;
    }
    let valorTotal = valorDiaria * dias;
    if (seguro) {
      valorTotal += 50 * dias;
    }
    if (cadeira) {
      valorTotal += 20 * dias;
    }
    alert(
      `Cliente: ${cliente}\nCarro: ${carro}\nDias: ${dias}\nSeguro: ${seguro ? "Sim" : "Não"}\nCadeira Infantil: ${cadeira ? "Sim" : "Não"}\nTotal a Pagar: R$ ${valorTotal.toFixed(2)}`,
    );
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
}

/*
9. Criar uma função exercicio09SimularPlanoInternet
   No HTML criar:
   - um campo para digitar o nome do cliente
   - opções do tipo radio para escolher o plano
   - um checkbox para informar se deseja instalação imediata
   - um checkbox para informar se deseja roteador adicional
   - um botão para executar a função
   - uma área para mostrar o resultado

   O que a função deve fazer:
   - pegar as informações preenchidas
   - validar se um plano foi selecionado
   - definir um valor base conforme o plano escolhido
   - adicionar os valores dos serviços extras marcados
   - calcular o total
   - mostrar um resumo com nome do cliente, plano, adicionais e valor final
*/

function exercicio09SimularPlanoInternet() {
  const campoCliente = document.getElementById("cliente");
  const cliente = campoCliente.value;
  const campoPlano = document.querySelector('input[name="plano"]:checked');
  const plano = campoPlano ? campoPlano.value : null;
  const campoInstalacao = document.getElementById("instalacao");
  const instalacao = campoInstalacao.checked;
  const campoRoteador = document.getElementById("roteador");
  const roteador = campoRoteador.checked;
  let valorPlano;
  if (cliente && plano) {
    switch (plano) {
      case "basico":
        valorPlano = 100;
        break;
      case "intermediario":
        valorPlano = 150;
        break;
      case "avancado":
        valorPlano = 200;
        break;
      default:
        valorPlano = 0;
    }
    let valorTotal = valorPlano;
    if (instalacao) {
      valorTotal += 50;
    }
    if (roteador) {
      valorTotal += 30;
    }
    alert(
      `Cliente: ${cliente}\nPlano: ${plano}\nInstalação Imediata: ${instalacao ? "Sim" : "Não"}\nRoteador Adicional: ${roteador ? "Sim" : "Não"}\nTotal a Pagar: R$ ${valorTotal.toFixed(2)}`,
    );
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
}

/*
10. Criar uma função exercicio10GerarOrcamentoEvento
    No HTML criar:
    - um campo para digitar o nome do responsável
    - um campo para digitar a quantidade de convidados
    - um select para escolher o tipo de evento
    - opções do tipo radio para escolher o pacote
    - um campo para informar a data do evento
    - um checkbox para decoração especial
    - um checkbox para fotografia
    - um checkbox para música
    - uma área grande para mostrar o resultado
    - um botão para executar a função

    O que a função deve fazer:
    - pegar todos os dados do formulário
    - validar os campos obrigatórios
    - validar se um pacote foi selecionado
    - definir um valor base conforme o tipo de evento
    - calcular o custo com base na quantidade de convidados
    - adicionar os valores dos serviços extras
    - gerar um resumo completo em várias linhas
    - mostrar o valor total do orçamento
*/

function exercicio10GerarOrcamentoEvento() {
  const campoResponsavel = document.getElementById("responsavel");
  const responsavel = campoResponsavel.value;
  const campoConvidados = document.getElementById("convidados");
  const convidados = parseInt(campoConvidados.value);
  const campoEvento = document.getElementById("evento");
  const evento = campoEvento.value;
  const campoPacote = document.querySelector('input[name="pacote"]:checked');
  const pacote = campoPacote ? campoPacote.value : null;
  const campoData = document.getElementById("data");
  const data = campoData.value;
  const campoDecoracao = document.getElementById("decoracao");
  const decoracao = campoDecoracao.checked;
  const campoFotografia = document.getElementById("fotografia");
  const fotografia = campoFotografia.checked;
  const campoMusica = document.getElementById("musica");
  const musica = campoMusica.checked;
  let valorEvento;
  if (responsavel && convidados > 0 && evento && pacote && data) {
    switch (evento) {
      case "casamento":
        valorEvento = 5000;
        break;
      case "aniversario":
        valorEvento = 3000;
        break;
      case "corporativo":
        valorEvento = 4000;
        break;
      default:
        valorEvento = 0;
    }
    let valorTotal = valorEvento + convidados * 50;
    if (decoracao) {
      valorTotal += 1000;
    }
    if (fotografia) {
      valorTotal += 1500;
    }
    if (musica) {
      valorTotal += 2000;
    }
    const campoResultado = document.getElementById("resultado");
    campoResultado.value = `Responsável: ${responsavel}\nConvidados: ${convidados}\nTipo de Evento: ${evento}\nPacote: ${pacote}\nData: ${data}\nDecoração Especial: ${decoracao ? "Sim" : "Não"}\nFotografia: ${fotografia ? "Sim" : "Não"}\nMúsica: ${musica ? "Sim" : "Não"}\nValor Total do Orçamento: R$ ${valorTotal.toFixed(2)}`;
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
}
