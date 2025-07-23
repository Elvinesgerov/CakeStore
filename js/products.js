const sup = document.querySelector("#sup");
const toastContainer = document.querySelector(".toast-container");

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

if (!localStorage.getItem("basket")) {
 localStorage.setItem("basket", JSON.stringify([]));
}

function productsfunc() {
 const productscontainer = document.querySelector(".productscontainer");
 productscontainer.innerHTML = "";

 for (let i = 0; i < mehsul.length; i++) {
  let div = document.createElement("div");
  div.classList.add("productsbox");

  let img = document.createElement("img");
  img.src = mehsul[i].foto;

  let h3 = document.createElement("h3");
  h3.textContent = `${i18next.language == "az" ? "Ad" : "Name:"}`;

  let span = document.createElement("span");
  span.textContent = ` ${i18next.language == "az" ? mehsul[i].name_az : mehsul[i].name_en}`;

  let p = document.createElement("p");
  p.innerHTML = `${i18next.language == "az" ? "Qiymət" : "Prize"}: ${mehsul[i].prize}`;

  let divButtons = document.createElement("div");
  divButtons.classList.add("buttons");

  let buttonBasket = document.createElement("button");
  buttonBasket.innerHTML = "Add Basket";
  buttonBasket.setAttribute("data-id", mehsul[i].id);

  let buttonfavori = document.createElement("button");
  buttonfavori.innerHTML = "Add Favori";

  buttonBasket.addEventListener("click", () => {
   sebetfunc(buttonBasket);
   createToast(false)
  });

  divButtons.append(buttonBasket, buttonfavori);
  h3.appendChild(span);
  div.append(img, h3, p, divButtons);
  productscontainer.appendChild(div);
 }
}

document.addEventListener("DOMContentLoaded", productsfunc);

let basket = [];

function sebetfunc(params) {
 const id = parseInt(params.getAttribute("data-id"));
 const product = mehsul.find((item) => item.id === id);

 basket = JSON.parse(localStorage.getItem("basket"));

 const existingProduct = basket.find((b) => b.id === product.id);
 if (!existingProduct) {
  basket.push({ ...product, count: 1 });
 } else {
  existingProduct.count += 1;
 }

 localStorage.setItem("basket", JSON.stringify(basket));
 basketFunc();
}

function basketFunc() {
 basket = JSON.parse(localStorage.getItem("basket"));
 sup.innerHTML = basket.reduce((total, item) => total + item.count, 0);
}
basketFunc();


function createToast(isIconClick, messageText = i18next.t("SuccessText")) {
 const toast = document.createElement("div");
 toast.classList.add("toast");

 if (top >= 400) top = 10;
 toast.style.marginTop = `${top}px`;
 top += 70;

 toastContainer.appendChild(toast);

 const toastContent = document.createElement("div");
 toastContent.classList.add("toast-content");
 toast.appendChild(toastContent);

 const check = document.createElement("i");
 check.classList.add("fas", "fas-solid", "fa-check", "check");
 toastContent.appendChild(check);

 const message = document.createElement("div");
 message.classList.add("message");
 toastContent.appendChild(message);

 const spanOne = document.createElement("span");
 spanOne.setAttribute("data-i18n", "Success");
 spanOne.innerHTML = i18next.t("Success");
 spanOne.style.color = "green";
 spanOne.style.fontSize = "23px";
 spanOne.classList.add("text", "text-1");
 message.appendChild(spanOne);

 const spanTwo = document.createElement("span");
 spanTwo.classList.add("text", "text-2");
 spanTwo.setAttribute("data-i18n", isIconClick ? "SuccessTextTwo" : "SuccessText");
 spanTwo.innerHTML = messageText;
 message.appendChild(spanTwo);

 const close = document.createElement("i");
 close.classList.add("fas", "fas-solid", "fa-xmark", "close");
 toast.appendChild(close);

 const progress = document.createElement("div");
 progress.classList.add("progress");
 toast.appendChild(progress);

 toast.classList.add("active");
 progress.classList.add("active");

 const removeToast = () => {
  toast.classList.remove("active");
  setTimeout(() => toast.remove(), 500);
 };

 setTimeout(removeToast, 5000);
 close.addEventListener("click", removeToast);
}

// =========================================== Notification JS ========================

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
     SuccessText: "Səbətə Əlave Olundu",
     Success: "Ugurlu!",
    },
   },
   en: {
    translation: {
     headerHome: "Home",
     headerAbout: "About",
     headerVacancies: "Vacancies",
     headerContact: "Contact",
     headerChange: "Change Language",
     SuccessText: "Added to cart",
     Success: "Success!",
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
}
// =========================================== Change Language ========================