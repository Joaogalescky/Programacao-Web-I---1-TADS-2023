var N;
var n_atual = 1;
var memoria = 1;
var i = 2;
var aux;

N = input();

while(i < N){
    aux = memoria;
    memoria = n_atual;
    n_atual = aux + memoria;

    i = i + 1;
}
output(n_atual);

//Alpha Ed Tech
//Mini curso de JavaScript