function addTask() {
  var taskNameInput = document.getElementById("taskNameInput");
  var taskDateInput = document.getElementById("taskDateInput");
  var taskList = document.querySelector("#taskList tbody");
  var emptyMessage = document.getElementById("emptyMessage");
  var taskName = taskNameInput.value.trim();
  var taskDate = taskDateInput.value;

  if (taskName !== "") {
    if (!isValidDate(taskDate)) {
      alert("Please enter a valid date!");
      return;
    }

    var newRow = taskList.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.textContent = taskList.rows.length;
    cell2.textContent = taskName;
    cell2.classList.add("task-name");
    cell3.textContent = taskDate;
    cell4.innerHTML =
      '<div class="action-icons"><button class="delete-btn" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button></div>';

    if (taskList.rows.length % 2 === 0) {
      newRow.classList.add("even-row");
    } else {
      newRow.classList.add("odd-row");
    }

    taskNameInput.value = "";
    taskDateInput.value = "";

    emptyMessage.style.display = "none";
  } else {
    alert("Please enter a task name!");
  }
}

function isValidDate(dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false;
  var d = new Date(dateString);
  var dNum = d.getTime();
  if (!dNum && dNum !== 0) return false;
  return d.toISOString().slice(0, 10) === dateString;
}

function deleteTask(btn) {
  var row = btn.closest("tr");
  row.parentNode.removeChild(row);

  var taskList = document.querySelector("#taskList tbody");
  var emptyMessage = document.getElementById("emptyMessage");
  if (taskList.rows.length === 0) {
    emptyMessage.style.display = "block";
  }
}

function deleteAllTasks() {
  var taskList = document.querySelector("#taskList tbody");
  taskList.innerHTML = "";

  var emptyMessage = document.getElementById("emptyMessage");
  emptyMessage.style.display = "block";
}
