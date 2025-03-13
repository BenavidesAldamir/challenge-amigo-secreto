// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
  
    if (!nombreAmigo || !isNaN(nombreAmigo)){ //Si el campo está vacio o si lo que se introduce es un número
        alert("Por favor, introduce un nombre válido");
        inputAmigo.value = "";
        return;
    }
    amigos.push(nombreAmigo);
    inputAmigo.value = ""; // Despues de agregar el nombre al arreglo limpia el campo de input
    inputAmigo.focus(); // Comando para que siempre quede el cursor en el campo del input
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Luego de capturar el valor dejame el campo vacio

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length === 0 || amigos.length === 1){
        alert("Digita al menos 2 nombres para sortear");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random()* amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = ""; // Dejame la lista vacia luego de sortear 
}

