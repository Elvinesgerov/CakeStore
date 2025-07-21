// =========================================== Variables ==============================
let body = document.querySelector("body");
let main = document.querySelector("main");
let sup = document.querySelector("#sup");
let flex = document.querySelector(".flex");
let mainH2 = document.querySelector("main h2");
let snow = document.querySelector("#snow");
let darkMood = document.querySelector(".darkmood");
let headerContainer = document.querySelector(".header_container");
let span = document.querySelector(".text-2");
let favorite = JSON.parse(localStorage.getItem("favorite")) || []; // favorite objesi
let flag = true;
let snowNumber = 80;
let iconColors = JSON.parse(localStorage.getItem("iconColors")) || {}; // iconColors objesi
// =========================================== Variables ==============================


// =========================================== Change Language ========================
i18next.use(i18nextBrowserLanguageDetector).init(
  {
    resources: {
      az: {
        translation: {
          headerHome: "Ana səhifə",
          headerAbout: "Haqqında",
          headerVacancies: "Vakansiya",
          headerContact: "Əlaqə",
          headerChange: "Dili Dəyişdirin",
          FavoriteProducts: "Sevimli Məhsullar",
        },
      },
      en: {
        translation: {
          headerHome: "Home",
          headerAbout: "About",
          headerVacancies: "Vacancies",
          headerContact: "Contact",
          headerChange: "Change Language",
          FavoriteProducts: "Favorite Products",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
  },
  function (err, t) {
    updateContent();
    document.querySelector(".change").addEventListener("click", function () {
      i18next.changeLanguage(
        i18next.language === "az" ? "en" : "az",
        updateContent
      );
    });
  }
);

function updateContent() {
  document.querySelector('[data-i18n="headerHome"]').textContent =
    i18next.t("headerHome");
  document.querySelector('[data-i18n="headerAbout"]').textContent =
    i18next.t("headerAbout");
  document.querySelector('[data-i18n="headerVacancies"]').textContent =
    i18next.t("headerVacancies");
  document.querySelector('[data-i18n="headerContact"]').textContent =
    i18next.t("headerContact");
  document.querySelector('[data-i18n="headerChange"]').textContent =
    i18next.t("headerChange");
  document.querySelector('[data-i18n="FavoriteProducts"]').textContent =
    i18next.t("FavoriteProducts");
}
// =========================================== Change Language ========================

// =========================================== Favorite Js ==============================

let mehsul = [
  {
    id: 1,
    name_en: "Chocolate cake",
    name_az: "Şokoladlı tort",
    prize: 60,
    foto: "../image/Foto3.jpg",
  },
  {
    id: 2,
    name_en: "Fruit cake",
    name_az: "Meyvəli tortu",
    prize: 70,
    foto: "../image/Foto2.jpg",
  },
  {
    id: 3,
    name_en: "Strawberry cake",
    name_az: "Çiyələkli tortu",
    prize: 50,
    foto: "../image/Foto1.jpg",
  },

  {
    id: 4,
    name_en: "Winter cake",
    name_az: "Qış tortu",
    prize: 80,
    foto: "../image/Winter.jpg",
  },

  {
    id: 5,
    name_en: "Birthday cake (1)",
    name_az: "Ad günü tortu (1)",
    prize: 60,
    foto: "../image/Birthday.jpg",
  },
  {
    id: 6,
    name_en: "Birthday cake (2)",
    name_az: "Ad günü tortu (2)",
    prize: 70,
    foto: "../image/Birthday2.jpg",
  },
  {
    id: 7,
    name_en: "Birthday cake (3)",
    name_az: "Ad günü tortu (3)",
    prize: 50,
    foto: "../image/Birthday3.jpg",
  },

  {
    id: 8,
    name_en: "Fruit cake(1)",
    name_az: "Meyvə tortu(1)",
    prize: 49,
    foto: "../image/Fruit.jpg",
  },

  {
    id: 9,
    name_en: "Fruit cake(2)",
    name_az: "Meyvə tortu(2)",
    prize: 65,
    foto: "../image/çilek.jpg",
  },

  {
    id: 10,
    name_en: "Fruit cake(3)",
    name_az: "Meyvə tortu(3)",
    prize: 50,
    foto: "../image/Fruit3.jpg",
  },

  {
    id: 11,
    name_en: "Chocolate cake(1)",
    name_az: "Şokoladlı tort(1)",
    prize: 60,
    foto: "../image/Chocolate.jpg",
  },

  {
    id: 12,
    name_en: "Chocolate cake(2)",
    name_az: "Şokoladlı tort(2)",
    prize: 70,
    foto: "../image/Chocolate2.jpg",
  },

  {
    id: 13,
    name_en: "Chocolate cake(3)",
    name_az: "Şokoladlı tort(3)",
    prize: 70,
    foto: "../image/Chocolate3.jpg",
  },

  {
    id: 14,
    name_en: "Cristmas  cake(1)",
    name_az: "Milad tortu (1)",
    prize: 59,
    foto: "../image/Chiristmas.jpg",
  },

  {
    id: 15,
    name_en: "Cristmas  cake(2)",
    name_az: "Milad tortu (2)",
    prize: 65,
    foto: "../image/Chiristmas2.jpg",
  },

  {
    id: 16,
    name_en: "Cristmas  cake(3)",
    name_az: "Milad tortu (3)",
    prize: 60,
    foto: "../image/Chiristmas3.jpg",
  },
];

favorite.forEach((product, index) => {
  let container = document.createElement("div");
  container.classList.add("container");
  flex.appendChild(container);

  let containerDiv = document.createElement("div");
  container.appendChild(containerDiv);
  // console.log(product.id);

  let i = document.createElement("i");
  i.classList.add("ri-heart-line");
  i.setAttribute("data-id", product.id);
  containerDiv.appendChild(i);

  let img = document.createElement("img");
  img.src = product.foto;
  containerDiv.appendChild(img);

  let pName = document.createElement("p");
  pName.innerHTML = `${
    i18next.language === "az" ? product.name_az : product.name_en
  }`;
  containerDiv.appendChild(pName);

  let pPrize = document.createElement("p");
  pPrize.innerHTML = `${product.prize} AZN`;
  containerDiv.appendChild(pPrize);

  let button = document.createElement("button");
  button.setAttribute("data-id", product.id);
  button.innerHTML = `${
    i18next.language === "az" ? "Səbət əlavə et" : "Add to basket"
  }`;
  containerDiv.appendChild(button);

  i.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");
    span.innerHTML = "Remove Card";

    setTimeout(() => {
      toast.classList.remove("active");
    }, 5000);
  });

  if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket", JSON.stringify([]));
  }

  button.addEventListener("click", (e) => {
    const id = parseInt(button.getAttribute("data-id"));
    const product = mehsul.find((item) => item.id == id);
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket.find((b) => b.id == product.id)) {
      basket.push(product);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    basketFunc();
  });

  if (iconColors[product.id] === "red") {
    i.style.color = "red";
  } else {
    i.style.color = "black";
    favoriteH2();
  }

  i.addEventListener("click", () => {
    toggleFavorite(product.id, container, i);
    favoriteH2();
  });

  button.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");

    setTimeout(() => {
      toast.classList.remove("active");
    }, 5000);
  });

  function favoriteH2() {
    mainH2.innerHTML = `${
      i18next.language === "az" ? "Məhsulun sayı" : "The Number of Product"
    }(${favorite.length})`;
  }
  favoriteH2();

  // =========================================== Notification JS ========================
  document.addEventListener("DOMContentLoaded", () => {
    let toastContainer = document.querySelector(".toast-container");

    let top = 10;

    function createToast(
      isIconClick,
      messageText = `${
        i18next.language === "az" ? "Səbətə Əlavə olundu" : "Added to card"
      }`
    ) {
      let toast = document.createElement("div");
      toast.classList.add("toast");

      if (top >= 400) {
        top = 10;
      }
      toast.style.marginTop = `${top}px`;
      top += 70;

      toastContainer.append(toast);

      let toastContent = document.createElement("div");
      toastContent.classList.add("toast-content");
      toast.append(toastContent);

      let check = document.createElement("i");
      check.classList.add("fas");
      check.classList.add("fas-solid");
      check.classList.add("fa-check");
      check.classList.add("check");
      toastContent.appendChild(check);

      let message = document.createElement("div");
      message.classList.add("message");
      toastContent.appendChild(message);

      let spanOne = document.createElement("span");
      // spanOne.innerHTML = "Success!";
      spanOne.innerHTML = `${
        i18next.language === "az" ? "Uğurlu" : "Success!"
      }`;
      spanOne.style.color = "green";
      spanOne.style.fontSize = "23px";
      spanOne.classList.add("text");
      spanOne.classList.add("text-1");
      spanOne.setAttribute("data-i18n", "Success");
      message.appendChild(spanOne);

      let spanTwo = document.createElement("span");
      spanTwo.classList.add("text");
      spanTwo.classList.add("text-2");
      spanTwo.setAttribute("data-i18n", "SuccessText");
      spanTwo.innerHTML = messageText;
      message.appendChild(spanTwo);

      let close = document.createElement("i");
      close.classList.add("fas");
      close.classList.add("fas-solid");
      close.classList.add("fa-xmark");
      close.classList.add("close");
      toast.appendChild(close);

      let progress = document.createElement("div");
      progress.classList.add("progress");
      toast.appendChild(progress);

      toast.classList.add("active");
      progress.classList.add("active");

      setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => {
          toast.remove();
        }, 500);
      }, 5000);

      close.addEventListener("click", () => {
        toast.classList.remove("active");
        setTimeout(() => {
          toast.remove();
        }, 500);
      });
    }

    button.addEventListener("click", () => createToast(false));

    i.addEventListener("click", () => {
      if (i.style.color === "red") {
        createToast(
          true,
          `${
            i18next.language === "az" ? "Səbətə Əlavə olundu" : "Added to card"
          }`
        );
        basketFunc();
      } else {
        createToast(
          true,
          `${i18next.language === "az" ? "Kard silindi" : "Removed from card"}`
        );
        basketFunc();
      }
    });
  });
});
// =========================================== Notification JS ========================

function toggleFavorite(productId, container, icon) {
  let storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];

  if (storedFavorites.some((item) => item.id === productId)) {
    storedFavorites = storedFavorites.filter((item) => item.id !== productId);
    icon.style.color = "black";
    basketFunc();
  } else {
    let productToAdd = mehsul.find((item) => item.id === productId);
    storedFavorites.push(productToAdd);
    icon.style.color = "red";
    basketFunc();
  }

  localStorage.setItem("favorite", JSON.stringify(storedFavorites));

  iconColors[productId] = icon.style.color;
  localStorage.setItem("iconColors", JSON.stringify(iconColors));
}
// =========================================== Favorite Js ==============================

// =========================================== Snow Js ================================
function createSnow() {
  let div = document.createElement("div");
  div.classList.add("snow");
  div.innerHTML = "❆";
  div.style.left = `${Math.random() * 90}vw`;
  div.style.animationDuration = `${15}s`;
  div.style.fontSize = `${1.2}em`;
  div.style.color = "red";

  snow.appendChild(div);
  div.addEventListener("animationend", () => {
    div.remove();
    createSnow();
  });
}

for (let i = 0; i < snowNumber; i++) {
  setTimeout(createSnow, i * 200);
}
// =========================================== Snow Js ================================

// =========================================== DarkMood Js ============================
darkMood.addEventListener("click", () => {
  if (flag == true) {
    darkMood.style.backgroundColor = "black";
    darkMood.style.color = "white";
    darkMood.style.boxShadow = "10px 5px 5px brown";
    headerContainer.style.backgroundColor = "black";
    body.style.backgroundColor = "rgb(35, 35, 35)";
    body.style.color = "white";
    flag = false;
  } else if (flag == false) {
    darkMood.style.backgroundColor = "white";
    darkMood.style.color = "black";
    darkMood.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
    headerContainer.style.backgroundColor = "#540d0d";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    flag = true;
  }
});
// =========================================== DarkMood Js ============================

// =========================================== Scroll Js ==============================
window.onscroll = function () {
  let goToTopButton = document.querySelector("#goToTopButton");

  if (window.scrollY > 1000) {
    goToTopButton.style.display = "flex";
  } else {
    goToTopButton.style.display = "none";
  }
};

function goToTop() {
  let currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - 30);
    setTimeout(goToTop, 10);
  }
}
// =========================================== Scroll Js ==============================

function basketFunc() {
  basket = JSON.parse(localStorage.getItem("basket"));
  sup.innerHTML = basket.length;
}
basketFunc();