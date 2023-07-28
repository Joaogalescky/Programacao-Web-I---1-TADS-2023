const frm = document.querySelector("form");
const resp = document. querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let resposta = "";

      // Chama a função correspondente ao trecho de código que você quer executar
  //resposta = divisores(numero);
  // resposta = numeros_positivos();
  // resposta = inseto();
  // resposta = soma_pares_consecutivos();
  // resposta = escolhido();

  const preElement = document.querySelector("pre");
  preElement.textContent = resposta;
});

//--------------------------------------------------------
/*Divisores I
    int N, repetidor=0;

    while(repetidor<=N){
        repetidor = repetidor + 1;
        if(N%repetidor==0)
        System.out.printf("%d\n", repetidor);
    }
*/

function divisores(numero){

    let divisores_positivos = "", i = 0;

    while(i <= numero){
        i += 1;
        if(numero % i == 0){
        divisores_positivos += i + " ";
        }
    }

    /*Ou
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
        divisores_positivos += i + " ";
        }
    }
    */

    return `Estes são todos os divisores positivos do ${numero}: ${divisores_positivos}\n`;
}
//--------------------------------------------------------

//--------------------------------------------------------
/*Números Positivos
    Float N;
    int rep, armz=0;

    for(rep = 0; rep < 6; rep++){
        N = entrada.nextFloat();
        if(N > 0.0){
            armz++;
        }
    }
    System.out.printf("%d valores positivos\n", armz);
*/

function numeros_positivos(){
    
    let armz = 0;
        
    for(let i2 = 0; i2 < 6; i2++){
        const numero2 = Number(frm.inNumero.value);
        if(numero2 > 0.0){
            armz++;
        }
    }
    return `Há ${armz} valores positivos\n`;
}
//--------------------------------------------------------
    
//--------------------------------------------------------
/*Inseto
    int C, N, i;
    C = entrada.nextInt();
        for(i=0;i<C;i++){
            N = entrada.nextInt();
                if(N>8000){
                    System.out.println("Mais de 8000!");
                }
                else{
                    System.out.println("Inseto!");
                }
            }
        }
    }
*/

function inseto(){
    
    let numero3_rep, numero3;
    let resposta = "";

    numero3 = Number(frm.inNumero.value);
    for(let i3 = 0; i3 < numero3; i3++){
        numero3_rep = Number(frm.inNumero.value);
        if(numero3_rep > 8000){
            resposta += `Mais de 8000!\n`;
        } else{
            resposta += `Inseto!\n`;
        }
    }
    return resposta;
}
//--------------------------------------------------------

//--------------------------------------------------------
/*Soma de Pares Consecutivos
    int X, aux, soma;
    X = entrada.nextInt();

    while(X!=0){ //Sistema de repetição: Se "X" for diferente de 0, vai continuar, senão, vai parar.
        soma = 0; 
        for(aux=1; aux<=5; X++){ //Sequência de 5 números 
            if(X%2==0){ //Se for par
                soma += X; //Soma = Soma + X
                aux += 1; //auxa = auxa + 1
            }
        }
        System.out.printf("%d\n", soma);
        X = entrada.nextInt();
    }
*/

function soma_pares_consecutivos(){

    let soma, numero4, resposta = "";
        
    while(numero4 !== 0){
        soma = 0;
        for(let aux = 1; aux <= 5; aux++){
            if(numero4 % 2 === 0){
                soma += numero4;
                numero4++;
            }
        }
        resposta += `${soma}\n`;
        return resposta;
    }
}
//--------------------------------------------------------

//--------------------------------------------------------
/*O Escolhido
    int alunos, matricula, matricula_M, i;
    Double nota, nota_M;

    alunos = entrada.nextInt();
    nota_M = 0.0;
    matricula_M = 0;
                
        for(i=0;i<alunos;i++){ //Sistema de repetição
        matricula = entrada.nextInt();
        nota = entrada.nextDouble();
            if(nota>nota_M && nota>=8){ //Se a "nota" for maior que "nota_M" e "nota" maior ou igual a 8
                nota_M = nota; //"nota_M" vai guardar o valor da "nota"
                matricula_M = matricula; //"matricula_M" vai guardar o valor da "matricula"
            }
        }
    if(nota_M<8){ //Se a "nota_M" for menor que 8
        System.out.println("Minimum note not reached");
    }else{ //Senão, sistema gera a saida da "matricula_M"
        System.out.println(matricula_M);
    }
*/

function escolhido(){

    let alunos = 6, matricula_M = 0, nota_M = 0.0;

    for(let i5 = 0; i5 < alunos; i5++){
        const matricula = Number(frm.inNumero.value);
        const nota = Number(frm.inNumero.value);
        if(nota > nota_M && nota >= 8){
            nota_M = nota;
            matricula_M = matricula;
        }
    }
    if(nota_M < 8){
        return `Minimum note not reached`;
    } else{
        return `${matricula_M}\n`;
    }
}
//--------------------------------------------------------