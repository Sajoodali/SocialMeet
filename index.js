const menuItems = document.querySelectorAll(".menu-item");

const changeActiveclass = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveclass();
    item.classList.add("active");
  });
});
