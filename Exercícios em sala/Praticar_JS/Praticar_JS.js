const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    //entrada
    const numero = Number(frm.inNumero.value);
    let resposta = "";

    const vetor = [];
    let maior = -Infinity, menor = Infinity;
    let pares = 0, impares = 0;
    let soma = 0, media;

    //processamento
    if(numero > 0 && numero <= 100){
        for(let i = 0; i < numero;  i++){
            const randomNum = Math.trunc(Math.random() * 1000)
            vetor.push(randomNum);

            //Maior
            if(randomNum > maior){
                maior = randomNum;
            }

            //Menor
            if(randomNum < menor){
                menor = randomNum;
            }

            //Soma dos elementos do vetor
            soma += randomNum; 

            //Quantidade de pares e ímpares
            if(randomNum % 2 === 0){    
                pares ++;
            }else{
                impares ++;
            }
        }

        //Média da soma dos elementos do vetor
        media = (soma/vetor.length);

        //Saída
        resposta += `O maior valor é: ${maior}\n`;
        resposta += `O menor valor é: ${menor}\n`;
        resposta += `A media da soma dos elementos é: ${media.toFixed(2)}\n`;
        resposta += `São ${pares} par(es) e ${impares} impar(es)\n`;
    } else {
        resposta += `Número digitado não aceito\n`;
    }
    resp.textContent = resposta;
})