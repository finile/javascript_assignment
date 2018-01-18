
"use strict";

var state = "on";

function toggleLight() {
  var image = document.getElementById('image');
  if ( state == "on" ) {
    state = "off";
    image.src = "img/off.jpg";
  } else {
    state = "on";
    image.src = "img/on.jpg";
  }
}

function timerSet() {

  var time = document.getElementById('inputtime').value;
  
  if (isNaN(time)) {
    alert('請輸入數字');
  }else if (time == ""){
    alert('尚未輸入倒數時間');
  }else {
    document.getElementById('timer').innerHTML = time;
    document.getElementById('inputtime').value = "";
  }

    function countDownTimer() {
    time = time - 1;
    if (time <= 0) {
      document.getElementById("image").src = "img/off.jpg";
      clearInterval(setting);
    }
    document.getElementById("timer").innerHTML = time;
  } 
  var setting = setInterval(countDownTimer, 1000);
}







