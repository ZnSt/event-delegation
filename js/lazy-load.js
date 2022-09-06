const lazyImages = document.querySelectorAll("img[loading='lazy']");

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoad, { once: true });
});

function onImageLoad(event) {
  event.target.classList.add("appear");
}
