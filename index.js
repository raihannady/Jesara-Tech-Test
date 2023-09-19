function showMessage() {
  var pesanElement = document.getElementById("pesan");
  pesanElement.style.display = "block";

  var animatedButton = document.querySelector(".custom-btn");
  animatedButton.classList.add("animate");

  var h1Element = document.querySelector("h1");
  h1Element.classList.add("animate-text");

  setTimeout(() => {
    animatedButton.classList.remove("animate");
    h1Element.classList.remove("animate-text");
  }, 300);
}
