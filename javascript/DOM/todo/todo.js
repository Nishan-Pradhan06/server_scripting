const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        addTask(taskValue);
        taskInput.value = " ";
    }
})

function addTask(task) {
    const row = document.createElement("tr");
    row.innerHTML =
        `<th scope="row" class="task-item">${task}</th>
                <td>
                    <button class="btn btn-success complete-btn">Complete</button>
                    <button class="btn btn-danger delete-btn">Delete</button>
                </td>
                `;
    //append task
    taskList.appendChild(row);
    // add event for compelte btn
    row.querySelector(".complete-btn").addEventListener("click", function () {
        markComplete(row);
    })
    //add event for delete
    row.querySelector(".delete-btn").addEventListener("click", function () {
        deleteTask(row);
    })

}


function markComplete(row) {
    const taskItem = row.querySelector(".task-item");
    taskItem.style.textDecoration = "line-through";
    taskItem.style.color = "grey";
    row.querySelector(".complete-btn").disabled = true;
    window.alert("Mark as Completed.");
}

function deleteTask(row) {
    row.remove();
}