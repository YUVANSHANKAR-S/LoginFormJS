const toDoFunction = () => {
  let botton = document.getElementById("botton");

  botton.addEventListener("click", () => {
    let input = document.getElementById("input");
    let list = document.getElementById("list");

    if (input.value === "" || input.value === null) {
      alert("Add Your Day List");
    } else {
      let division = document.createElement("div");
      division.innerHTML = `<div >${input.value} </div>`;
      division.classList.add("list");
      list.appendChild(division);

      division.addEventListener("click", () => {
        division.setAttribute("style", "text-decoration: line-through");
      });
      division.addEventListener("doubleClick", () => {
        delete division;
      });
    }
  });
};

window.onload = () => {
  toDoFunction();
};
