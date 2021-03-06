"use strict"

function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var input = document.getElementById("input").value;


  if (urgent.checked) {
     if( input == "" ) {
      input = "廢文一篇";
    };
    span.style.color = "red";
  } else if (inurgent.checked) {
    if( input == "" ) {
      input = "廢文一篇";
    };
    span.style.color = "darkgreen";
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
         span.style.color = "lightblue";
         this.parentNode.removeChild(replaceButton);
         this.parentNode.removeChild(removeButton);
       }
  }

  removeButton.textContent = "v";
  todo.appendChild(removeButton);

  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}


