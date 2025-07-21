// =========================================== Variables ==============================
const snow = document.querySelector("#snow");
const darkMood = document.querySelector(".darkmood");
const headerContainer = document.querySelector(".header_container");
const iconA = document.querySelectorAll(".icon a");
const contact = document.querySelector(".contact_input button");
const contactP = document.querySelector(".contact_input p");
const contactInput = document.querySelectorAll(".contact_input input");
const numberinput = document.querySelector(".numberinput");
const emailinput = document.querySelector(".emailinput");
const contactTextarea = document.querySelector(".contact_input textarea");
const change = document.querySelector(".change");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const login = document.querySelector(".login");
let flag = true;
let snowNumber = 150;
// =========================================== Variables ===============================

// =========================================== Snow JS ================================
function createSnow() {
  let div = document.createElement("div");
  div.classList.add("snow");
  div.innerHTML = "❆";
  div.style.left = `${Math.random() * 90}vw`;
  div.style.animationDuration = `${20}s`;
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
// =========================================== Snow JS ================================

// =========================================== Contact JS =============================
contact.addEventListener("click", () => {
  let emailValid = emailinput.value.trim().endsWith("com");
  let numberValue = numberinput.value.trim();
  let numberValid = numberValue.startsWith("994") && numberValue.length == 12;
  let allFieldsFilled = Array.from(contactInput).every(item => item.value.trim() !== "") &&
    contactTextarea.value.trim() !== "";

  if (!allFieldsFilled) {
    contactP.innerHTML = change.innerText == "Dili Dəyişdirin"
      ? "Her bir alani doldurun!"
      : "Fill in every field!";
  } else if (!numberValid) {
    contactP.innerHTML = change.innerText == "Dili Dəyişdirin"
      ? "Nömre minimum 13 reqemli olmalidir ve '+994' ile başlamalıdır"
      : "Number must be at least 13 digits and start with '994'";
  } else if (!emailValid) {
    contactP.innerHTML = change.innerText == "Dili Dəyişdirin"
      ? "Emailin sonu 'com' ile bitmelidir!"
      : "Email must end with 'com'!";
  } else {
    contactP.innerHTML = change.innerText == "Dili Dəyişdirin"
      ? "Məlumat Göndərildi"
      : "Information Sent";

    contactInput.forEach(item => item.value = "");
    contactTextarea.value = "";
  }

  contactP.style.display = "block";
});

// =========================================== Contact JS =============================

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
    iconA.forEach((item) => {
      item.style.color = "white";
    });
    body.style.backgroundColor = "rgb(35, 35, 35)";
    body.style.color = "white";
    footer.style.backgroundColor = "rgb(38, 38, 38)";
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
    iconA.forEach((item) => {
      item.style.color = "black";
    });
    footer.style.backgroundColor = "#1A2255";
    flag = true;
  }
});
// =========================================== DarkMood JS ============================

// =========================================== Scroll JS ==============================
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
// =========================================== Scroll JS ==============================

function basketFunc() {
  let sup = document.querySelector("#sup");
  basket = JSON.parse(localStorage.getItem("basket"));
  sup.innerHTML = basket.length;
}
basketFunc();

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
          contact: "Əlaqə",
          button: "Sorğu göndərmək",
          CONTACTDETAILS: "Əlaqə məlumatları",
          email: "E-poçt: elvin.esgerov2109@gmail.com",
          phone: "Telefon : +994 55 551 60 02",
          footerContact: "Əlaqə",
          footerAbout: "Haqqında",
          footerVacancies: "Vakansiya",
          footerHome: "Ana səhifə",
          Nizami: "Nizami: +994 55 551 60 01",
          Merdakan: "Mərdəkan: +994 55 551 60 02",
          Yasamal: "Yasamal: +994 55 551 60 03",
          Bakixanov: "Bakixanov: +994 55 551 60 04",
        },
      },
      en: {
        translation: {
          headerHome: "Home",
          headerAbout: "About",
          headerVacancies: "Vacancies",
          headerContact: "Contact",
          headerChange: "Change Language",
          contact: "Contact Us",
          button: "Send Request",
          CONTACTDETAILS: "Contact Details",
          email: "E-mail: elvin.esgerov2109@gmail.com",
          phone: "Phone : +994 55 551 60 02",
          footerContact: "Contact",
          footerAbout: "About",
          footerVacancies: "Vacancies",
          footerHome: "Home",
          Nizami: "Nizami: +994 55 551 60 01",
          Merdakan: "Mərdəkan: +994 55 551 60 02",
          Yasamal: "Yasamal: +994 55 551 60 03",
          Bakixanov: "Bakixanov: +994 55 551 60 04",
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
  document.querySelector('[data-i18n="contact"]').textContent =
    i18next.t("contact");
  document.querySelector('[data-i18n="button"]').textContent =
    i18next.t("button");
  document.querySelector('[data-i18n="email"]').textContent =
    i18next.t("email");
  document.querySelector('[data-i18n="phone"]').textContent =
    i18next.t("phone");
  document.querySelector('[data-i18n="CONTACTDETAILS"]').textContent =
    i18next.t("CONTACTDETAILS");
  document.querySelector('[data-i18n="footerContact"]').textContent =
    i18next.t("footerContact");
  document.querySelector('[data-i18n="footerAbout"]').textContent =
    i18next.t("footerAbout");
  document.querySelector('[data-i18n="footerVacancies"]').textContent =
    i18next.t("footerVacancies");
  document.querySelector('[data-i18n="footerHome"]').textContent =
    i18next.t("footerHome");
  document.querySelector('[data-i18n="Nizami"]').textContent =
    i18next.t("Nizami");
  document.querySelector('[data-i18n="Merdakan"]').textContent =
    i18next.t("Merdakan");
  document.querySelector('[data-i18n="Yasamal"]').textContent =
    i18next.t("Yasamal");
  document.querySelector('[data-i18n="Bakixanov"]').textContent =
    i18next.t("Bakixanov");
}
// =========================================== Change Language ========================
