// =========================================== Variables ==============================
const body = document.querySelector("body");
const main = document.querySelector("main");
const sup = document.querySelector("#sup");
const flex = document.querySelector(".flex");
const mainH2 = document.querySelector("main h2");
const snow = document.querySelector("#snow");
const darkMood = document.querySelector(".darkmood");
const headerContainer = document.querySelector(".header_container");
const login = document.querySelector(".login");
const span = document.querySelector(".text-2");
const change = document.querySelector(".change");
let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
let flag = true;
let snowNumber = 150;
let iconColors = JSON.parse(localStorage.getItem("iconColors")) || {};
// =========================================== Variables ==============================

// =========================================== Change Language ========================
i18next.use(i18nextBrowserLanguageDetector).init(
  {
    resources: {
      az: {
        translation: {
          headerHome: "Ana səhifə",
          Login: "Daxil ol",
          headerAbout: "Haqqında",
          headerVacancies: "Vakansiya",
          headerContact: "Əlaqə",
          headerChange: "Dili Dəyişdirin",
          FavoriteProducts: "Sevimli Məhsullar",
          Success: "Uğurlu",
          SuccessTextAdd: "Səbətə əlavə olundu",
          SuccessTextRemove: "Kartdan silindi",
          AddToBasket: "Səbətə əlavə et",
          RemoveCard: "Kartdan sil",
          ProductCount: "Məhsulun sayı",
        },
      },
      en: {
        translation: {
          headerHome: "Home",
          Login: "Login",
          headerAbout: "About",
          headerVacancies: "Vacancies",
          headerContact: "Contact",
          headerChange: "Change Language",
          FavoriteProducts: "Favorite Products",
          Success: "Success!",
          SuccessTextAdd: "Added to cart",
          SuccessTextRemove: "Removed from card",
          AddToBasket: "Add to basket",
          RemoveCard: "Remove from card",
          ProductCount: "Number of Products",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
  },
  function (err, t) {
    updateContent();
    document.querySelector(".change").addEventListener("click", function () {
      i18next.changeLanguage(i18next.language === "az" ? "en" : "az", updateContent);
    });
  }
);

function updateContent() {
  document.querySelector('[data-i18n="headerHome"]').textContent = i18next.t("headerHome");
  document.querySelector('[data-i18n="Login"]').textContent = i18next.t("Login");
  document.querySelector('[data-i18n="headerAbout"]').textContent = i18next.t("headerAbout");
  document.querySelector('[data-i18n="headerVacancies"]').textContent = i18next.t("headerVacancies");
  document.querySelector('[data-i18n="headerContact"]').textContent = i18next.t("headerContact");
  document.querySelector('[data-i18n="headerChange"]').textContent = i18next.t("headerChange");
  document.querySelector('[data-i18n="FavoriteProducts"]').textContent = i18next.t("FavoriteProducts");
  favoriteH2();
  document.querySelectorAll(".container").forEach((container) => {
    let pName = container.querySelector("p");
    let button = container.querySelector("button");
    let productId = parseInt(button.getAttribute("data-id"));
    let product = mehsul.find((p) => p.id === productId);
    if (product) {
      pName.textContent = i18next.language === "az" ? product.name_az : product.name_en;
      button.textContent = i18next.language === "az" ? i18next.t("AddToBasket") : i18next.t("AddToBasket");
    }
  });
}
// =========================================== Change Language ========================

// =========================================== Product Data ============================
let mehsul = [
  { id: 1, name_en: "Chocolate cake", name_az: "Şokoladlı tort", prize: 15, foto: "../image/Foto3.jpg" },
  { id: 2, name_en: "Fruit cake", name_az: "Meyvəli tortu", prize: 18, foto: "../image/Foto2.jpg" },
  { id: 3, name_en: "Strawberry cake", name_az: "Çiyələkli tortu", prize: 20, foto: "../image/Foto1.jpg" },
  { id: 4, name_en: "Winter cake", name_az: "Qış tortu", prize: 16, foto: "../image/Winter.jpg" },
  { id: 5, name_en: "Birthday cake (1)", name_az: "Ad günü tortu (1)", prize: 15, foto: "../image/Birthday.jpg" },
  { id: 6, name_en: "Birthday cake (2)", name_az: "Ad günü tortu (2)", prize: 15, foto: "../image/Birthday2.jpg" },
  { id: 7, name_en: "Birthday cake (3)", name_az: "Ad günü tortu (3)", prize: 15, foto: "../image/Birthday3.jpg" },
  { id: 8, name_en: "Fruit cake(1)", name_az: "Meyvə tortu(1)", prize: 20, foto: "../image/Fruit.jpg" },
  { id: 9, name_en: "Fruit cake(2)", name_az: "Meyvə tortu(2)", prize: 20, foto: "../image/çilek.jpg" },
  { id: 10, name_en: "Fruit cake(3)", name_az: "Meyvə tortu(3)", prize: 20, foto: "../image/Fruit3.jpg" },
  { id: 11, name_en: "Chocolate cake(1)", name_az: "Şokoladlı tort(1)", prize: 16, foto: "../image/Chocolate.jpg" },
  { id: 12, name_en: "Chocolate cake(2)", name_az: "Şokoladlı tort(2)", prize: 16, foto: "../image/Chocolate2.jpg" },
  { id: 13, name_en: "Chocolate cake(3)", name_az: "Şokoladlı tort(3)", prize: 16, foto: "../image/Chocolate3.jpg" },
  { id: 14, name_en: "Cristmas cake(1)", name_az: "Milad tortu (1)", prize: 18, foto: "../image/Chiristmas.jpg" },
  { id: 15, name_en: "Cristmas cake(2)", name_az: "Milad tortu (2)", prize: 18, foto: "../image/Chiristmas2.jpg" },
  { id: 16, name_en: "Cristmas cake(3)", name_az: "Milad tortu (3)", prize: 18, foto: "../image/Chiristmas3.jpg" },
];
// =========================================== Product Data ============================

// =========================================== Render Favorite Products ==================
function renderFavorites() {
  flex.innerHTML = "";

  favorite.forEach((product) => {
    let container = document.createElement("div");
    container.classList.add("container");
    flex.appendChild(container);

    let containerDiv = document.createElement("div");
    container.appendChild(containerDiv);

    let i = document.createElement("i");
    i.classList.add("ri-heart-line");
    i.setAttribute("data-id", product.id);
    containerDiv.appendChild(i);

    let img = document.createElement("img");
    img.src = product.foto;
    containerDiv.appendChild(img);

    let pName = document.createElement("p");
    pName.innerHTML = i18next.language === "az" ? product.name_az : product.name_en;
    containerDiv.appendChild(pName);

    let pPrize = document.createElement("p");
    pPrize.innerHTML = `${product.prize} AZN`;
    containerDiv.appendChild(pPrize);

    let button = document.createElement("button");
    button.setAttribute("data-id", product.id);
    button.innerHTML = i18next.language === "az" ? "Səbətə əlavə et" : "Add to basket";
    containerDiv.appendChild(button);

    i.style.color = iconColors[product.id] === "red" ? "red" : "black";

    i.addEventListener("click", () => toggleFavorite(product.id, container, i));

    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"));
      const productItem = mehsul.find((item) => item.id === id);
      let basket = JSON.parse(localStorage.getItem("basket")) || [];

      let existing = basket.find((b) => b.id === productItem.id);
      if (existing) {
        existing.count = (existing.count || 1) + 1;
      } else {
        basket.push({ ...productItem, count: 1 });
      }

      localStorage.setItem("basket", JSON.stringify(basket));
      basketFunc();
      createToast(false);
    });
  });

  favoriteH2();
}
// =========================================== Render Favorite Products ==================

// =========================================== Favorite toggle function ==================
function toggleFavorite(productId, container, icon) {
  let storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];

  if (storedFavorites.some((item) => item.id === productId)) {
    storedFavorites = storedFavorites.filter((item) => item.id !== productId);
    icon.style.color = "black";
    container.remove();
    createToast(true);
  } else {
    let productToAdd = mehsul.find((item) => item.id === productId);
    storedFavorites.push(productToAdd);
    icon.style.color = "red";
  }
  localStorage.setItem("favorite", JSON.stringify(storedFavorites));
  iconColors[productId] = icon.style.color;
  localStorage.setItem("iconColors", JSON.stringify(iconColors));
  favorite = storedFavorites;
  basketFunc();
  favoriteH2();
}
// =========================================== Favorite toggle function ==================

// =========================================== Toast notifications ========================
function createToast(isRemove, messageText) {
  let toastContainer = document.querySelector(".toast-container");
  let toast = document.createElement("div");
  toast.classList.add("toast");

  let toastContent = document.createElement("div");
  toastContent.classList.add("toast-content");

  let check = document.createElement("i");
  check.className = "fas fas-solid fa-check check";

  let message = document.createElement("div");
  message.classList.add("message");

  let spanOne = document.createElement("span");
  spanOne.className = "text text-1";
  spanOne.innerHTML = i18next.t("Success");
  spanOne.style.color = isRemove ? "red" : "green";

  let spanTwo = document.createElement("span");
  spanTwo.className = "text text-2";

  if (messageText) {
    spanTwo.innerHTML = messageText;
  } else {
    spanTwo.innerHTML = isRemove ? i18next.t("SuccessTextRemove") : i18next.t("SuccessTextAdd");
  }

  message.append(spanOne, spanTwo);
  toastContent.append(check, message);

  let close = document.createElement("i");
  close.className = "fas fas-solid fa-xmark close";

  let progress = document.createElement("div");
  progress.classList.add("progress");

  toast.append(toastContent, close, progress);
  toastContainer.appendChild(toast);

  toast.classList.add("active");
  progress.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
    setTimeout(() => toast.remove(), 500);
  }, 5000);

  close.addEventListener("click", () => {
    toast.classList.remove("active");
    setTimeout(() => toast.remove(), 500);
  });
}
// =========================================== Toast notifications ========================

// =========================================== Basket counter ============================
function basketFunc() {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  sup.innerHTML = basket.length
}
// =========================================== Basket counter ============================

// =========================================== Update favorite count =====================
function favoriteH2() {
  let updatedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
  mainH2.innerHTML = `${i18next.t("ProductCount")} (${updatedFavorites.length})`;
}
// =========================================== Update favorite count =====================

// =========================================== Snow effect ==============================
function createSnow() {
  let div = document.createElement("div");
  div.classList.add("snow");
  div.innerHTML = "❆";
  div.style.left = `${Math.random() * 90}vw`;
  div.style.animationDuration = `${40}s`;
  div.style.fontSize = `${1.2}em`;
  div.style.color = "white";

  snow.appendChild(div);
  div.addEventListener("animationend", () => {
    div.remove();
    createSnow();
  });
}

for (let i = 0; i < snowNumber; i++) {
  setTimeout(createSnow, i * 200);
}
// =========================================== Snow effect ==============================

// =========================================== Dark mode toggle =======================
darkMood.addEventListener("click", () => {
  if (flag) {
    darkMood.style.backgroundColor = "black";
    darkMood.style.color = "white";
    darkMood.style.boxShadow = "10px 5px 5px #33BCD0";
    login.style.backgroundColor = "black";
    login.style.color = "white";
    login.style.boxShadow = "10px 5px 5px #33BCD0";
    change.style.boxShadow = "10px 5px 5px #33BCD0";
    change.style.backgroundColor = "black";
    change.style.color = "white";
    headerContainer.style.backgroundColor = "black";
    body.style.background = "rgb(35, 35, 35)";
  } else {
    darkMood.style.backgroundColor = "#313B90";
    darkMood.style.color = "white";
    darkMood.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
    login.style.backgroundColor = "#313B90";
    login.style.color = "white";
    login.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
    change.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
    change.style.backgroundColor = "#313B90";
    change.style.color = "white";
    headerContainer.style.backgroundColor = "#1A2255";
    body.style.background = "radial-gradient(circle, #4e44b7 0, #0a2f5b 100%)";
  }
  flag = !flag;
});
// =========================================== Dark mode toggle =======================

// =========================================== Scroll to top button ===================
window.onscroll = function () {
  let goToTopButton = document.querySelector("#goToTopButton");

  if (window.scrollY > 1000) {
    goToTopButton.style.display = "flex";
  } else {
    goToTopButton.style.display = "none";
  }
};

function goToTop() {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - 30);
    setTimeout(goToTop, 10);
  }
}
// =========================================== Scroll to top button ===================


// =========================================== Init ===================================
document.addEventListener("DOMContentLoaded", () => {
  favorite = JSON.parse(localStorage.getItem("favorite")) || [];
  renderFavorites();
  basketFunc();
  favoriteH2();
});
// =========================================== Init ===================================