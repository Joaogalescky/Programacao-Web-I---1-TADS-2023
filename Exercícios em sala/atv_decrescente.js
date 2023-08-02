const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let resposta = "";

    const preElement = document.querySelector("pre");
    preElement.textContent = resposta;

        for(let i = numero; i >= 0; i--){
            resposta += i + "\n";
        }

    resp.innerText = resposta;  
})