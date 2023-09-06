const frm = document.querySelector("form");
const resp = document.querySelector("h5");
const vetor = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inTarefa.value)
    vetor.push(numero);

    let resposta = "";

    for(let i = 0; i < vetor.length; i++){
        vetor.sort();
        resposta += `${vetor[i]}` + "\n";
    }

    resp.innerText = resposta;
});
