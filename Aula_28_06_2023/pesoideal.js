//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar um ouvinte para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    const nome = frm.inNome.value; //const vai armazenar um valor
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    // let peso;
    // if (masculino){
    //     peso = 22 * Math.pow(altura,2);
    // }else {
    //     peso = 21 * Math.pow(altura,2);
    // }
    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

    //mostrar o calculo
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} Kg.`
    resp.style.color ="green";
    //criar as condições
})

frm.addEventListener("reset", () =>{
    resp.innerText = "";
})