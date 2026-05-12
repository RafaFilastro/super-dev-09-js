function concatenar(){
    //get element by id => pegar elemento por id
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;
    const campoSobreNome = document.getElementById("sobrenome")
    const sobrenome = campoSobreNome.value;
    alert(`Nome completo: ${nome} ${sobrenome}`);
}

function verificarPar(){
    // 40 % 2 === 0 veriricar se é par.
    const campoNumero = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero.value);

    if (numero1 % 2 === 0) {
        alert("Número é par");
    } else {
        alert("Número é impar");
    }

    //limpar o campo digitado pelo usuario
    campoNumero.value = "";

    //Colocar o cursor no campo para digitar novamente
    campoNumero.focus();
}

function processarPedido(){
    const campoCliente = document.getElementById("cliente");
    const cliente = campoCliente.value;

    const campoQuantidadeLicencas = document.getElementById("quantidade-licencas");
    const quantidadeLicencas = parseInt(campoQuantidadeLicencas.value);

    const campoTipo = document.querySelector("[name='tipo']:checked");
    if (campoTipo === null) {
        alert("Selecione um tipo");
        return;
    }
    const tipo = campoTipo.value;

    const campoPlano = document.getElementById("plano");
    const plano = campoPlano.value;

    if ((plano !== "Básico") && (plano !== "Intermediário") && (plano !== "Avançado")) {
        alert("Escolha um plano");
        return;
    }
    
    const campoDataEncerramento = document.getElementById("data-encerramento-contrato");
    const dataEncerramento = campoDataEncerramento.value;

    const campoBackup = document.getElementById("backup");
    const backup = campoBackup.checked;

    let precoBase = 0;
    if (tipo === "ERP"){
        precoBase = 250;
    } else if (tipo === "Hospital") {
        precoBase = 400;
    } else if (tipo === "Oficina") {
        precoBase = 100;
    }

    let multiplicadorPlano = 1.0;
    if (plano === "Intermediário") {
        multiplicadorPlano = 1.5;
    } else if (plano === "Avançado") {
        multiplicadorPlano = 2.0;
    }

    let total = quantidadeLicencas * precoBase * multiplicadorPlano;

    const campoResultado = document.getElementById("resultado");
    campoResultado.value = `
    Cliente: ${cliente}
    Quantidade de licenças: ${quantidadeLicencas}
    Tipo: ${tipo}
    Plano: ${plano}
    Data de Encerramento: ${dataEncerramento}
    Backup: ${backup ? "Sim" : "Não"}
    Preço Base: R$ ${precoBase.toFixed(2)}
    Multiplicador de plano: ${multiplicadorPlano}
    Total: R$ ${total.toFixed(2)}`;
}