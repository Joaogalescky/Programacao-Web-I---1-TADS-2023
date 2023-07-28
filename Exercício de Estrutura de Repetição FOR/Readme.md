Links de exercícios do beecrowd para passar para Javascript

Divisores I
https://www.beecrowd.com.br/judge/pt/runs/code/33966389

import java.io.IOException;
import java.util.Scanner; 
 
public class Main {
 
    public static void main(String[] args) throws IOException {
 
        //variaveis
        int N, repetidor;
        Scanner entrada;
        
        //entrada
        entrada = new Scanner(System.in);
        N = entrada.nextInt();
        entrada.close();

        repetidor = 0;
        while(repetidor<=N){
            repetidor = repetidor + 1;
            if(N%repetidor==0)
            System.out.printf("%d\n", repetidor);
        }
    }
}

Números Positivos
https://www.beecrowd.com.br/judge/pt/runs/code/34047040

import java.io.IOException;
import java.util.Scanner;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
        //variaveis
        Float N;
        int rep, armz;
        Scanner entrada;
        
        //entrada
        entrada = new Scanner(System.in);
        armz = 0;
        //armz vai armazenar a quantidade de números positivos
        //rep vai repetir a entrada até chegar a 6

        for(rep=0;rep<6;rep++){
            N = entrada.nextFloat();
            if(N>0.0){
                armz++;
            }
        }
        System.out.printf("%d valores positivos\n", armz);
    }
}

Inseto
https://www.beecrowd.com.br/judge/pt/runs/code/34100471

import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
 
        //variaveis
        int C, N, i;
        Scanner entrada;
    
        //entrada
        entrada = new Scanner(System.in);
        C = entrada.nextInt();
        
        //processamento e saida
            for(i=0;i<C;i++){
            N = entrada.nextInt();
                if(N>8000){
                    System.out.println("Mais de 8000!");
                }
                else{
                    System.out.println("Inseto!");
                }
            }
        entrada.close();
    }
}

Soma de Pares Consecutivos
https://www.beecrowd.com.br/judge/pt/runs/code/34184486

import java.io.IOException;
import java.util.Scanner;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
        //variaveis
        int X, aux, soma;
        
        //entrada
        Scanner entrada = new Scanner (System.in);
        X = entrada.nextInt();

        //processamento e saida
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
        entrada.close();
    }
}

O Escolhido
https://www.beecrowd.com.br/judge/pt/runs/code/34207609

import java.io.IOException;
import java.util.Scanner;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
        //variaveis
        int alunos, matricula, matricula_M, i;
        Double nota, nota_M;
        
        //entrada
        Scanner entrada = new Scanner (System.in);
        alunos = entrada.nextInt();
        nota_M = 0.0;
        matricula_M = 0;
        
        //processamento
        for(i=0;i<alunos;i++){ //Sistema de repetição
            matricula = entrada.nextInt();
            nota = entrada.nextDouble();
                if(nota>nota_M && nota>=8){ //Se a "nota" for maior que "nota_M" e "nota" maior ou igual a 8
                nota_M = nota; //"nota_M" vai guardar o valor da "nota"
                matricula_M = matricula; //"matricula_M" vai guardar o valor da "matricula"
                }
        }

        //saida
        if(nota_M<8){ //Se a "nota_M" for menor que 8
        System.out.println("Minimum note not reached");
        } else{ //Senão, sistema gera a saida da "matricula_M"
        System.out.println(matricula_M);
        }
    }
}