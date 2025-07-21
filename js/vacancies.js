// =========================================== Variables ==============================
let snow = document.querySelector('#snow');
let darkMood = document.querySelector('.darkmood');
let headerContainer = document.querySelector('.header_container');
let change = document.querySelector(".change")
let main = document.querySelector("main")
let body = document.querySelector('body');
let footer = document.querySelector('footer');
let decoratorOne = document.querySelector(".decoratorOne");
let flag = true;
let snowNumber = 150;
// =========================================== Variables ===============================


// =========================================== Search =================================
// function Searce() {
//  let filter = document.querySelector(".search input").value.toUpperCase();
//  let items = document.querySelectorAll(".decorator");

//  items.forEach(item => {
//   let value = item.querySelector("h3").textContent.toUpperCase();
//   if (value.indexOf(filter) > -1) {
//    item.style.display = "";
//   }
//   else {
//    item.style.display = "none";
//   }
//  });
// }
// =========================================== Search =================================


// =========================================== Snow JS ================================
function createSnow() {
 let div = document.createElement('div');
 div.classList.add('snow');
 div.innerHTML = '❆';
 div.style.left = `${Math.random() * 90}vw`;
 div.style.animationDuration = `${50}s`;
 div.style.fontSize = `${1.2}em`;
 div.style.color = "white";
 snow.appendChild(div);
 div.addEventListener('animationend', () => {
  div.remove();
  createSnow();
 });
};

for (let i = 0; i < snowNumber; i++) {
 setTimeout(createSnow, i * 200);
};
// =========================================== Snow JS ================================


// =========================================== DarkMood JS ============================
darkMood.addEventListener('click', () => {
 if (flag == true) {
  darkMood.style.backgroundColor = "black";
  darkMood.style.color = "white";
  darkMood.style.boxShadow = "10px 5px 5px #33BCD0";
  change.style.boxShadow = "10px 5px 5px #33BCD0";
  change.style.backgroundColor = "black";
  change.style.color = "white";
  headerContainer.style.backgroundColor = "black";
  main.style.background = "rgb(35, 35, 35)";
  footer.style.backgroundColor = "rgb(38, 38, 38)";
  flag = false;
 } else if (flag == false) {
  darkMood.style.backgroundColor = "#313B90";
  darkMood.style.color = "white";
  darkMood.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
  change.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
  change.style.backgroundColor = "#313B90"
  change.style.color = "white"
  headerContainer.style.backgroundColor = "#1A2255";
  main.style.background = "radial-gradient(circle, #4e44b7 0, #0a2f5b 100%)";
  footer.style.backgroundColor = "#1A2255";
  flag = true;
 };
});
// =========================================== DarkMood JS ============================


// =========================================== Scroll JS ==============================
window.onscroll = function () {
 let goToTopButton = document.querySelector('#goToTopButton');

 if (window.scrollY > 1000) {
  goToTopButton.style.display = 'flex';
 } else {
  goToTopButton.style.display = 'none';
 }
};

function goToTop() {
 let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

 if (currentScroll > 0) {
  window.scrollTo(0, currentScroll - 30);
  setTimeout(goToTop, 10);
 }
};
// =========================================== Scroll JS ==============================

function basketFunc() {
 let sup = document.querySelector("#sup")
 basket = JSON.parse(localStorage.getItem("basket"));
 sup.innerHTML = basket.length;
}
basketFunc();

// =========================================== Change Language ========================
i18next
 .use(i18nextBrowserLanguageDetector)
 .init({
  resources: {
   az: {
    translation: {
     headerHome: "Ana səhifə",
     headerAbout: "Haqqında",
     headerVacancies: "Vakansiya",
     headerContact: "Əlaqə",
     headerChange: "Dili Dəyişdirin",
     VacanciesMain: "Vakansiyalar",
     SearceButton: "Axtar",
     CakeDecorator: "Tort Dekoratoru",
     CakeDecoratorTitle: "İş növü: 'Full - time', Tort Dekoratoru müxtəlif hallar üçün xüsusi tortların dizayni, bəzədilməsi və hazırlanmasına cavabdeh olan yaradıcı və bacarıqlı peşəkardır. Bu rol bədii qabiliyyət, təfərrüata diqqət və çörək bişirmə üsullarını dərindən başa düşməyi tələb edir. Əmək haqqı: həftəlik 30$ , Ətraflı məlumat üçün əlaqə nömrəsi: +994 55 551 60 03",
     Production: "İstehsalat qrupunun üzvü",
     From: "Saatda 10,50 funt sterlinqdən başlayaraq - Part-time, Full-time, Siz əla müştəri xidməti göstərməyə həvəslisiniz və ləzzətli məhsullar istehsal etməyə həvəslisiniz? Şirkətimizə müraciət edə bilərsiniz. Telefon nömrəsi: +994 55 551 60 02",
     Kitchen: "Mətbəx köməkçisi",
     KitchenTitle: "Saatı 7AZN-dən - Part-time, Full-time, Mətbəxin bütün sahələrində istehsala dəstək. Mətbəxin gigiyenasina riayət edilməsi və açiliş/bağlama prosedurlarina dəstək Növbətçi aşbazin rəhbərliyi ilə tort və bufet məmulatlarinin hazirlanmasi.Telefon nömrəsi : +994 55 551 60 02",
     CakeDecorator2: "Tort Dekoratoru",
     CakeDecorator2Title: "Saatı 10AZN-dən - İş yarım ştatdır. Müsbət alış-veriş yaratmaq üçün sürətli, mehriban və dəqiq müştəri xidmətinə əsas diqqət yetirməklə, həvəsli müştəri məlumatlılığı mühitini qoruyun. təcrübə. Ünvan: Baki, Hövsan ,+994 55 551 60 01",
     footerContact: "Əlaqə",
     footerAbout: "Haqqında",
     footerVacancies: "Vakansiya",
     footerHome: "Ana səhifə",
     Nizami: "Nizami: +994 55 551 60 01",
     Merdakan: "Mərdəkan: +994 55 551 60 02",
     Yasamal: "Yasamal: +994 55 551 60 03",
     Bakixanov: "Bakixanov: +994 55 551 60 04",
    }
   },
   en: {
    translation: {
     headerHome: "Home",
     headerAbout: "About",
     headerVacancies: "Vacancies",
     headerContact: "Contact",
     headerChange: "Change Language",
     VacanciesMain: "Vacancies",
     SearceButton: "Searce",
     CakeDecorator: "Cake Decorator",
     CakeDecoratorTitle: "Job Type: Full-time, Cake Decorator is a creative and skilled professional responsible for designing, decorating and preparing special cakes for various occasions. This role requires artistic ability, attention to detail and a deep understanding of baking techniques. Salary: $30 per week, contact number for more information: +994 55 551 60 03",
     Production: "Production Team Member",
     From: "From £10.50 an hour - Part-time, Full-time, Are you enthusiastic about deliverin great customer service and passionate about producing delicious products?You can apply our compan Phone number: +994 55 551 60 02",
     Kitchen: "Kitchen Assistant",
     KitchenTitle: "From 7AZN an hour - Part-time, Full-time, Supporting production in all areas of the kitchen. Maintaining the kitchen hygiene and support with opening/closing down procedures Producing cakes and buffet items with the guidance of the duty chef.Phone number : +994 55 551 60 02",
     CakeDecorator2: "Cake Decorator",
     CakeDecorator2Title: "From 10AZN an hour - Job is part-time. Maintain an atmosphere of enthusiastic customer awareness with primary emphasis on fast, friendly, and accurate customer service to create a positive shopping  experience. Address: Baku,Hovsan ,+994 55 551 60 01",
     footerContact: "Contact",
     footerAbout: "About",
     footerVacancies: "Vacancies",
     footerHome: "Home",
     Nizami: "Nizami: +994 55 551 60 01",
     Merdakan: "Mərdəkan: +994 55 551 60 02",
     Yasamal: "Yasamal: +994 55 551 60 03",
     Bakixanov: "Bakixanov: +994 55 551 60 04",
    }
   }
  },
  fallbackLng: 'en',
  debug: true,

 }, function (err, t) {
  updateContent();
  document.querySelector('.change').addEventListener('click', function () {
   i18next.changeLanguage(i18next.language === 'az' ? 'en' : 'az', updateContent);
  });
 });

function updateContent() {
 document.querySelector('[data-i18n="headerHome"]').textContent = i18next.t('headerHome');
 document.querySelector('[data-i18n="headerAbout"]').textContent = i18next.t('headerAbout');
 document.querySelector('[data-i18n="headerVacancies"]').textContent = i18next.t('headerVacancies');
 document.querySelector('[data-i18n="headerContact"]').textContent = i18next.t('headerContact');
 document.querySelector('[data-i18n="headerChange"]').textContent = i18next.t('headerChange');
 document.querySelector('[data-i18n="VacanciesMain"]').textContent = i18next.t('VacanciesMain');
 document.querySelector('[data-i18n="SearceButton"]').textContent = i18next.t('SearceButton');
 document.querySelector('[data-i18n="CakeDecorator"]').textContent = i18next.t('CakeDecorator');
 document.querySelector('[data-i18n="CakeDecoratorTitle"]').textContent = i18next.t('CakeDecoratorTitle');
 document.querySelector('[data-i18n="Production"]').textContent = i18next.t('Production');
 document.querySelector('[data-i18n="From"]').textContent = i18next.t('From');
 document.querySelector('[data-i18n="Kitchen"]').textContent = i18next.t('Kitchen');
 document.querySelector('[data-i18n="KitchenTitle"]').textContent = i18next.t('KitchenTitle');
 document.querySelector('[data-i18n="CakeDecorator2"]').textContent = i18next.t('CakeDecorator2');
 document.querySelector('[data-i18n="CakeDecorator2Title"]').textContent = i18next.t('CakeDecorator2Title');
 document.querySelector('[data-i18n="footerContact"]').textContent = i18next.t('footerContact');
 document.querySelector('[data-i18n="footerAbout"]').textContent = i18next.t('footerAbout');
 document.querySelector('[data-i18n="footerVacancies"]').textContent = i18next.t('footerVacancies');
 document.querySelector('[data-i18n="footerHome"]').textContent = i18next.t('footerHome');
 document.querySelector('[data-i18n="Nizami"]').textContent = i18next.t('Nizami');
 document.querySelector('[data-i18n="Merdakan"]').textContent = i18next.t('Merdakan');
 document.querySelector('[data-i18n="Yasamal"]').textContent = i18next.t('Yasamal');
 document.querySelector('[data-i18n="Bakixanov"]').textContent = i18next.t('Bakixanov');
};
// =========================================== Change Language ========================