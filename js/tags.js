//1ВАРИАНТ

// const tagsContainer = document.querySelector(".js-tags");
// let selectedTag = null;

// tagsContainer.addEventListener("click", onTagContainerClick);

// function onTagContainerClick(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const currentActiveBtn = document.querySelector(".tags__btn--active");
//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn--active");
//   }
//   // currentActiveBtn?.classList.remove("tags__btn--active");

//   const nextActiveBtn = event.target;
//   nextActiveBtn.classList.add("tags__btn--active");

//   selectedTag = nextActiveBtn.dataset.value;
// }

//2ВАРИАНТ

const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set();

tagsContainer.addEventListener("click", onTagContainerClick);

function onTagContainerClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = event.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("tags__btn--active");
  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle("tags__btn--active");

  console.log(selectedTags);
}
