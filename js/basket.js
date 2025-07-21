// =========================================== Variables ==============================
let main = document.querySelector("main");
let mainH2 = document.querySelector("main h2");
let body = document.querySelector("body");
let total = document.createElement("div");
let snow = document.querySelector("#snow");
let darkMood = document.querySelector(".darkmood");
let sup = document.querySelector("#sup");
let headerContainer = document.querySelector(".header_container");
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
          Basket: "Səbət",
        },
      },
      en: {
        translation: {
          headerHome: "Home",
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
  let c = pruduct.prize * number;
  p.innerText = `${number} ${i18next.language === "az" ? "ədəd" : "number"} x ${i18next.language === "az" ? pruduct.name_az : pruduct.name_en
    } — ${c} Azn`;
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
    mainH2.innerHTML = `${i18next.language === "az" ? "Məhsulun sayı" : "The Number of Product"
      }(${basket.length})`;
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
    c = pruduct.prize * number;
    p.innerText = `${number} ${i18next.language === "az" ? "ədəd" : "number"
      } x ${i18next.language === "az" ? pruduct.name_az : pruduct.name_en
      } — ${c} Azn`;
    totalAmount += pruduct.prize;
    updateTotal();
    updateLocalStorage();
  });

  button2.addEventListener("click", () => {
    if (number > 1) {
      number--;
      pruduct.count = number;
      c = pruduct.prize * number;
      p.innerText = `${number} ${i18next.language === "az" ? "ədəd" : "number"
        } x ${i18next.language === "az" ? pruduct.name_az : pruduct.name_en
        } — ${c} Azn`;
      totalAmount -= pruduct.prize;
      updateTotal();
      updateLocalStorage();
    }
  });

  button3.addEventListener("click", () => {
    totalAmount -= pruduct.prize * number;
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

// jsbasket.forEach(jspruduct => {

// })
// =========================================== Basket Js ==============================