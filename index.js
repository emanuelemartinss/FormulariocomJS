let nome = "Manu Martins";

let idade = 18; 
let acompanhadoPelosPais = true; 
let temIngresso = true;
let testouPositivoPraCovid = true;

const body = document.querySelector("body");
const registere
form.addEventListener ('submit', (e) => {
    e.preventDefault();
    const nome = form.name.value;
    const idade = form.age.value;
    const acompanhadoPelosPais = form.checkedParents.checked;
    const temIngressos =form.hasTickets.checked;
    const temCovid = form.hasCovid.checked;
    const password = form.password.value;

    const regexPassword = /^[\w&.\-]+$/

    if {}

    console.info (nome, idade, acompanhadoPelosPais, temIngressos, temCovid);

    const listaDeNomes = nome.split (" ");

if (listaDeNomes. length < 2) {
    alert("Por favor, digite seu nome completo");
    return;
}

if (idade <18){
    if (acompanhadoPelosPais) {
    alert("Você é menor de idade, e está acompanhando pelos pais, não pode entrar")
   }
}

if (temCovid) {
    alert("Você está com covid, não pode entrar");
    return
}

const registeredDiv = document.getElementById("registered")

registeredDiv.innerText = "Registrado!"

const body = document.querySelector("body");

body.style.backgroundColor = "green";

})