function showDropdown() {
    document.getElementById("dropdown-menu").style.display = "block";
}function hideDropdown() {
    document.getElementById("dropdown-menu").style.display = "none";
};

const gridLinks = document.querySelectorAll(".grid-link");

gridLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    const scrollPos = target.offsetLeft;
    document.querySelector(".container-grid").scrollTo({
      left: scrollPos,
      behavior: "smooth",
    });
  });
});