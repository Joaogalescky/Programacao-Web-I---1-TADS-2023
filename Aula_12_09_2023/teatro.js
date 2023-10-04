//capturar os elementos da página
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const Poltronas = 240; //quantidade de poltronas

const reservadas = []; //vetor com as poltronas reservadas

window.addEventListener("load", () => {
    //criar "split" (separador de string)
    const ocupadas = localStorage.getItem("teatroOcupadas")
        ? localStorage.getItem("teatroOcupadas").split(";")
        : [];

    for(let i = 1; i <= Poltronas; i++){
        const figure = document.createElement("figure"); //tag figure
        const imgStatus = document.createElement("img"); //tag img

        imgStatus.src = ocupadas.includes(i.toString())
            ? "assets/ocupada.jpg"
            : "assets/disponivel.jpg";
        imgStatus.className = "poltrona"

        const figureCap = document.createElement("figcaption");
        
        //quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? "00": i < 100 ? "0" : "";

        //criar número das poltronas
        const num = document.createTextNode(`[${zeros}${i}]`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        if(i % 24 ==12) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure);

        if(i % 24 == 0 && dvPalco.appendChild(document.createElement("br")));
    }
})

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value);

    if(poltrona > Poltronas){
        alert("Informe o número de poltrona válido");
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }

    //captura a imagem da poltrona, filho de divPalco. É -1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];
    //modifica o atributo da imagem
    imgPoltrona.src = "assets/reservada.jpg"
    reservadas.push(poltrona);

    frm.inPoltrona.value = "";
    frm.inPoltrona.focus();
})

frm.btConfirmar.addEventListener("click", () => {

    if(reservadas.length == 0) {
        alert("Não há poltronas reservadas");
        frm.inPoltrona.focus();
        return;
    }

    const ocupadas = [];
    
    for(let i = reservadas.length - 1; i >= 0; i--){
        ocupadas.push(reservadas[i]);
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1];
        imgPoltrona.src = "assets/ocupada.jpg"

        reservadas.pop();
    }
})