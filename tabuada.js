//Obter elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const smpar = document.querySelector("#outPares");
const smimpar = document.querySelector("#outImpares");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //Obter número informado
    const numero = Number(frm.inNumero.value);

    let resposta = "", pares = 0, impares = 0;

    //---------------------------------------------------------------    
    //Tabuada
    for(let i = 1; i <= 10; i++) { //criar um laço de repetição iniciando de 1 até 10
        resposta += numero + "X" + i + "=" + (numero*i) + "\n";
        //resposta = `${resposta} ${numero} x ${i} = ${numero*i}\n`;
    //---------------------------------------------------------------
    //Par e impar
        if(numero*i%2==0){ // verifca se é par
            pares += numero*i;    
        }else{ // verifica se é impar
            impares += numero*i;
        }
    }

    //Resposta = respota + `A soma dos pares é: ${pares}` + "\n" + `À soma dos impares é: ${impares}`;
    //Resposta = resposta + `soma dos pares: ${somapares}\n`
    //Resposta = resposta + `soma dos impares: ${somaimpares}\n`

    //Vai alterar o conteúdo da tag pre
    resp.innerText = resposta;
    smpar.innerText=somapares;
    smimpar.innerText=somaimpares;
})