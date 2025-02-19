// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    nombres.push(amigo);
    document.getElementById("amigo").value = "";
    console.log(amigo);
}

function sortearAmigo() {
    let amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)];
    document.getElementById("resultado").innerHTML = "El amigo secreto es: " + amigoSecreto;
}
