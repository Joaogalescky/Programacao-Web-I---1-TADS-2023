const frm = document.querySelector("form");
const resp = document.querySelector("h5");
const vetor = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let numero = Number(frm.inTarefa.value)
    vetor.push(numero);

    let resposta = "";

    for(let i = 0; i < vetor.length; i++){
        vetor.sort((a, b) => a - b);
        resposta += `${vetor[i]}` + "\n";
    }

    //Fazer um limite para a entrada no vetor
    //Fzer um alerta para caso tentar ultrapassar o limite

    resp.innerText = resposta;
});

document.addEventListener("button", function() {
    button.type = 'button';
    button.innerHTML = 'Remover';
    button.className = 'btn-styled';
 
    button.onclick = function() {
        let numero = Number(frm.inTarefa.value);
        let remover = vetor.indexOf(numero);

        while(remover >= 0){
            vetor.splice(remover, 0);
            remover = vetor.indexOf(numero);
        }
        if (vetor.length == 0){
            alert("Não consta na lista")
            frm.inTarefa.focus();
            return
        }
    };
    var container = document.getElementById('container');
    container.appendChild(button);
}, false);

//Links
//https://blog.dbins.com.br/remover-elementos-de-um-array-com-javascript
//https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a