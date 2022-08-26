const refs = {
  parentEl: document.querySelector("#parent"),
  childEl: document.querySelector("#child"),
  innerChildEl: document.querySelector("#inner-child"),
};

refs.parentEl.addEventListener("click", onClickParent);
refs.childEl.addEventListener("click", onClickChild);
refs.innerChildEl.addEventListener("click", onClickInnerChild);

function onClickParent(event) {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
}

function onClickChild(event) {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
}

function onClickInnerChild(event) {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
}
