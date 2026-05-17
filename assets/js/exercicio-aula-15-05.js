const caixa = document.getElementById("caixa");

function mudarCor(cor) {
    caixa.classList.remove("vermelho");
    caixa.classList.remove("azul");
    caixa.classList.remove("verde");

    caixa.classList.add(cor);
    caixa.classList.add("destaque");
}

function aumentarCaixa() {
    caixa.classList.add("grande");
}

function resetarCaixa() {
    caixa.classList.remove("vermelho");
    caixa.classList.remove("azul");
    caixa.classList.remove("verde");
    caixa.classList.remove("grande");
    caixa.classList.remove("destaque");
}

function aplicarAlteracoes() {
    const nome = document.getElementById("nome").value;
    const tema = document.getElementById("tema").value;
    const destaque = document.getElementById("destaque").checked;

    const card = document.getElementById("card");
    const nomeCard = document.getElementById("nome-card");

    if (nome === "") {
        alert("Digite um nome");
        return;
    }

    card.style.display = "block";
    nomeCard.textContent = nome;

    card.classList.remove("tema-azul");
    card.classList.remove("tema-verde");
    card.classList.remove("tema-vermelho");
    card.classList.remove("destaque");

    card.classList.add(tema);

    if (destaque === true) {
        card.classList.add("destaque");
    }
}

function mostrarCampos() {
    const tipoContato = document.querySelector('input[name="tipo"]:checked');

    const camposPessoais = document.getElementById("campos-pessoais");
    const camposComerciais = document.getElementById("campos-comerciais");

    if (tipoContato.value === "pessoal") {
        camposPessoais.style.display = "block";
        camposComerciais.style.display = "none";
    }

    if (tipoContato.value === "comercial") {
        camposPessoais.style.display = "none";
        camposComerciais.style.display = "block";
    }
}

function apresentarResumo() {
    const tipoContato = document.querySelector('input[name="tipo"]:checked');
    const resultado = document.getElementById("resultado");

    if (tipoContato === null) {
        alert("Escolha o tipo de contato");
        return;
    }

    if (tipoContato.value === "pessoal") {
        const nome = document.getElementById("nome-pessoal").value;
        const email = document.getElementById("email-pessoal").value;
        const cpf = document.getElementById("cpf").value;

        if (nome === "" || email === "" || cpf === "") {
            alert("Preencha todos os campos do contato pessoal");
            return;
        }

        resultado.value = `Tipo de contato: Pessoal
Nome: ${nome}
Email: ${email}
CPF: ${cpf}`;
    }

    if (tipoContato.value === "comercial") {
        const empresa = document.getElementById("empresa").value;
        const email = document.getElementById("email-comercial").value;
        const cnpj = document.getElementById("cnpj").value;

        if (empresa === "" || email === "" || cnpj === "") {
            alert("Preencha todos os campos do contato comercial");
            return;
        }

        resultado.value = `Tipo de contato: Comercial
Empresa: ${empresa}
Email comercial: ${email}
CNPJ: ${cnpj}`;
    }
}

function pesquisarImagem() {
    const pesquisa = document.getElementById("pesquisa").value;
    const imagem = document.getElementById("imagem-pesquisa");
    const legenda = document.getElementById("legenda");
    const areaImagem = document.getElementById("area-imagem");

    areaImagem.classList.remove("fundo-carro");
    areaImagem.classList.remove("fundo-moto");
    areaImagem.classList.remove("fundo-casa");
    areaImagem.classList.remove("fundo-padrao");

    if (pesquisa === "carro") {
        imagem.src = "https://cdn.creativefabrica.com/2021/02/08/car-icon-red-Graphics-8433168-1.jpg";
        legenda.textContent = "Resultado encontrado: Carro";
        areaImagem.classList.add("fundo-carro");
    } else if (pesquisa === "moto") {
        imagem.src = "https://cdn-icons-png.flaticon.com/512/1768/1768201.png";
        legenda.textContent = "Resultado encontrado: Moto";
        areaImagem.classList.add("fundo-moto");
    } else if (pesquisa === "casa") {
        imagem.src = "https://cdn-icons-png.flaticon.com/512/1946/1946488.png";
        legenda.textContent = "Resultado encontrado: Casa";
        areaImagem.classList.add("fundo-casa");
    } else {
        imagem.src = "https://cdn-icons-png.flaticon.com/512/2748/2748558.png";
        legenda.textContent = "Nenhum resultado encontrado.";
        areaImagem.classList.add("fundo-padrao");
    }
}

function limparPesquisa() {
    const pesquisa = document.getElementById("pesquisa");
    const imagem = document.getElementById("imagem-pesquisa");
    const legenda = document.getElementById("legenda");
    const areaImagem = document.getElementById("area-imagem");

    pesquisa.value = "";
    imagem.src = "";
    legenda.textContent = "Nenhuma pesquisa realizada.";

    areaImagem.classList.remove("fundo-carro");
    areaImagem.classList.remove("fundo-moto");
    areaImagem.classList.remove("fundo-casa");
    areaImagem.classList.remove("fundo-padrao");
}

let intervaloBanner;
let contadorBanner = 1;

function iniciarAnimacao() {
    intervaloBanner = setInterval(function () {
        const banner = document.getElementById("banner");
        const textoBanner = document.getElementById("texto-banner");

        banner.classList.remove("banner-estilo-1");
        banner.classList.remove("banner-estilo-2");
        banner.classList.remove("banner-estilo-3");
        banner.classList.remove("banner-estilo-4");
        banner.classList.remove("banner-estilo-5");

        banner.classList.add("banner-estilo-" + contadorBanner);
        textoBanner.textContent = "Banner estilo " + contadorBanner;

        contadorBanner++;

        if (contadorBanner > 5) {
            contadorBanner = 1;
        }
    }, 1000);
}

function pararAnimacao() {
    const banner = document.getElementById("banner");
    const textoBanner = document.getElementById("texto-banner");

    clearInterval(intervaloBanner);

    banner.classList.remove("banner-estilo-1");
    banner.classList.remove("banner-estilo-2");
    banner.classList.remove("banner-estilo-3");
    banner.classList.remove("banner-estilo-4");
    banner.classList.remove("banner-estilo-5");

    textoBanner.textContent = "Promoção especial!";
    contadorBanner = 1;
}
