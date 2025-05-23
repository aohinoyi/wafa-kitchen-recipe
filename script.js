const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const recipeCards = document.querySelectorAll(".recipe-card");

function filterRecipes() {
  const searchText = searchInput.value.toLowerCase();
  const selectedType = filterSelect.value;

  recipeCards.forEach((card) => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    const ingredients = Array.from(card.querySelectorAll("ul li")).map((li) =>
      li.textContent.toLowerCase()
    );
    const matchesSearch =
      name.includes(searchText) ||
      ingredients.some((ing) => ing.includes(searchText));
    const matchesType =
      selectedType === "all" || card.dataset.type === selectedType;

    if (matchesSearch && matchesType) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterRecipes);
filterSelect.addEventListener("change", filterRecipes);
