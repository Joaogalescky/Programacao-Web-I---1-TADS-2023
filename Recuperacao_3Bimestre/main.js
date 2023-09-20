const frm = document.querySelector("form");
const resp = document.querySelector("h5");
const vetor = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let numero = Number(frm.inTarefa.value)

    if(numero >= 0 && numero <= 100){
        vetor.push(numero);
    
        let resposta = "";
    
        for(let i = 0; i < vetor.length; i++){
            vetor.sort((a, b) => a - b);
            resposta += `${vetor[i]}` + "\n";
        }
        resp.innerText = resposta;
    } else {
        alert("Por favor, insira um número entre 0 e 100.");
    }
    frm.inTarefa.value = "";
});

document.getElementById("btnRemover").addEventListener("click", function() {
        let numero = Number(frm.inTarefa.value);
        let index = vetor.indexOf(numero);

        if(index !== -1){
            vetor.splice(index, 1);
            let resposta = vetor.join("\n");
            resp.innerText = resposta;
        } else {
            alert("Não consta na lista!");
        }
    frm.inTarefa.value = "";
    });

//Links
//https://blog.dbins.com.br/remover-elementos-de-um-array-com-javascript
//https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
