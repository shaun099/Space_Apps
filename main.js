const modules = document.querySelectorAll(
  ".mod1, .mod2, .mod3, .mod4, .mod5, .mod6, .mod7"
);
const containers = document.querySelectorAll(
  ".container-mod, .container-mod2, .container-mod3, .container-mod4, .container-mod5, .container-mod6, .container-mod7"
);

modules.forEach((module, index) => {
  module.addEventListener("click", () => {
    containers.forEach((container) => (container.style.visibility = "hidden"));
    containers[index].style.visibility = "visible";
  });
});
