let screnHeight = document.querySelector("body").scrollHeight / 3;

function origin() {
  document.documentElement.scrollTop = screnHeight;
}

function allowDrop(evevt) {
  evevt.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
