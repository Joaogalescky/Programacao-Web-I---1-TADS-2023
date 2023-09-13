//capturar os elementos da página
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const Poltronas = 240; //quantidade de poltronas

const reservadas =[]; //vetor com as poltronas reservadas

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

        dvPalco.appendChild(figure);
    }
})