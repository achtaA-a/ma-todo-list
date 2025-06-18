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
    // console.log(span1.textContent);
    const deleteBtn = li.querySelector(".deleteBtn");
    //console.log(checkbox);
    checkbox.addEventListener("click", () => {
        span1.classList.toggle("checked");
        counter();
    })

    editBtn.addEventListener("click", function () {
        const taskUpdate = prompt("editer tache:", span1.textContent)
        if (taskUpdate !== null) {
            span1.textContent = taskUpdate;
            checkbox.checked = false;
            span1.classList.remove("checked");
        }
        counter();
    })
    deleteBtn.addEventListener("click", function () {
        if (confirm("voulez-vous supprimer cette tache ?")) {
            li.remove(li);
        }
    })
};
const counter = () => {
    let completedtasks = document.querySelectorAll(".checked").length;
    let compteur = document.getElementById("completedCounter");
    compteur.textContent = completedtasks;

    let span2 = document.querySelectorAll("li > label > span.checked").length;
    let pind = document.getElementById("pendingCounter");
     pind .textContent = span2;
}
const delet = document.querySelector(".delete");

delet.addEventListener("click", () => {
    if (confirm("confirmez-nous ? ")) {
        tasks.innerHTML = "";
    }
    counter();

});

counter(); 
