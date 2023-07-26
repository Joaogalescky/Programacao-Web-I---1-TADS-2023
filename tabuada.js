//Obter os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter o número informado
    const numero = Number(frm.inNumero.value);
    
    let resposta = "", r_impar = "", r_par = "";
    let impares = 0, pares = 0;

    //cria um laço de repetição iniciando de 1 até 10
    //tabuada
    for(let i = 1; i <= 10; i++){
        resposta += numero + "X" + i + "=" + (numero*i) + "\n";
        // Outra forma ---> resposta = `${resposta} ${numero} x ${i} = ${numero * i}\n`

        //soma dos numeros impares e pares
        if(i%2==1){ //impar
            impares += numero*i;
        }else{ //par
            pares += numero*i;
        }
    }

    resposta = respota + `A soma dos pares é: ${pares}` + "\n" + `À soma dos impares é: ${impares}`;

    //alterar o conteúdo da tag pre
    resp.innerText = resposta;
})