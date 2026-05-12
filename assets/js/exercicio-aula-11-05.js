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

function exercicio01CompararDoisNumeros(){
   const campoNumero = document.getElementById("numero1");
   const numero1 = parseInt(campoNumero.value);

   const campoNumero = document.getElementById("numero2");
   const numero2 = parseInt(campoNumero.value);
   
   alert(numero1 + numero2);
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