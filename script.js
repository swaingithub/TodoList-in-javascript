document.getElementById("task-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var taskInput = document.getElementById("task-input");
  var taskList = document.getElementById("task-list");

  var task = taskInput.value.trim();
  if (task !== "") {
    var listItem = document.createElement("li");
    listItem.innerText = task;

    var removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", function() {
      listItem.remove();
    });

    var completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", function() {
      listItem.classList.toggle("completed");
    });

    listItem.appendChild(removeButton);
    listItem.appendChild(completeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
});
