import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("my-button").onclick = myFunction;
  function myFunction() {
    console.log("hello world");
    document.querySelector("h1").innerHTML = "My notebook";
  }

  /* document.getElementById("add-data").onclick = addData;
function addData(){
  var x = document.createElement("li");
  var t = document.createTextNode("more text");
  x.appendChild(t);
  document.getElementById("mylist").appendChild(x);
  }*/

  document.getElementById("add-data").onclick = addData;
  function addData() {
    var x = document.createElement("li");
    x.innerHTML = document.getElementById("my-textarea").value;
    document.getElementById("mylist").appendChild(x);
  }
}
