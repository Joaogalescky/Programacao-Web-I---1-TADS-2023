const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let resposta = "";

    const vetor = [];
    let maior = 0, menor = 0;
    let pares = 0, impares = 0;
    let soma = 0, media;

    if(numero > 0 && numero <= 100){
        for(let i = 0; i < numero;  i++){
            vetor.push(Math.trunc(Math.random(i) * 1000))
            console.log(vetor);

            //Maior
            if(vetor[i] > vetor[i + 1]){
                maior = vetor[i];
            }

            //Menor
            if(vetor[i] < vetor[i + 1]){
                menor = vetor[i];
            }

            //Média da soma dos elementos
            soma += vetor[i]; 

            //Quantidade de pares e ímpares
            if(vetor[0 - 100] % 2 == 0){    
                pares ++;
            }else{
                impares ++;
            }
        }

        media = soma/vetor.length;

        //Respostas
        resposta += `O maior valor é: ${maior}`

        resposta += `O menor valor é: ${menor}`

        resposta += `A media da soma dos elementos é: ${media}`

        resposta += `São ${pares} pares e ${impares} impares\n`
    }else{
        resposta += `Número digitado não aceito\n`;
    }
})