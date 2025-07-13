let products = [];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");
  const buttons = document.querySelectorAll(".category-buttons button");


  fetch("data/Data.JSON")
    .then(res => res.json())
    .then(data => {
      products = data;
      displayProducts(products);
    });

 
  function displayProducts(items) {
    container.innerHTML = "";
    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="price">${item.price}</div>
          <button>Buy Now</button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      if (category === "All") {
        displayProducts(products);
      } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
      }
    });
  });
});
document.getElementById("review-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const review = document.getElementById("review").value.trim();

  if (name && review) {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    reviewCard.innerHTML = `
      <p class="reviewer">🧑 ${name}</p>
      <p>“${review}”</p>
    `;

    document.getElementById("feedback-list").appendChild(reviewCard);

    document.getElementById("review-form").reset();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  alert("👋 Welcome to ElectroTech — Muhtadee's Electrotech. Discover the Future of Innovation with Us!");
});