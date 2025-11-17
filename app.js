// ===== SELECTORS =====
const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const productImg = document.getElementById("product_img");
const nameProduct = document.getElementById("product_name");
const productDetails = document.getElementById("product_details");
const searchSection = document.getElementById("searchSection");
const detailSection = document.getElementById("detailSection");
const backBtn = document.getElementById("backBtn");

// FAVOURITE UI
const openFavoritesBtn = document.getElementById("openFavoritesBtn");
const favoriteSection = document.getElementById("favoriteSection");
const favoriteList = document.getElementById("favoriteList");
const closeFavBtn = document.getElementById("closeFavBtn");

// Load favorites from localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// PRODUCT LIST 
var products = [{
    name: "Apple 🍎",
    sugar: "10g",
    fat: "0.2g",
    calories: 52,
    healthy: true,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Coca Cola 🥤",
    sugar: "35g",
    fat: "0g",
    calories: 140,
    healthy: false,
    image: "https://www.coca-cola.com/content/dam/onexp/ar/es/coca-cola/es_coca-cola-sabor-original_prod_orginal-bottle_750x750_v1.jpg"
  },
  {
    name: "Yogurt 🥣",
    sugar: "4g",
    fat: "3g",
    calories: 60,
    healthy: true,
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/B6ADCE14-192F-4B0E-8498-A71B2F6F4A91/Derivates/C6F250B0-6E8F-47ED-BFAD-1C617B7E54A1.jpg"
  },
  {
    name: "French Fries 🍟",
    sugar: "0g",
    fat: "15g",
    calories: 250,
    healthy: false,
    image: "https://www.seriouseats.com/thmb/Il7mv9ZSDh7n0cZz3t3V-28ImkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg"
  },
  {
    name: "Water 💧",
    sugar: "0g",
    fat: "0g",
    calories: 0,
    healthy: true,
    image: "https://www.thespruceeats.com/thmb/4Uxr_CKC7aR-UhEicIvVqLaiO0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg"
  },
  {
    name: "Whole Wheat Bread 🍞",
    sugar: "4g",
    fat: "1g",
    calories: 70,
    healthy: true,
    image: "https://www.allrecipes.com/thmb/_piMRxT9zYHP39Lnz6-lObHzEWw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-6773-simple-whole-wheat-bread-DDMFS-4x3-B-969e7bce922948959cb9e85aa4b2ff0d.jpg"
  },
  {
    name: "Milk Chocolate 🍫",
    sugar: "25g",
    fat: "12g",
    calories: 220,
    healthy: false,
    image: "https://st2.depositphotos.com/10614052/43659/i/450/depositphotos_436599088-stock-photo-glass-aromatic-chocolate-milk-wooden.jpg"
  },
  {
    name: "Banana 🍌",
    sugar: "12g",
    fat: "0.3g",
    calories: 89,
    healthy: true,
    image: "https://centrulnatura.ro/wp-content/uploads/2015/03/Tros-Bananen-2.jpg"
  },
  {
    name: "Pizza 🍕",
    sugar: "3g",
    fat: "10g",
    calories: 285,
    healthy: false,
    image: "https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"
  },
  {
    name: "Grilled Chicken 🍗",
    sugar: "0g",
    fat: "5g",
    calories: 165,
    healthy: true,
    image: "https://ifoodreal.com/wp-content/uploads/2022/06/fg-grilled-chicken-breast-recipes.jpg"
  },
  {
    name: "Chocolate Cake 🍰",
    sugar: "30g",
    fat: "15g",
    calories: 350,
    healthy: false,
    image: "https://static.toiimg.com/thumb/53096885.cms?imgsize=1572013&width=800&height=800"
  },
  {
    name: "Orange 🍊",
    sugar: "9g",
    fat: "0.1g",
    calories: 43,
    healthy: true,
    image: "https://www.rd.com/wp-content/uploads/2017/12/01_oranges_Finally%E2%80%94Here%E2%80%99s-Which-%E2%80%9COrange%E2%80%9D-Came-First-the-Color-or-the-Fruit_691064353_Lucky-Business.jpg"
  },
  {
    name: "Buttered Popcorn 🍿",
    sugar: "0g",
    fat: "8g",
    calories: 200,
    healthy: false,
    image: "https://joyfoodsunshine.com/wp-content/uploads/2023/04/homemade-butter-popcorn-recipe-1.jpg"
  },
  {
    name: "Green Salad 🥗",
    sugar: "2g",
    fat: "0.5g",
    calories: 30,
    healthy: true,
    image: "https://hips.hearstapps.com/hmg-prod/images/spring-salad-with-radishes-recipe-4-67fd3378074d2.jpeg?crop=1xw:0.75xh;center,top&resize=1200:*"
  },
  {
    name: "Hamburger 🍔",
    sugar: "5g",
    fat: "20g",
    calories: 295,
    healthy: false,
    image: "https://www.allrecipes.com/thmb/UsNtGp9OgIsKw6cPqGQ-CxLmnTE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72657-best-hamburger-ever-ddmfs-4x3-hero-878e801ab30445988d007461782b3c25.jpg"
  },
  {
    name: "Ice Cream 🍦",
    sugar: "20g",
    fat: "10g",
    calories: 200,
    healthy: false,
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/7C3748CF-C170-4EB7-9688-5A1E5A2523C2/Derivates/06966FFF-00F3-4B3E-96A2-6A9B2316F272.jpg"
  }
];
// ===== FUNCTIONS  =====

// Show products based on search
function showProduct() {
  const textInput = searchInput.value.toLowerCase();
  productList.innerHTML = "";
  let findProduct = false;

  products.forEach(product => {
    if (textInput === "" || product.name.toLowerCase().includes(textInput)) {
      findProduct = true;

      const card = document.createElement("div");
      card.className = "card";

      const status = product.healthy ? "✅ Healthy" : "⚠️ Unhealthy";
      const isFav = favorites.includes(product.name);
      const star = isFav ? "★" : "☆";

      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Sugar: ${product.sugar}</p>
        <p>Fat: ${product.fat}</p>
        <p>Calories: ${product.calories}</p>
        <h4>${status}</h4>
        <span class="fav-btn" style="font-size:20px; cursor:pointer">${star}</span>
      `;

      // OPEN DETAILS
      card.addEventListener("click", () => {
        showDeatail(product);
      });

      // BTN FAVOURITES
      const favBtn = card.querySelector(".fav-btn");
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (favorites.includes(product.name)) {
          favorites = favorites.filter(n => n !== product.name);
          favBtn.textContent = "☆";
        } else {
          favorites.push(product.name);
          favBtn.textContent = "★";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
      });

      productList.appendChild(card);
    }
  });

  if (!findProduct) {
    productList.innerHTML = "<p>Product not found</p>";
  }
}

// SHOW DETAILS
function showDeatail(product) {
  productImg.src = product.image || "";
  nameProduct.innerHTML = product.name;
  productDetails.innerHTML = `
    <strong>Sugar: </strong> ${product.sugar}<br>
    <strong>Fat:</strong> ${product.fat}<br>
    <strong>Calories:</strong> ${product.calories}<br>
    <strong>Status:</strong> ${product.healthy ? "✅ Healthy" : "⚠️ Unhealthy"}
  `;

  searchSection.style.display = "none";
  detailSection.style.display = "flex";
}

// Render favorites as a card gallery
function renderFavoritesList() {
  favoriteList.innerHTML = "";

  if (favorites.length === 0) {
    favoriteList.innerHTML = "<p>No hay favoritos.</p>";
    return;
  }

  favorites.forEach(name => {
    const product = products.find(p => p.name === name);
    if (!product) return;

    const card = document.createElement("div");
    card.className = "card";

    const status = product.healthy ? "✅ Healthy" : "⚠️ Unhealthy";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Sugar: ${product.sugar}</p>
      <p>Fat: ${product.fat}</p>
      <p>Calories: ${product.calories}</p>
      <h4>${status}</h4>
      <span class="fav-btn" style="font-size:20px; cursor:pointer">★</span>
    `;

    // Open details on click
    card.addEventListener("click", () => {
      showDeatail(product);
      favoriteSection.style.display = "none";
      detailSection.style.display = "flex";
    });

    // Remove favorite
    const favBtn = card.querySelector(".fav-btn");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      favorites = favorites.filter(item => item !== product.name);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderFavoritesList();
    });

    favoriteList.appendChild(card);
  });
}

// ===== EVENTS UI =====
// Evento del input
searchInput.addEventListener("keyup", showProduct);

// Favorites event
openFavoritesBtn.addEventListener("click", () => {
  searchSection.style.display = "none";
  detailSection.style.display = "none";

  renderFavoritesList();
  favoriteSection.style.display = "block";
});

closeFavBtn.addEventListener("click", () => {
  favoriteSection.style.display = "none";
  searchSection.style.display = "flex";
});

// Event when exiting the detail view

backBtn.addEventListener("click", () => {
  detailSection.style.display = "none";
  searchSection.style.display = "flex";
});

// ===== START =====
showProduct();