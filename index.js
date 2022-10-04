document.querySelector("form").addEventListener("submit", changeIt);
var todoArr = JSON.parse(localStorage.getItem("TodoList")) || [];
var id = todoArr.length;
displayFun(todoArr);
function changeIt() {
  event.preventDefault();
  var todoObj = {
    task: document.getElementById("task").value,
    priority: document.getElementById("priority").value,
    id: id++,
  };
  todoArr.push(todoObj);
  localStorage.setItem("TodoList", JSON.stringify(todoArr));
  displayFun(todoArr);
}
function displayFun(todo) {
  document.querySelector("tbody").innerText = "";
  todo.map(function (elem, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elem.task;
    var td2 = document.createElement("td");
    if (elem.priority == "High") {
      td2.innerText = elem.priority;
      td2.style.backgroundColor = "Red";
    } else {
      td2.innerText = elem.priority;
      td2.style.backgroundColor = "Green";
    }

    var td3 = document.createElement("td");
    td3.innerText = "Delete";
    td3.addEventListener("click", function () {
      deleteR(index);
      // console.log(elem.id);
    });

    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
  });
}
function deleteR(index) {
  todoArr.splice(index, 1);
  localStorage.setItem("TodoList", JSON.stringify(todoArr));
  displayFun(todoArr);
}
