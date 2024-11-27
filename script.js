// Make the floating menu draggable
const menu = document.getElementById("menu");
const menuHeader = document.getElementById("menuHeader");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// When the user starts dragging
menuHeader.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - menu.offsetLeft;
  offsetY = e.clientY - menu.offsetTop;
  menu.style.cursor = "grabbing";
});

// While dragging
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    menu.style.left = `${e.clientX - offsetX}px`;
    menu.style.top = `${e.clientY - offsetY}px`;
  }
});

// Stop dragging
document.addEventListener("mouseup", () => {
  isDragging = false;
  menu.style.cursor = "grab";
});
