function myFunction() {
  const dropdown = document.getElementById("dropdown");
  const trigger = document.getElementById("dropdown-trigger");

  dropdown.classList.toggle("show");

  if (dropdown.classList.contains("show")) {
    trigger.classList.add("active");
  } else {
    trigger.classList.remove("active");
  }
}

window.onclick = function (event) {
  const dropdown = document.getElementById("dropdown");
  const trigger = document.getElementById("dropdown-trigger");

  if (!event.target.matches("#dropdown-trigger")) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      trigger.classList.remove("active");
    }
  }
};
