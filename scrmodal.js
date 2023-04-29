// Obtener los elementos
var modalBtns = document.getElementsByClassName("modal-btn");
var modals = document.getElementsByClassName("modal");
var spans = document.getElementsByClassName("close");

// Abrir el modal correspondiente al hacer clic en el botón
for (var i = 0; i < modalBtns.length; i++) {
  modalBtns[i].onclick = function() {
    var modal = this.nextElementSibling;
    modal.style.display = "block";
  }
}

// Cerrar el modal correspondiente al hacer clic en la X
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = "none";
  }
}

// Cerrar el modal correspondiente al hacer clic fuera de él
window.onclick = function(event) {
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}