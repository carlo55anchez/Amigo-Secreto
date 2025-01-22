// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar si el campo está vacío y actualizar el array
  nombre === ""
    ? alert("Por favor, inserte un nombre válido.")
    : (amigos.push(nombre), actualizarListaAmigos());

  input.value = ""; // Limpiar el campo de texto
}

// Función para actualizar la lista visible en el DOM
function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = amigos
    .map(function (amigo) {
      return "<li>" + amigo + "</li>";
    })
    .join("");
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
  amigos.length === 0
    ? alert(
        "La lista está vacía. Por favor, agregue nombres antes de realizar el sorteo."
      )
    : (document.getElementById("resultado").innerHTML =
        "<li>" +
        amigos[Math.floor(Math.random() * amigos.length)] +
        " es el amigo secreto seleccionado</li>");
}
