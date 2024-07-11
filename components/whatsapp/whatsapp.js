let isChatboxVisible = false;
const chatbox = document.querySelector(".whatsapp-container .whatsapp-chatbox");
function hideChatbox() {
  isChatboxVisible = false;
  chatbox.style.display = "none";
}

function toggleChatbox() {
  isChatboxVisible = !isChatboxVisible;
  chatbox.style.display = isChatboxVisible ? "block" : "none";
}

const floatingButton = document.querySelector('.whatsapp-boton');

// Agregar evento click al documento para detectar clics fuera del botón flotante
document.addEventListener('click', function(event) {
    // Verificar si el clic ocurrió fuera del botón flotante
    if (!floatingButton.contains(event.target)) {
        // Remover la clase 'detenerAnimacion' para reanudar la animación
        floatingButton.classList.remove('detenerAnimacion');
    }
});

// Agregar evento click al botón flotante
floatingButton.addEventListener('click', function(event) {
    // Evitar que el clic se propague y detenga la propagación
    event.stopPropagation();

    // Alternar la clase 'detenerAnimacion' para pausar/resumir la animación
    this.classList.toggle('detenerAnimacion');
});
