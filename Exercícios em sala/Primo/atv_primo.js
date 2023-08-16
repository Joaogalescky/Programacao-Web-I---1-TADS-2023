const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let resposta = "";

    const preElement = document.querySelector("pre");
    preElement.textContent = resposta;

        if(numero > 0 && numero <= 100){
            if(numero % 2 == 1){
                resposta += `O número ${numero} é primo` + "\n";
            }else{
                resposta += `O número ${numero} não é primo` + "\n";
            }
        }else{
            resposta += `Número digitado não aceito` + "\n";
        }

    resp.innerText = resposta;  
})