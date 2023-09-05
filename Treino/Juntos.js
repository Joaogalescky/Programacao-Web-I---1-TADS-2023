// Exercício 1: Calculadora de Média
const notas1 = [];
const notasElement1 = document.getElementById("notas1");
const mediaElement1 = document.getElementById("media1");

document.getElementById("adicionar1").addEventListener("click", function() {
    const nota = parseFloat(document.getElementById("nota1").value);
    if (!isNaN(nota)) {
        notas1.push(nota);
        notasElement1.textContent += nota + " ";
        document.getElementById("nota1").value = "";
        const media = calcularMedia(notas1);
        mediaElement1.textContent = "Média: " + media.toFixed(2);
    }
});

function calcularMedia(array) {
    if (array.length === 0) return 0;
    const soma = array.reduce((total, valor) => total + valor, 0);
    return soma / array.length;
}

// Exercício 2: Encontre o Maior Valor
const numeros2 = [];
const maiorElement2 = document.getElementById("maior2");

document.getElementById("encontrar2").addEventListener("click", function() {
    const numero = parseFloat(document.getElementById("numero2").value);
    if (!isNaN(numero)) {
        numeros2.push(numero);
        document.getElementById("numero2").value = "";
        const maior = encontrarMaiorValor(numeros2);
        maiorElement2.textContent = "Maior valor: " + maior;
    }
});

function encontrarMaiorValor(array) {
    if (array.length === 0) return "Nenhum valor inserido.";
    return Math.max(...array);
}

// Exercício 3: Remover Elemento de um Vetor
const numeros3 = [];
const vetorElement3 = document.getElementById("vetor3");

document.getElementById("adicionar3").addEventListener("click", function() {
    const numero = parseFloat(document.getElementById("numero3").value);
    if (!isNaN(numero)) {
        numeros3.push(numero);
        vetorElement3.textContent = "Vetor: " + numeros3.join(", ");
        document.getElementById("numero3").value = "";
    }
});

document.getElementById("removerBotao3").addEventListener("click", function() {
    const numeroRemover = parseFloat(document.getElementById("remover3").value);
    if (!isNaN(numeroRemover)) {
        const indice = numeros3.indexOf(numeroRemover);
        if (indice !== -1) {
            numeros3.splice(indice, 1);
            vetorElement3.textContent = "Vetor: " + numeros3.join(", ");
            document.getElementById("remover3").value = "";
        }
    }
});

// Exercício 4: Criação de Elementos HTML
document.getElementById("criarElemento4").addEventListener("click", function() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Este é um novo parágrafo criado com JavaScript.";
    document.getElementById("conteudo4").appendChild(novoParagrafo);
});

// Exercício 5: Aplicação de Estilo CSS
const cores5 = ["red", "green", "blue", "yellow", "purple", "orange"];
const elementoColorido5 = document.getElementById("elementoColorido5");

document.getElementById("mudarCor5").addEventListener("click", function() {
    const corAleatoria = cores5[Math.floor(Math.random() * cores5.length)];
    elementoColorido5.style.backgroundColor = corAleatoria;
});

// Exercício 6: Validação de Formulário
const formulario6 = document.getElementById("formulario6");
const mensagem6 = document.getElementById("mensagem6");

formulario6.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const nome6 = document.getElementById("nome6").value;
    const idade6 = parseFloat(document.getElementById("idade6").value);
    if (nome6.trim() === "" || isNaN(idade6) || idade6 < 18) {
        mensagem6.textContent = "Preencha cor"
    }
})