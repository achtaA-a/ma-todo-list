let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
// console.log(tasks);
const addTask = () => {
    let task = inputField.value.trim();
    const li = document.createElement("li");
    li.innerHTML = `
     <label>
            <input type="checkbox" />
            <span>${task}</span>
          </label>
          <span class="editBtn" title="Modifier"><i class="fa-solid fa-pen-to-square"></i></span>
          <span class="deleteBtn" title="Supprimer"><i class="fa-solid fa-trash"></i></span>
    `
    tasks.appendChild(li);
    inputField.value = "";
    //console.log(li);

    const checkbox = li.querySelector("input");
    let span1 = li.querySelector("span");
    const editBtn = li.querySelector(".editBtn");
    console.log(span1.textContent);

    //console.log(checkbox);
    checkbox.addEventListener("click", () => {
        span1.classList.toggle("checked");
    })

    editBtn.addEventListener("click", function () { 
        const taskUpdate = prompt("editer tache:", span1.textContent)
        if (taskUpdate !== null) {
            span1.textContent = taskUpdate ;
            checkbox.checked = false;
            span1.classList.remove("checked");
        }
    })
};