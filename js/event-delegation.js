const container = document.querySelector(".js-container");
container.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  console.dir(event.target);
}
