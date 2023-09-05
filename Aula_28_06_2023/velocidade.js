//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar um ouvinte para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    const nome = frm.inNome.value; //const vai armazenar um valor
    const limite = Number(frm.inLimite.value);
    const velocidade = Number(frm.inVelocidadeMaxima.value);

    if (limite<velocidade/5==0.20){
        resp.innerText = `${nome}: a sua velocidade excedeu 20%.`
        resp.style.color ="orange";
    }
    else if(limite<velocidade/2==0.50){
        resp.innerText = `${nome}: a sua velocidade excedeu 50%.`
        resp.style.color ="red";
    }
    else if((limite<velocidade/2)+1==0.50 + 1){
        resp.innerText = `%{nome}: a sua velocidade excedeu 50% + 1.`
        resp.style.color = "pink";
    }

    //mostrar o calculo

    //criar as condições
})

frm.addEventListener("reset", () =>{
    resp.innerText = "reset";
})