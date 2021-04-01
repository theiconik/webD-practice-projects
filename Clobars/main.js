const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

toggle.onclick = () => {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};

document.onclick = (event) => {
  if (event.target.id !== "sidebar" && event.target.id !== "toggle") {
    toggle.classList.remove("active");
    sidebar.classList.remove("active");
  }
};
