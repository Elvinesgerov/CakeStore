// =========================================== Variables ==============================
const main = document.querySelector("main");
const mainH2 = document.querySelector("main h2");
const body = document.querySelector("body");
const total = document.createElement("div");
const snow = document.querySelector("#snow");
const darkMood = document.querySelector(".darkmood");
const sup = document.querySelector("#sup");
const change = document.querySelector(".change");
const headerContainer = document.querySelector(".header_container");
const login = document.querySelector(".login");
let basket = JSON.parse(localStorage.getItem("basket")) || [];
let jsbasket = JSON.parse(localStorage.getItem("jsbasket")) || [];
let totalAmount = 0;
let flag = true;
let snowNumber = 80;
// =========================================== Variables ==============================

// =========================================== Snow Js ================================
function createSnow() {
  let div = document.createElement("div");
  div.classList.add("snow");
  div.innerHTML = "❆";
  div.style.left = `${Math.random() * 90}vw`;
  div.style.animationDuration = `${15}s`;
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
// =========================================== Snow Js ================================

// =========================================== DarkMood Js ============================
darkMood.addEventListener("click", () => {
  if (flag == true) {
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
    body.style.backgroundColor = "rgb(35, 35, 35)";
    body.style.color = "white";
    flag = false;
  } else if (flag == false) {
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
    body.style.backgroundColor = "rgb(53, 53, 75)";
    headerContainer.style.backgroundColor = "#1A2255";
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
          Basket: "Səbət",
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
          Basket: "Basket",
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
  document.querySelector('[data-i18n="Basket"]').textContent =
    i18next.t("Basket");
  document.querySelector('[data-i18n="Login"]').textContent =
    i18next.t("Login");
}
// =========================================== Change Language ========================

// =========================================== Basket Js ==============================
total.classList.add("total");
body.appendChild(total);

function updateTotal() {
  total.innerHTML = `${i18next.language === "az" ? "Ümumi" : "Total"
    }: ${totalAmount} Azn`;
}

function updateLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}


basket.forEach((pruduct, index) => {
  let containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  let p = document.createElement("p");
  let number = pruduct.count || 1;

  let selectedSize = pruduct.selectedSize
    ? parseFloat(pruduct.selectedSize.replace("kq", "").trim())
    : 1;

  let c = pruduct.prize * number * selectedSize;
  p.innerText = `${number} ${i18next.language === "az" ? "ədəd" : "number"} x ${i18next.language === "az" ? pruduct.name_az : pruduct.name_en
    } — ${c.toFixed(2)} Azn`;

  totalAmount += c;
  updateTotal();

  let divButton = document.createElement("div");
  divButton.classList.add("button");
  let button1 = document.createElement("button");
  button1.innerText = "+";
  let button2 = document.createElement("button");
  button2.innerText = "-";
  let button3 = document.createElement("button");
  button3.innerText = "X";

  function basketLength() {
    mainH2.innerHTML = `${i18next.language === "az" ? "Məhsulun sayı" : "The Number of Product"}(${basket.length})`;
  }

  basketLength();
  containerDiv.appendChild(p);
  containerDiv.appendChild(divButton);
  divButton.appendChild(button1);
  divButton.appendChild(button2);
  divButton.appendChild(button3);
  main.appendChild(containerDiv);

  button1.addEventListener("click", () => {
    number++;
    pruduct.count = number;
    c = pruduct.prize * number * selectedSize;
    p.innerText = `${number} ${i18next.language === "az" ? "ədəd" : "number"
      } x ${i18next.language === "az" ? pruduct.name_az : pruduct.name_en
      } — ${c.toFixed(2)} Azn`;
    totalAmount += pruduct.prize * selectedSize;
    updateTotal();
    updateLocalStorage();
  });

  button2.addEventListener("click", () => {
    if (number > 1) {
      number--;
      pruduct.count = number;
      c = pruduct.prize * number * selectedSize;
      p.innerText = `${number} ${i18next.language === "az" ? "ədəd" : "number"
        } x ${i18next.language === "az" ? pruduct.name_az : pruduct.name_en
        } — ${c.toFixed(2)} Azn`;
      totalAmount -= pruduct.prize * selectedSize;
      updateTotal();
      updateLocalStorage();
    }
  });

  button3.addEventListener("click", () => {
    totalAmount -= pruduct.prize * number * selectedSize;
    updateTotal();
    basket.splice(index, 1);
    updateLocalStorage();
    containerDiv.remove();
    basketLength();
    basketFunc();
  });
});


updateTotal();
updateLocalStorage();

function basketFunc() {
  basket = JSON.parse(localStorage.getItem("basket"));
  sup.innerHTML = basket.length;
}
basketFunc();
// =========================================== Basket Js ==============================

// console.log(localStorage.clear());