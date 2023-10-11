window.onload = () => {
  const form = document.getElementById("form");

  form.onsubmit = function (e) {
    e.preventDefault();
    const taskInput = document.getElementById("task");
    const task = taskInput.value;

    const main = document.getElementsByTagName("main")[0];
    const list = document.createElement("div");
    list.className = "todoList";

    const p = document.createElement("p");
    p.innerText = task;
    p.className = "todoTask";
    const button = document.createElement("button");
    button.innerText = "Elimina Task";
    button.className = "eraseButton";

    p.onclick = function (e) {
      const clickedP = e.target;
      clickedP.style.textDecoration = "line-through";
      clickedP.style.fontFamily = "'Handjet', sans-serif";
    };

    button.onclick = function (e) {
      const hasConfirmed = confirm("Sicuro di voler cancellare questa Task?");
      if (hasConfirmed) {
        const clickedBtn = e.target;
        clickedBtn.parentNode.remove();
      }
    };

    list.appendChild(p);
    list.appendChild(button);

    main.appendChild(list);

    taskInput.value = "";
  };
};
