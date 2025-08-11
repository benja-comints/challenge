// declaracion de arreglo para almacenar nombres
let nombresAmigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombreIngresado = input.value.trim();

  if (nombreIngresado === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  nombresAmigos.push(nombreIngresado);

  let lista = document.getElementById("listaAmigos");
  let li = document.createElement("li");
  li.textContent = nombreIngresado;
  lista.appendChild(li);

  input.value = "";
  input.focus();
}

function sortearAmigo() {
  if (nombresAmigos.length === 0) {
    alert("Debes ingresar al menos un nombre.");
    return;
  }

  // Elegir un nombre al azar
  let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
  let nombreElegido = nombresAmigos[indiceAleatorio];

  // Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 
  
  // Limpiar resultado 
  let li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${nombreElegido}`;
  resultado.appendChild(li);
}