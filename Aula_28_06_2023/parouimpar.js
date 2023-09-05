//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar um ouvinte para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    const nome = frm.inNome.value; //const vai armazenar um valor
    const numero = Number(frm.inNumero.value);

    // let peso;
    // if (masculino){
    //     peso = 22 * Math.pow(altura,2);
    // }else {
    //     peso = 21 * Math.pow(altura,2);
    // }
    if (numero%2==1){
        resp.innerText = `${nome}: o número digitado é impar.`
        resp.style.color ="green";
    }else{
        resp.innerText = `${nome}: o número digitado é par.`
        resp.style.color ="blue";
    }

    //mostrar o calculo

    //criar as condições
})

frm.addEventListener("reset", () =>{
    resp.innerText = "reset";
})