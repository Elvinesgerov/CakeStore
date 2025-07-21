// =========================================== Variables ==============================
const sup = document.querySelector("#sup");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const snow = document.querySelector("#snow");
const body = document.querySelector("body");
const darkMood = document.querySelector(".darkmood");
const login = document.querySelector(".login");
const headerContainer = document.querySelector(".header_container");
const change = document.querySelector(".change");
const sectionContainer = document.querySelector(".section_container");
const sweetContainer = document.querySelector(".sweet_container h2");
const sweetMain = document.querySelectorAll(".sweet_main div");
const guestContainerOut = document.querySelector(".guest_container_out h2");
const guestContainerOutP = document.querySelector(".guest_container_out p");
const zeroContainerImg = document.querySelector(".zero_container img");
const sweet_mainButton = document.querySelectorAll(".sweet_main div button");
const sweet_mainIcon = document.querySelectorAll(".ri-heart-line");
const toastContainer = document.querySelector(".toast-container");
const compareIcon = document.querySelectorAll("#compareId");
const modalTitle = document.getElementById('modal-title');
const array = [
  "../image/Foto2.jpg",
  "../image/Foto7.jpg",
  "../image/header.jpg",
  "../image/Strawberry.jpg",
  "../image/Chiristmas.jpg",
];
let compareFlag = true;
let spanTwo;
let flag = true;
let snowNumber = 150;
let index = 0;
// =========================================== Variables ==============================


// =========================================== Reyting func ==============================
document.addEventListener('DOMContentLoaded', () => {
  const ratingInputs = document.querySelectorAll('.rating input[type="radio"]');

  ratingInputs.forEach(input => {
    const productId = input.id.split('_')[0].replace('product', '');
    const savedRating = localStorage.getItem(`rating_${productId}`);

    if (savedRating && input.value === savedRating) {
      input.checked = true;
    }
  });

  ratingInputs.forEach(input => {
    input.addEventListener('click', (event) => {
      const selectedInput = event.target;
      const productId = selectedInput.id.split('_')[0].replace('product', '');
      const currentRating = localStorage.getItem(`rating_${productId}`);

      if (currentRating === selectedInput.value) {
        localStorage.removeItem(`rating_${productId}`);
        selectedInput.checked = false;
      } else {
        localStorage.setItem(`rating_${productId}`, selectedInput.value);
        updateRatings(productId, selectedInput.value);
      }
    });
  });

  function updateRatings(productId, ratingValue) {
    document.querySelectorAll(`.product[data-product-id="${productId}"] .rating input[type="radio"]`).forEach(input => {
      if (input.value === ratingValue) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    });
  }
});
// =========================================== Reyting func ==============================



// =========================================== Change Img =============================
setInterval(function () {
  zeroContainerImg.src = array[index];
  index = (index + 1) % array.length;
}, 1500);
// =========================================== Change Img =============================

// =========================================== Snow JS ================================
function createSnow() {
  let div = document.createElement("div");
  div.classList.add("snow");
  div.innerHTML = "❆";
  div.style.left = `${Math.random() * 90}vw`;
  div.style.animationDuration = `${70}s`;
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
    sectionContainer.style.backgroundColor = "rgb(35, 35, 35)";
    sectionContainer.style.color = "white";
    body.style.backgroundColor = "rgb(35, 35, 35)";
    sweetContainer.style.color = "white";
    sweetMain.forEach((item) => {
      item.style.color = "white";
    });
    guestContainerOut.style.color = "white";
    guestContainerOutP.style.color = "white";
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
    headerContainer.style.backgroundColor = "#1A2255";
    sectionContainer.style.backgroundColor = "#443B7E";
    sectionContainer.style.color = "#33BCD0";
    body.style.backgroundColor = "rgb(53, 53, 75)";
    sweetContainer.style.color = "black";
    sweetMain.forEach((item) => {
      item.style.color = "black";
    });
    guestContainerOut.style.color = "black";
    guestContainerOutP.style.color = "black";
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

// =========================================== Basket JS ==============================
if (!localStorage.getItem("basket")) {
  localStorage.setItem("basket", JSON.stringify([]));
}
let mehsul = [
  {
    id: 1,
    name_en: "Chocolate cake",
    name_az: "Şokoladlı tort",
    prize: 15,
    foto: "../image/Foto3.jpg",
  },
  {
    id: 2,
    name_en: "Fruit cake",
    name_az: "Meyvəli tortu",
    prize: 18,
    foto: "../image/Foto2.jpg",
  },
  {
    id: 3,
    name_en: "Strawberry cake",
    name_az: "Çiyələkli tortu",
    prize: 20,
    foto: "../image/Foto1.jpg",
  },

  {
    id: 4,
    name_en: "Winter cake",
    name_az: "Qış tortu",
    prize: 16,
    foto: "../image/Winter.jpg",
  },

  {
    id: 5,
    name_en: "Birthday cake (1)",
    name_az: "Ad günü tortu (1)",
    prize: 15,
    foto: "../image/Birthday.jpg",
  },
  {
    id: 6,
    name_en: "Birthday cake (2)",
    name_az: "Ad günü tortu (2)",
    prize: 15,
    foto: "../image/Birthday2.jpg",
  },
  {
    id: 7,
    name_en: "Birthday cake (3)",
    name_az: "Ad günü tortu (3)",
    prize: 15,
    foto: "../image/Birthday3.jpg",
  },

  {
    id: 8,
    name_en: "Fruit cake(1)",
    name_az: "Meyvə tortu(1)",
    prize: 20,
    foto: "../image/Fruit.jpg",
  },

  {
    id: 9,
    name_en: "Fruit cake(2)",
    name_az: "Meyvə tortu(2)",
    prize: 20,
    foto: "../image/çilek.jpg",
  },

  {
    id: 10,
    name_en: "Fruit cake(3)",
    name_az: "Meyvə tortu(3)",
    prize: 20,
    foto: "../image/Fruit3.jpg",
  },

  {
    id: 11,
    name_en: "Chocolate cake(1)",
    name_az: "Şokoladlı tort(1)",
    prize: 16,
    foto: "../image/Chocolate.jpg",
  },

  {
    id: 12,
    name_en: "Chocolate cake(2)",
    name_az: "Şokoladlı tort(2)",
    prize: 16,
    foto: "../image/Chocolate2.jpg",
  },

  {
    id: 13,
    name_en: "Chocolate cake(3)",
    name_az: "Şokoladlı tort(3)",
    prize: 16,
    foto: "../image/Chocolate3.jpg",
  },

  {
    id: 14,
    name_en: "Cristmas  cake(1)",
    name_az: "Milad tortu (1)",
    prize: 18,
    foto: "../image/Chiristmas.jpg",
  },

  {
    id: 15,
    name_en: "Cristmas  cake(2)",
    name_az: "Milad tortu (2)",
    prize: 18,
    foto: "../image/Chiristmas2.jpg",
  },

  {
    id: 16,
    name_en: "Cristmas  cake(3)",
    name_az: "Milad tortu (3)",
    prize: 18,
    foto: "../image/Chiristmas3.jpg",
  },
];

let basket;
sweet_mainButton.forEach((button) => {
  button.addEventListener("click", () => {
    sebetfunc(button)
    initSweetToasts()
  })
});

function sebetfunc(params) {
  const id = parseInt(params.getAttribute("data-id"));
  const product = mehsul.find((item) => item.id == id);
  basket = JSON.parse(localStorage.getItem("basket"));
  if (!basket.find((b) => b.id == product.id)) {
    basket.push(product);
  }
  localStorage.setItem("basket", JSON.stringify(basket));
  basketFunc();
}

function basketFunc() {
  basket = JSON.parse(localStorage.getItem("basket"));
  sup.innerHTML = basket.length;
}
basketFunc();

// =========================================== Basket JS ==============================

// =========================================== Favorite JS ============================
if (!localStorage.getItem("favorite")) {
  localStorage.setItem("favorite", JSON.stringify([]));
}

if (!localStorage.getItem("iconColors")) {
  localStorage.setItem("iconColors", JSON.stringify({}));
}

let iconColors = JSON.parse(localStorage.getItem("iconColors"));

sweet_mainIcon.forEach((icon) => {
  const id = parseInt(icon.getAttribute("data-id"));
  if (iconColors[id]) {
    icon.style.color = iconColors[id];
  }

  icon.addEventListener("click", (e) => {
    if (icon.style.color === "red") {
      icon.style.color = "black";
    } else {
      icon.style.color = "red";
    }

    const product = mehsul.find((item) => item.id == id);
    let favorite = JSON.parse(localStorage.getItem("favorite"));

    if (
      icon.style.color === "red" &&
      !favorite.find((b) => b.id == product.id)
    ) {
      favorite.push(product);
    } else if (icon.style.color === "black") {
      favorite = favorite.filter((item) => item.id !== product.id);
    }
    iconColors[id] = icon.style.color;
    localStorage.setItem("iconColors", JSON.stringify(iconColors));

    localStorage.setItem("favorite", JSON.stringify(favorite));
    favoriteNumber();
  });
});

window.addEventListener("DOMContentLoaded", () => {
  sweet_mainIcon.forEach((icon) => {
    const id = parseInt(icon.getAttribute("data-id"));

    if (iconColors[id]) {
      icon.style.color = iconColors[id];
    }
    favoriteNumber();
  });
  favoriteNumber();
});
// =========================================== Favorite JS ============================

// =========================================== Change Language ========================
i18next.use(i18nextBrowserLanguageDetector).init(
  {
    resources: {
      az: {
        translation: {
          products: {
            chocolatecake: "Şokoladlı tort",
            fruitcake: "Meyvə tortu",
            strawberrycake: "Çiyələk tortu",
            wintercake: "Qış tortu",
            birthdaycake1: "Ad günü tortu(1)",
            birthdaycake2: "Ad günü tortu(2)",
            birthdaycake3: "Ad günü tortu(3)",
            fruitCake1: "Meyvə Tortu(1)",
            fruitCake2: "Meyvə Tortu(2)",
            fruitCake3: "Meyvə Tortu(3)",
            chocolatecake1: "Şokoladlı tort(1)",
            chocolatecake2: "Şokoladlı tort(1)",
            chocolatecake3: "Şokoladlı tort(3)",
            christmasCake1: "Milad tortu(1)",
            christmasCake2: "Milad tortu(2)",
            christmasCake3: "Milad tortu(3)",
          },
          headerHome: "Ana səhifə",
          headerAbout: "Haqqında",
          headerVacancies: "Vakansiya",
          headerContact: "Əlaqə",
          headerChange: "Dili Dəyişdirin",
          sections: "Bölmələr",
          Birthday: "Ad günü tortu",
          CompareSections: "Muqayisə et",
          GalerySections: "Şəkillər",
          VideoSections: "Vidyolar",
          Morethan: "Məhsullar",
          Fruit: "Meyvəli tort",
          Chocolate: "Şokoladlı tort",
          Chrismas: "Milad tortu",
          Sweet: "Şirin yeyək, şirin danişaq",
          Compare: "Muqayisə et",
          See: "Bax",
          Detailed: "Ətraflı",
          Pasta1: "Şokoladlı Tort",
          buttons: "Səbətə əlavə",
          Pasta2: "Meyvəli Tortu",
          Pasta3: "Çiyələkli Tortu",
          Pasta4: "Qış Tortu",
          Pasta5: "Ad günü tortu (1)",
          Pasta6: "Ad günü tortu (2)",
          Pasta7: "Ad günü tortu (3)",
          Pasta8: "Meyvəli Tortu (1)",
          Pasta9: "Meyvəli Tortu (2)",
          Pasta10: "Meyvəli Tortu (3)",
          Pasta11: "Şokoladli tortu (1)",
          Pasta12: "Şokoladli tortu (2)",
          Pasta13: "Şokoladli tortu (3)",
          Pasta14: "Milad tortu (1)",
          Pasta15: "Milad tortu (2)",
          Pasta16: "Milad tortu (3)",
          Our: "Qonağımız olun",
          OurText:
            "'Treats' Shop füsunkar vitrinimizdə şirinliyinizə ev sahibliyi etməkdən məmnundur. Bir yemək yeyin, oturun və təklif etdiyimiz hər şeydən həzz alın. Ləzzətli bişmiş məmulatlarimızdan tutmuş gürmələrdən ilhamlanmış hədiyyələrimizə qədər, biz bişirilmiş hər şeyə olan aclıınızı təmin etməkdən qürur duyuruq.",
          View: "Hamısı",
          footerContact: "Əlaqə",
          footerAbout: "Haqqında",
          footerVacancies: "Vakansiya",
          footerHome: "Ana səhifə",
          Nizami: "Nizami: +994 55 551 60 01",
          Merdakan: "Mərdəkan: +994 55 551 60 02",
          Yasamal: "Yasamal: +994 55 551 60 03",
          Bakixanov: "Bakixanov: +994 55 551 60 04",
          BirthdayHeader: "Ad günü tortu",
          FruitHeader: "Meyvə Tortu",
          ChocolateHeader: "Şokolad Tortu",
          CristmasHeader: "Milad Tortu",
          MoreThan: "Tortlardan daha çox",
          SuccessText: "Səbətə Əlave Olundu",
          Success: "Ugurlu!",
          SuccessTextTwo: "Kart silindi",
          Faq: "Suallar",
          Login: "Daxil ol",
          li1: "Vanil, şokolad, və ya başqa bir dad seçimi",
          li2: "Kərə yağı kremi",
          li3: "Şokolad qanası",
          li4: "Krem pendir",
          li5: "Mouse kremi",
          li6: "Meyvə pureləri və ya mürəbbələri",
          li9: "Meyvə dolğuları",
          li10: "Karamel",
          li11: "Çərəzlər",
          li12: "Kəsmik",
          li13: "Narıncı Fondan",
          li14: "Şokolad qanası",
          li15: "Krem Peynir Dolğusu",
          li17: "Şokolad Çipləri",
          li18: "Caramel Sauce",
          li21: "Gıda Boyası Markerləri",
          li22: "Şəkər Pastası",
          li23: "Çikolat Çipləri və ya Topları",
          li24: "Yeniləbilən Şəkillər",
          li25: "Biskvit Əsaslı Tort",
          li26: "Mango və Ananas Dolğusu",
          li27: "Coconut Frosting",
          li28: "Karamelizləşdirilmiş Fındıq",
          li29: "Krem Brulee Toping",
          li30: "Yeməli Çiçəklər",
          li31: "Biskvit Əsaslı Tort",
          li32: "Dolğu",
          li33: "Molekulyar Gastronomiya Jel",
          li34: "Edible Petri Dishes",
          li35: "Kərə yağı",
          li36: "Meyvə pureləri və ya mürəbbələri",
          faq1: "Hansı tort ləzzətləri və içlikləri təklif edirsiniz?",
          faq2: "Mən tortumu yüksəltmək istəyirəm, tort və keks stendlərini icarəyə götürürsən?",
          faq3: "Tortlarınızı çatdırırsınız?",
          faq4: "Tortu nə vaxt götürə bilərəm?",
          faq5: "Tort sifarişi vermək üçün görüşə ehtiyacım varmı?",
          ans1: "Hər növ tortlar mövcuddur",
          ans2: "Bəli! Həftə sonu üçün tort və keks stendlərimizi 40 dollara icarəyə veririk.",
          ans3: "Bəli! Biz Tulsa və ətraf icmalar daxilində çatdırılma təklif edirik, zəhmət olmasa çatdırılma təklifi almaq üçün bizə zəng edin.",
          ans4: "Həftənin hər günü",
          ans5: "Xeyr, tort sifarişinizi 918-994-4490 nömrəsinə zəng etməklə və ya müntəzəm olaraq mağazaya yaxınlaşaraq verə bilərsiniz iş saatları.",
          Size: "Ölçü",
          Number: "Sayı",
          AddCard: "Karti əlavə edin",
          Share: "Paylaşın",
        },
      },
      en: {
        translation: {
          products: {
            chocolatecake: "Chocolate cake",
            fruitcake: "Fruit Cake",
            strawberrycake: "Strawberry Cake",
            wintercake: "Winter Cake",
            birthdaycake1: "Birthday Cake(1)",
            birthdaycake2: "Birthday Cake(2)",
            birthdaycake3: "Birthday Cake(3)",
            fruitCake1: "Fruit Cake(1)",
            fruitCake2: "Fruit Cake(2)",
            fruitCake3: "Fruit Cake(3)",
            chocolatecake1: "Chocolate Cake(1)",
            chocolatecake2: "Chocolate Cake(2)",
            chocolatecake3: "Chocolate Cake(3)",
            christmasCake1: "Christmas Cake(1)",
            christmasCake2: "Christmas Cake(2)",
            christmasCake3: "Christmas Cake(3)",
          },
          headerHome: "Home",
          headerAbout: "About",
          headerVacancies: "Vacancies",
          headerContact: "Contact",
          headerChange: "Change Language",
          sections: "Sections",
          Birthday: "Birthday cake",
          CompareSections: "Compare",
          GalerySections: "Galerya",
          VideoSections: "Videos",
          Morethan: "Products",
          Fruit: "Fruit cake",
          Chocolate: "Chocolate cake",
          Chrismas: "Chrismas cake",
          Sweet: "Let's eat sweet, let's talk sweet",
          buttons: "Add basket",
          Compare: "Compare",
          See: "See",
          Detailed: "Detailed",
          Pasta1: "Chocolate cake",
          Pasta2: "Fruit cake",
          Pasta3: "Strawberry cake",
          Pasta4: "Winter cake",
          Pasta5: "Birthday cake (1)",
          Pasta6: "Birthday cake (2)",
          Pasta7: "Birthday cake (3)",
          Pasta8: "Fruit Cake (1)",
          Pasta9: "Fruit Cake (2)",
          Pasta10: "Fruit Cake (3)",
          Pasta11: "Chocolate cake (1)",
          Pasta12: "Chocolate cake (2)",
          Pasta13: "Chocolate cake (3)",
          Pasta14: "Cristmas Cake (1)",
          Pasta15: "Cristmas Cake (2)",
          Pasta16: "Cristmas Cake (3)",
          Our: "Be Our Guest",
          OurText:
            "The 'Treats' Shop is glad to play host to your sweet tooth in our charming storefront. Grab a bite, take a seat, and enjoy all we have to offer. From our delectable baked goods to our wide array of gourmet-inspired gifts, we pride ourselves in satisfying your hunger for all things baked.",
          View: "View All",
          footerContact: "Contact",
          footerAbout: "About",
          footerVacancies: "Vacancies",
          footerHome: "Home",
          Nizami: "Nizami: +994 55 551 60 01",
          Merdakan: "Mərdəkan: +994 55 551 60 02",
          Yasamal: "Yasamal: +994 55 551 60 03",
          Bakixanov: "Bakixanov: +994 55 551 60 04",
          BirthdayHeader: "Birthday Cake",
          FruitHeader: "Fruit Cake",
          ChocolateHeader: "Chocolate Cake",
          CristmasHeader: "Cristmas Cake",
          MoreThan: "More than just cakes",
          SuccessText: "Added to cart",
          Success: "Success!",
          SuccessTextTwo: "Removed from card",
          Faq: "Faqs",
          Login: "Login",
          li1: "Vanilla, chocolate, or other flavor choice",
          li2: "Butter cream",
          li3: "Chocolate blood",
          li4: "Cream cheese",
          li5: "Mouse cream",
          li6: "Fruit purees or jams",
          li9: "Fruit fillings",
          li10: "Caramel",
          li11: "Cookies",
          li12: "Cottage cheese",
          li13: "Orange Background",
          li14: "Chocolate blood",
          li15: "Cream Cheese Filling",
          li17: "Chocolate Chips",
          li18: "Caramel Sauce",
          li21: "Food Coloring Markers",
          li22: "Sugar Pie",
          li23: "Chocolate Chips or Balls",
          li24: "Updateable Images",
          li25: "Biscuit-Based Cake",
          li26: "Mango and Pineapple Filling",
          li27: "Coconut Frosting",
          li28: "Caramelized Hazelnuts",
          li29: "Creme Brulee Topping",
          li30: "Edible Flowers",
          li31: "Biscuit-Based Cake",
          li32: "Filling",
          li33: "Molecular Gastronomy Gel",
          li34: "Edible Petri Dishes",
          li35: "Butter",
          li36: "Fruit purees or jams",
          faq1: "What cake flavors and fillings do you offer?",
          faq2: "I want to elevate my cake, do you rent your cake and cupcake stands?",
          faq3: "Do you deliver your cakes?",
          faq4: "When can I pick up my cake?",
          faq5: "Do I need an appointment to place a cake order?",
          ans1: "All kinds of cakes are available",
          ans2: "Yes! We rent our cake and cupcake stands for $40 for the weekend.",
          ans3: "Yes! We offer delivery within Tulsa and surrounding communities, please call us to receive a delivery quote.",
          ans4: "Every day of the week",
          ans5: "No, you can place your cake order by calling us at 918-994-4490 or by coming into the store during regular business hours.",
          Size: "Size",
          Number: "Number",
          AddCard: "Add to card",
          Share: "Share",
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
  document.querySelector('[data-i18n="Login"]').textContent =
    i18next.t("Login");
  document.querySelector('[data-i18n="headerAbout"]').textContent =
    i18next.t("headerAbout");
  document.querySelector('[data-i18n="headerVacancies"]').textContent =
    i18next.t("headerVacancies");
  document.querySelector('[data-i18n="headerContact"]').textContent =
    i18next.t("headerContact");
  document.querySelector('[data-i18n="headerChange"]').textContent =
    i18next.t("headerChange");
  document.querySelector('[data-i18n="sections"]').textContent =
    i18next.t("sections");
  document.querySelector('[data-i18n="Birthday"]').textContent =
    i18next.t("Birthday");
  document.querySelector('[data-i18n="CompareSections"]').textContent =
    i18next.t("CompareSections");
  document.querySelectorAll('[data-i18n="GalerySections"]').forEach(item => {
    item.textContent = i18next.t("GalerySections");
  })
  document.querySelectorAll('[data-i18n="VideoSections"]').forEach(item => {
    item.textContent = i18next.t("VideoSections");
  })
  document.querySelector('[data-i18n="Morethan"]').textContent =
    i18next.t("Morethan");
  document.querySelector('[data-i18n="Favorite"]').innerHTML = i18next.t(
    'Favorite <sup style = "color:white; font-weight: 900; font-size:1.5rem"></sup>'
  );
  document.querySelector('[data-i18n="Fruit"]').textContent =
    i18next.t("Fruit");
  document.querySelector('[data-i18n="Chocolate"]').textContent =
    i18next.t("Chocolate");
  document.querySelector('[data-i18n="Chrismas"]').textContent =
    i18next.t("Chrismas");
  document.querySelector('[data-i18n="Sweet"]').textContent =
    i18next.t("Sweet");
  document.querySelectorAll('[data-i18n="Compare"]').forEach(item => {
    item.textContent = i18next.t("Compare");
  })
  document.querySelectorAll('[data-i18n="See"]').forEach(item => {
    item.textContent = i18next.t("See");
  })
  document.querySelectorAll('[data-i18n="Detailed"]').forEach(item => {
    item.textContent = i18next.t("Detailed");
  })
  document.querySelector('[data-i18n="Pasta1"]').textContent =
    i18next.t("Pasta1");
  document.querySelector('[data-i18n="Pasta2"]').textContent =
    i18next.t("Pasta2");
  document.querySelector('[data-i18n="Pasta3"]').textContent =
    i18next.t("Pasta3");
  document.querySelector('[data-i18n="Pasta4"]').textContent =
    i18next.t("Pasta4");
  document.querySelector('[data-i18n="Pasta5"]').textContent =
    i18next.t("Pasta5");
  document.querySelector('[data-i18n="Pasta6"]').textContent =
    i18next.t("Pasta6");
  document.querySelector('[data-i18n="Pasta7"]').textContent =
    i18next.t("Pasta7");
  document.querySelector('[data-i18n="Pasta8"]').textContent =
    i18next.t("Pasta8");
  document.querySelector('[data-i18n="Pasta9"]').textContent =
    i18next.t("Pasta9");
  document.querySelector('[data-i18n="Pasta10"]').textContent =
    i18next.t("Pasta10");
  document.querySelector('[data-i18n="Pasta11"]').textContent =
    i18next.t("Pasta11");
  document.querySelector('[data-i18n="Pasta12"]').textContent =
    i18next.t("Pasta12");
  document.querySelector('[data-i18n="Pasta13"]').textContent =
    i18next.t("Pasta13");
  document.querySelector('[data-i18n="Pasta14"]').textContent =
    i18next.t("Pasta14");
  document.querySelector('[data-i18n="Pasta15"]').textContent =
    i18next.t("Pasta15");
  document.querySelector('[data-i18n="Pasta16"]').textContent =
    i18next.t("Pasta16");
  document.querySelectorAll('[data-i18n="buttons"]').forEach((item) => {
    item.textContent = i18next.t("buttons");
  });
  document.querySelector('[data-i18n="Our"]').textContent = i18next.t("Our");
  document.querySelector('[data-i18n="OurText"]').textContent =
    i18next.t("OurText");
  document.querySelector('[data-i18n="View"]').textContent = i18next.t("View");
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
  document.querySelector('[data-i18n="BirthdayHeader"]').textContent =
    i18next.t("BirthdayHeader");
  document.querySelector('[data-i18n="FruitHeader"]').textContent =
    i18next.t("FruitHeader");
  document.querySelector('[data-i18n="ChocolateHeader"]').textContent =
    i18next.t("ChocolateHeader");
  document.querySelector('[data-i18n="CristmasHeader"]').textContent =
    i18next.t("CristmasHeader");
  document.querySelector('[data-i18n="MoreThan"]').textContent =
    i18next.t("MoreThan");
  document.querySelector('[data-i18n="li1"]').textContent =
    i18next.t("li1");
  document.querySelector('[data-i18n="li2"]').textContent =
    i18next.t("li2");
  document.querySelector('[data-i18n="li3"]').textContent =
    i18next.t("li3");
  document.querySelector('[data-i18n="li4"]').textContent =
    i18next.t("li4");
  document.querySelector('[data-i18n="li5"]').textContent =
    i18next.t("li5");
  document.querySelector('[data-i18n="li6"]').textContent =
    i18next.t("li6");
  document.querySelector('[data-i18n="li9"]').textContent =
    i18next.t("li9");
  document.querySelector('[data-i18n="li10"]').textContent =
    i18next.t("li10");
  document.querySelector('[data-i18n="li11"]').textContent =
    i18next.t("li11");
  document.querySelector('[data-i18n="li12"]').textContent =
    i18next.t("li12");
  document.querySelector('[data-i18n="li13"]').textContent =
    i18next.t("li13");
  document.querySelector('[data-i18n="li14"]').textContent =
    i18next.t("li14");
  document.querySelector('[data-i18n="li15"]').textContent =
    i18next.t("li15");
  document.querySelector('[data-i18n="li17"]').textContent =
    i18next.t("li17");
  document.querySelector('[data-i18n="li18"]').textContent =
    i18next.t("li18");
  document.querySelector('[data-i18n="li21"]').textContent =
    i18next.t("li21");
  document.querySelector('[data-i18n="li22"]').textContent =
    i18next.t("li22");
  document.querySelector('[data-i18n="li23"]').textContent =
    i18next.t("li23");
  document.querySelector('[data-i18n="li24"]').textContent =
    i18next.t("li24");
  document.querySelector('[data-i18n="li25"]').textContent =
    i18next.t("li25");
  document.querySelector('[data-i18n="li26"]').textContent =
    i18next.t("li26");
  document.querySelector('[data-i18n="li27"]').textContent =
    i18next.t("li27");
  document.querySelector('[data-i18n="li28"]').textContent =
    i18next.t("li28");
  document.querySelector('[data-i18n="li29"]').textContent =
    i18next.t("li29");
  document.querySelector('[data-i18n="li30"]').textContent =
    i18next.t("li30");
  document.querySelector('[data-i18n="li31"]').textContent =
    i18next.t("li31");
  document.querySelector('[data-i18n="li32"]').textContent =
    i18next.t("li32");
  document.querySelector('[data-i18n="li33"]').textContent =
    i18next.t("li33");
  document.querySelector('[data-i18n="li34"]').textContent =
    i18next.t("li34");
  document.querySelector('[data-i18n="li35"]').textContent =
    i18next.t("li35");
  document.querySelector('[data-i18n="li36"]').textContent =
    i18next.t("li36");
  document.querySelector('[data-i18n="faq1"]').textContent =
    i18next.t("faq1");
  document.querySelector('[data-i18n="faq1"]').textContent =
    i18next.t("faq2");
  document.querySelector('[data-i18n="faq2"]').textContent =
    i18next.t("faq3");
  document.querySelector('[data-i18n="faq3"]').textContent =
    i18next.t("faq4");
  document.querySelector('[data-i18n="faq5"]').textContent =
    i18next.t("faq5");
  document.querySelector('[data-i18n="ans1"]').textContent =
    i18next.t("ans1");
  document.querySelector('[data-i18n="ans2"]').textContent =
    i18next.t("ans2");
  document.querySelector('[data-i18n="ans3"]').textContent =
    i18next.t("ans3");
  document.querySelector('[data-i18n="ans4"]').textContent =
    i18next.t("ans4");
  document.querySelector('[data-i18n="ans5"]').textContent =
    i18next.t("ans5");
  document.querySelector('[data-i18n="Size"]').textContent =
    i18next.t("Size");
  document.querySelector('[data-i18n="Number"]').textContent =
    i18next.t("Number");
  document.querySelector('[data-i18n="AddCard"]').textContent =
    i18next.t("AddCard");
  document.querySelector('[data-i18n="Share"]').textContent =
    i18next.t("Share");
  document.querySelectorAll('[data-i18n="Faq"]').forEach(item => {
    item.textContent = i18next.t("Faq");
  })
  let SuccessTextTwo = document.querySelector('[data-i18n="SuccessTextTwo"]');
  if (SuccessTextTwo) {
    SuccessTextTwo.textContent = i18next.t("SuccessTextTwo");
  }
  let Success = document.querySelector('[data-i18n="Success"]');
  if (Success) {
    Success.textContent = i18next.t("Success");
  }
  let SuccessText = document.querySelector('[data-i18n="SuccessText"]');
  if (SuccessText) {
    SuccessText.textContent = i18next.t("SuccessText");
  }
  let titleKey;
  if (modalTitle) {
    titleKey = modalTitle.getAttribute('data-i18n');
  }
  if (titleKey) {
    modalTitle.textContent = i18next.t(titleKey);
  }

}
// =========================================== Change Language ========================

// =========================================== Notification JS ========================
function initSweetToasts() {
  const sweetMainButton = document.querySelectorAll(".sweet_main div button");
  const sweetMainIcon = document.querySelectorAll(".sweet_main div i");
  const toastContainer = document.querySelector(".toast-container");
  let top = 10;

  createToast()
  sweetMainButton.forEach((item) => {
    item.addEventListener("click", () => createToast(false));
  });

  sweetMainIcon.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.style.color === "red") {
        createToast(true);
      } else {
        createToast(true, i18next.t("SuccessTextTwo"));
      }
    });
  });
}

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


// =========================================== favoriteNumber ========================
function favoriteNumber() {
  let favorite = JSON.parse(localStorage.getItem("favorite"));
  let favSup = document.querySelector("#favSup sup");
  favSup.innerHTML = favorite.length;
}
favoriteNumber();
// =========================================== favoriteNumber ========================

// =========================================== Searce Sections Func ========================
function searchSections() {
  const input = document.querySelector('.searcesections');
  const filter = input.value.toLowerCase();
  const sectionLinks = document.querySelectorAll('.section_container a');

  sectionLinks.forEach(link => {
    const text = link.innerText.toLowerCase();
    if (text.includes(filter)) {
      link.style.display = "";
    } else {
      link.style.display = "none";
    }
  });
}
// =========================================== Searce Sections Func ========================

// =========================================== Swiper Js ========================
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "slide",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let progress = 50
let startX = 0
let active = 0
let isDown = false

const speedWheel = 0.02
const speedDrag = -0.1

const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index - active) / $items.length)
}

const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress / 100 * ($items.length - 1))

  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i / $items.length) * 100 + 10
    animate()
  })
})


const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)
// =========================================== Swiper Js ========================

// =========================================== Compare js ================================
compareIcon.forEach(item => {
  item.addEventListener("click", () => {
    if (compareFlag == true) {
      item.classList.remove("ri-loop-left-line");
      item.classList.add("ri-check-double-line")
      compareFlag = false
    } else {
      item.classList.remove("ri-check-double-line")
      item.classList.add("ri-loop-left-line");
      compareFlag = true
    }
  })
})
// =========================================== Compare js================================


// =========================================== Faq js================================
const problems = document.querySelectorAll(".problems");
const answers = document.querySelectorAll(".answer");

problems.forEach((problem, index) => {
  const icon = problem.querySelector("i");
  problem.addEventListener("click", () => {
    const isOpen = answers[index].style.display === "block";
    answers[index].style.display = isOpen ? "none" : "block";
    if (isOpen) {
      icon.classList.remove("ri-arrow-up-s-line");
      icon.classList.add("ri-arrow-down-s-line");
    } else {
      icon.classList.remove("ri-arrow-down-s-line");
      icon.classList.add("ri-arrow-up-s-line");
    }
    problems.forEach((otherProblem, otherIndex) => {
      if (otherIndex !== index) {
        answers[otherIndex].style.display = "none";
        const otherIcon = otherProblem.querySelector("i");
        otherIcon.classList.remove("ri-arrow-up-s-line");
        otherIcon.classList.add("ri-arrow-down-s-line");
      }
    });
  });
});
// =========================================== Faq js================================


// ===========================================js Modal================================
if (!localStorage.getItem("jsbasket")) {
  localStorage.setItem("jsbasket", JSON.stringify([]));
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.jsmodal');
  const closeModal = document.querySelector('.jsmodal__close');
  const modalImage = document.getElementById('modal-image');
  const modalSmallImage = document.getElementById('modal-small-image');
  const modalnumber = document.getElementById('modalnumber');
  const pricespan = document.getElementById('price-span');
  let selectedSize = 1;

  if (!modal || !closeModal || !modalImage || !modalSmallImage || !modalTitle) {
    console.error('One or more modal elements are missing.');
    return;
  }

  function calculatePrice() {
    const prize = modalImage.getAttribute('data-prize');
    pricespan.textContent = (+prize * selectedSize * +modalnumber.value).toFixed(2) + ' AZN';
  }

  document.querySelectorAll('.size__container-button button').forEach(button => {
    button.addEventListener('click', () => {
      selectedSize = parseFloat(button.textContent);
      calculatePrice();
      document.querySelectorAll('.size__container-button button').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
      });
      button.style.backgroundColor = '#0044ff63';
      button.style.color = 'white';
    });
  });

  modalnumber.addEventListener('input', () => {
    calculatePrice();
  });

  let addbutton = document.querySelectorAll('.addbutton');
  document.querySelectorAll('.ri-zoom-in-line').forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const imageUrl = item.getAttribute('data-image');
      const titleKey = item.getAttribute('data-title-i18n');
      const prize = item.getAttribute('data-prize');
      const id = item.getAttribute('data-id');
      const translatedTitle = i18next.t(titleKey);
      modalTitle.textContent = translatedTitle;
      modalImage.src = imageUrl;
      modalImage.setAttribute('data-prize', prize);
      modalSmallImage.src = imageUrl;
      selectedSize = 1;
      modalnumber.value = 1;
      calculatePrice();
      modal.classList.add('show');
      addbutton.forEach(item => {
        item.setAttribute("data-id", id);
      })
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  addbutton.forEach(item => {
    item.addEventListener("click", () => {
      sebetfunc(item)
      createToast(false)
    })
  })
});
// ===========================================js Modal================================