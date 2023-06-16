//Criar referências aos elementos da pagina

const frm = document.querySelector("form")
const outProvavel = document.querySelector("h3")
const outTipo = document.querySelector("h4")

const inLadoA = document.getElementById("inLadoA");
const inLadoB = document.getElementById("inLadoB");
const inLadoC = document.getElementById("inLadoC");

//adicionando uma ação de click ao button

frm.addEventListener("submit", (e) => {
    
    outTipo.innerText = ""
    outProvavel.innerText = ""

    //converter para número
    let ladoA = Number(frm.inLadoA.value);
    let ladoB = Number(frm.inLadoB.value);
    let ladoC = Number(frm.inLadoC.value);

    //evita o envio do formulario
    e.preventDefault();

    //comparar as medidas para saber se possivel formar triangulo
    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB ) {
        outProvavel.innerText = "Lados não podem formar um triângulo";
    } 

    else {
        outProvavel.innerText = "Lados podem formar um triângulo";

        //verificar qual é o tipo do triângulo
        if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
            outTipo.innerText = "Esse triângulo é Equilátero";
            outTipo.style.color = "red";
        }

        else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
            outTipo.innerText = "Esse triângulo é Isósceles";
            outTipo.style.color = "blue";
        } 
        else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
            outTipo.innerText = "Esse triângulo é Escaleno";
            outTipo.style.color = "green";
        }
    }
})