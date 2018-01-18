"use strict"

function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var input = document.getElementById("input").value;

  if( input == "" ) {
    input = "廢文一篇";
  }
  span.innerHTML = input;
  todo.appendChild(span);
  
  var replaceButton = document.createElement("button");
  replaceButton.onclick = function() {
      var input = document.getElementById("input").value;
      if( input == "" ) {
        alert("你並沒有輸入任何文字");
        return;
      }
      this.parentNode.firstChild.innerHTML = input;
      document.getElementById("input").value = "";
    }
  
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  var removeButton = document.createElement("button");
  removeButton.onclick = function() {
    var answer = confirm("是否確定刪除?")
       if (answer) {
         this.parentNode.parentNode.removeChild(this.parentNode);
       }
  }

  removeButton.textContent = "v";
  todo.appendChild(removeButton);

  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}


