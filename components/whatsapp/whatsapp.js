function toggleChatbox() {
  let chatbox = document.querySelector(".whatsapp-chatbox");
  chatbox.style.display =
    chatbox.style.display === "none" || chatbox.style.display === ""
      ? "block"
      : "none";
}

const floatingButton = document.querySelector(".whatsapp-boton");

document.addEventListener("click", function (event) {
  if (!floatingButton.contains(event.target)) {
    floatingButton.classList.remove("detenerAnimacion");
  }
});

floatingButton.addEventListener("click", function (event) {
  event.stopPropagation();

  this.classList.toggle("detenerAnimacion");
});
