
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const dicionario = "qwertyuiopasdfghjklzxcvbnm";

function criptografarNumeros() {
    const senha = document.getElementById("senha").value;
    let senhaCriptografada = "";

    for (let numero of senha) {
        if (numero >= "0" && numero <= "9") {
            senhaCriptografada += (Number(numero) + 1) % 10;
        } else {
            senhaCriptografada += numero;
        }
    }

    mostrarResultado(senhaCriptografada);
}

function criptografarLetras() {
    const senha = document.getElementById("senha").value.toLowerCase();
    let senhaCriptografada = "";

    for (let letra of senha) {
        const posicao = alfabeto.indexOf(letra);

        if (posicao !== -1) {
            senhaCriptografada += dicionario[posicao];
        } else {
            senhaCriptografada += letra;
        }
    }

    mostrarResultado(senhaCriptografada);
}

function descriptografar() {
    const senha = document.getElementById("senha").value.toLowerCase();
    let senhaOriginal = "";

    for (let letra of senha) {
        const posicao = dicionario.indexOf(letra);

        if (posicao !== -1) {
            senhaOriginal += alfabeto[posicao];
        } else {
            senhaOriginal += letra;
        }
    }

    mostrarResultado(senhaOriginal);
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
}
