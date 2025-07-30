// =========================================== Variables ==============================
const toastContainer = document.querySelector(".toast-container");
const snow = document.querySelector("#snow");
const body = document.querySelector("body");
const darkMood = document.querySelector(".darkmood");
const login = document.querySelector(".login");
const headerContainer = document.querySelector(".header_container");
const change = document.querySelector(".change")
let snowNumber = 150;
let flag = true;
// =========================================== Variables ==============================

// =========================================== Compare js ================================
document.addEventListener("DOMContentLoaded", () => {
 comparejs();
});

function getCompareList() {
 return JSON.parse(localStorage.getItem("compareList")) || [];
}

function saveCompareList(list) {
 localStorage.setItem("compareList", JSON.stringify(list));
}

function comparejs() {
 let compareList = getCompareList();
 h1namber(compareList);

 if (compareList.length === 0) return;

 const main = document.querySelector("main");
 const productcontainer = document.createElement("div");
 productcontainer.classList.add("productcontainer");

 const comparebox = document.createElement("div");
 comparebox.classList.add("comparebox");

 const catagory = document.createElement("div");
 catagory.classList.add("catagory");

 const pName = document.createElement("p");
 pName.classList.add("odddiv");
 pName.innerHTML = i18next.language === "az" ? "AD" : "Name";

 const pDESCRIPTION = document.createElement("p");
 pDESCRIPTION.classList.add("evendiv");
 pDESCRIPTION.innerHTML = i18next.language === "az" ? "TƏSVİRİ" : "DESCRIPTION";

 const pAVAILABILITY = document.createElement("p");
 pAVAILABILITY.classList.add("odddiv");
 pAVAILABILITY.innerHTML = i18next.language === "az" ? "Mövcudluq" : "AVAILABILITY";

 const pPRICE = document.createElement("p");
 pPRICE.classList.add("evendiv");
 pPRICE.innerHTML = i18next.language === "az" ? "QİYMƏT" : "PRICE";

 const pRATING = document.createElement("p");
 pRATING.classList.add("odddiv");
 pRATING.innerHTML = i18next.language === "az" ? "REYTİNQ" : "RATING";

 catagory.append(pName, pDESCRIPTION, pAVAILABILITY, pPRICE, pRATING);
 comparebox.append(catagory, productcontainer);
 main.append(comparebox);

 compareList.forEach(item => {
  const productbox = document.createElement("div");
  productbox.classList.add("productbox");

  const imagebox = document.createElement("div");
  imagebox.classList.add("imagebox");

  const deletebtn = document.createElement("button");
  deletebtn.classList.add("deletebtn");
  deletebtn.innerHTML = i18next.language === "az" ? "Sil" : "Delete";

  const icon = document.createElement("i");
  icon.classList.add("ri-delete-bin-line");
  deletebtn.prepend(icon);

  const img = document.createElement("img");
  img.classList.add("productfoto");
  img.src = item.image;

  const product = document.createElement("div");
  product.classList.add("product");

  const producPName = document.createElement("p");
  producPName.classList.add("odddiv");
  producPName.style.fontWeight = "bold";
  producPName.innerHTML = i18next.language === "az" ? item.name_az : item.name_en;

  const productPDESCRIPTION = document.createElement("p");
  productPDESCRIPTION.classList.add("evendiv");
  productPDESCRIPTION.innerHTML = i18next.language === "az"
   ? "Sifarişlər 4-6 gün ərzində çatdırılır"
   : "Orders are delivered within 4-6 days.";
  productPDESCRIPTION.style.textDecoration = "underline";

  const buttonP = document.createElement("p");
  buttonP.classList.add("odddiv");

  const anbarbtn = document.createElement("button");
  anbarbtn.classList.add("anbarda");
  anbarbtn.innerHTML = i18next.language === "az" ? "Anbarda" : "Warehouse";

  const prizeP = document.createElement("p");
  prizeP.classList.add("evendiv");
  prizeP.style.fontSize = "25px";
  prizeP.innerHTML = item.price;

  const ratingP = document.createElement("p");
  ratingP.classList.add("odddiv");
  ratingP.style.fontSize = "25px";
  ratingP.style.color = "#FFA500";
  ratingP.style.fontWeight = "900";
  ratingP.innerHTML = "5";

  const staricon = document.createElement("i");
  staricon.classList.add("ri-star-fill");

  ratingP.append(staricon);
  buttonP.append(anbarbtn);
  product.append(producPName, productPDESCRIPTION, buttonP, prizeP, ratingP);
  imagebox.append(deletebtn, img);
  productbox.append(imagebox, product);
  productcontainer.append(productbox);

  deletebtn.addEventListener("click", () => {
   removeCompareItem(item.id, productbox);
   initSweetToasts()
  });
 });
}

function h1namber(list) {
 const mainH1 = document.querySelector("main h1");
 if (!mainH1) return;
 mainH1.innerHTML = i18next.language === "az"
  ? `MÜQAYİSƏ EDİLMİŞ MƏHSULLAR(${list.length})`
  : `COMPARED PRODUCTS(${list.length})`;
}

function removeCompareItem(id, productbox) {
 let compareList = getCompareList();
 compareList = compareList.filter(item => item.id !== id);
 saveCompareList(compareList);

 if (productbox) productbox.remove();
 h1namber(compareList);

 if (compareList.length === 0) {
  const comparebox = document.querySelector(".comparebox");
  if (comparebox) comparebox.remove();
 }
}
// =========================================== Compare js ================================


// =========================================== Notification JS ================================

function initSweetToasts() {
 let top = 10;
 createToast()
}

function createToast(isIconClick, messageText = i18next.t("SuccessTextTwo")) {
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
// =========================================== Notification JS ================================


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
     Success: "Ugurlu!",
     SuccessTextTwo: "Kart silindi",
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
     Success: "Success!",
     SuccessTextTwo: "Removed from card",
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
 document.querySelector('[data-i18n="Login"]').textContent =
  i18next.t("Login");
 let SuccessTextTwo = document.querySelector('[data-i18n="SuccessTextTwo"]');
 if (SuccessTextTwo) {
  SuccessTextTwo.textContent = i18next.t("SuccessTextTwo");
 }
 let Success = document.querySelector('[data-i18n="Success"]');
 if (Success) {
  Success.textContent = i18next.t("Success");
 }
}
// =========================================== Change Language ========================

// =========================================== Snow JS ================================
function createSnow() {
 let div = document.createElement("div");
 div.classList.add("snow");
 div.innerHTML = "❆";
 div.style.left = `${Math.random() * 90}vw`;
 div.style.animationDuration = `${40}s`;
 div.style.fontSize = `${1.4}em`;
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
// =========================================== Snow JS ================================

// =========================================== DarkMood JS ============================
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
  body.style.background = "rgb(35, 35, 35)";
  flag = false;
 } else if (flag == false) {
  darkMood.style.background = "radial-gradient(circle, #4e44b7 0, #0a2f5b 100%)";
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
  flag = true;
 }
});
// =========================================== DarkMood JS ============================