//Criar referências aos elementos da pagina

const frm = document.querySelector("form")
const outTempo = document.querySelector("h4")
const outTroco = document.querySelector("h5")

const inValor = document.getElementById("inValor");

//Adicionando uma ação de click ao button
frm.addEventListener("submit", (e) => {

  let tempo = 0
  let resto = 0
  let vezes = 0

  outTempo.innerText = ""
  outTroco.innerText = ""

  let valor = Number(frm.inValor.value);

  //evita o envio do formulario
  e.preventDefault();
  
    //Verificar se os valores são válidos
    if (valor >= 3.0) {

        tempo = 120;
        troco = valor - 3.0;

    } else if (valor >= 1.75) {

        tempo = 60;
        troco = valor - 1.75;

    } else if (valor >= 1.0) {

        tempo = 30;
        troco = valor - 1.0;

    } else {
        document.getElementById("resultado").innerText = "Valor Insuficiente";
        return;
    }
  
    inValor.value = "" //Limpa o campo de entrada
    inValor.focus() //Dá foco ao campo de entrada novamente

    outTempo.innerText = "Minutos Disponíveis: " + tempo
    outTroco.innerText = "Troco: R$ " + resto.toFixed(2) //toFixed() arredonda o número para cima
  }

)