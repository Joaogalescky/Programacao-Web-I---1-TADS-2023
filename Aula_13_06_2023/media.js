//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//criar um ouvinte para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    const nome = frm.inNome.value; //const vai armazenar um valor
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) / 2;

    console.log(media); //teste

    //mostrar a média
    resp1.innerText = `Média das Notas é ${media.toFixed(2)}`;

    //criar as condições
    if (media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
        resp2.style.color = "grey";
    } else if (media >=4){
        resp2.innerText = `${nome}!, Você ficou de recuperação`;
        resp2.style.color = "orange";
    } else {
        resp2.innerText = `${nome}!, foi de F`;
        resp2.style.color = "red";
    }
})