const panels = document.querySelectorAll(".panel");
const activeClass = "active";

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add(activeClass);
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    console.log("hi");
    panel.classList.remove(activeClass);
  });
}
