const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");
const yearPlaceholder = document.getElementById("year");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow =
        selectedCategory === "all" || categories.includes(selectedCategory);

      card.style.display = shouldShow ? "flex" : "none";
    });
  });
});

if (yearPlaceholder) {
  yearPlaceholder.textContent = new Date().getFullYear().toString();
}
