// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre válido.");
  } else {
    amigos.push(nombre); // Agregar nombre al array
    actualizarListaAmigos(); // Actualizar la lista en el DOM
  }

  input.value = ""; // Limpiar el campo de texto
}

// Función para actualizar la lista visible en el DOM
function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista anterior

  // Recorrer el array de amigos y crear elementos <li>
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
  if (amigos.length === 0) {
    alert(
      "La lista está vacía. Por favor, agregue nombres antes de realizar el sorteo."
    );
    return;
  }

  // Seleccionar un nombre al azar
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en la lista de resultados
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado} es el amigo secreto seleccionado</li>`;
}
