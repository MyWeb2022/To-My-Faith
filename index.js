
setTimeout(changeTheme, 5000);

function changeTheme() {
  var first = document.querySelector("#first");
  var second = document.querySelector("#second");

  first.style.display = "none";
  second.style.display = "block"
}
