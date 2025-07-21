// =========================================== Variables ==============================
let snow = document.querySelector('#snow');
let darkMood = document.querySelector('.darkmood');
let headerContainer = document.querySelector('.header_container');
let change = document.querySelector(".change")
let zero_about = document.querySelectorAll(".zero_about div")
let zeroAboutDivP = document.querySelectorAll(".zero_about div p");
let body = document.querySelector('body');
let footer = document.querySelector('footer');
let flag = true;
let snowNumber = 150;
// =========================================== Variables ===============================


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
  headerContainer.style.backgroundColor = "black";
  change.style.backgroundColor = "black";
  change.style.color = "white";
  zero_about.forEach(item => {
   item.style.background = "rgb(35, 35, 35)";
  })
  zeroAboutDivP.forEach(item => {
   item.style.color = "white";
  });
  footer.style.backgroundColor = "rgb(38, 38, 38)";
  flag = false;
 } else if (flag == false) {
  darkMood.style.backgroundColor = "#313B90";
  darkMood.style.color = "white";
  darkMood.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
  change.style.backgroundColor = "#313B90"
  change.style.color = "white"
  headerContainer.style.backgroundColor = "#1A2255";
  footer.style.backgroundColor = "#1A2255";
  zero_about.forEach(item => {
   item.style.background = "radial-gradient(circle, #4e44b7 0, #0a2f5b 100%)";
  })
  zeroAboutDivP.forEach(item => {
   item.style.color = "white";
  });
  flag = true;
 };
});
// rgb(35, 35, 35)
// =========================================== DarkMood JS ============================


// =========================================== Scroll JS ==============================
window.onscroll = function () {
 let goToTopButton = document.querySelector('#goToTopButton');

 if (window.scrollY > 1000) {
  goToTopButton.style.display = 'flex';
 } else {
  goToTopButton.style.display = 'none';
 };
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
     headerAbout: "Haqında",
     headerVacancies: "Vakansiya",
     headerContact: "Əlaqə",
     headerChange: "Dili Dəyişdirin",
     text1: "Tatlı 'Treats' Shop hər hansı bir hadisə üçün nəfis əl işi, premium bayram tortları üzrə ixtisaslaşmışdır. Bizim yüksək ixtisaslı tort dizaynerləri və dekoratorlarından ibarət komandamız var ki, onlar həqiqətən fərdiləşdirilmiş və yaddaqalan tortlar yarada bilirlər ki, bu tortlar sizin xüsusi münasibətilə zövq alacaqdır. o 'Cake' Shop yeməli mallar, şəkər istehsalı materialları, alətlər və avadanlıqlar daxil olmaqla geniş çeşiddə tort bəzək aksesuarları satır. Dizaynerlər komandamızla tələblərinizi daha ətraflı müzakirə etmək üçündür.",
     text2: "Biz 2000-ci ildən tarixi Bakı şəhərində ticarət edirik, Mağazamız həm yerli, həm də milli mətbuatda müntəzəm olaraq işıqlandırılır. Tatli Tort Dükanı tarixi Qapalı Şəhərlər daxilində yerləşir və şəhərdən keçən bir çox bələdçili gəzinti turlarının mərkəzidir, həmçinin yerli sakinlərə və turistlərə bizim bacarıqlı tort sənətçilərimizi iş yerində izləmək imkanı verir. Tortlarımız Böyük Britaniyanın ən yaxşı istehsalçılarından təzə alınmış yüksək keyfiyyətli inqrediyentlərdən hazırlanır və onların bir çoxu ilə biznesin başlandığı gündən əməkdaşlıq edirik.",
     text3: "İstənilən növ tort dekorasiyasını bizim tort mağazamızda seçib sifariş edə bilərsiniz. Biz peşəkar, həvəsli və enerjili fərdlərdən ibarət komanda işləyirik. Beləliklə, onlar bəzəməyə hazırdırlar, təcrübəli dekoratorlarla yanaşı yeni bəzək bacarıqlarını öyrənirlər, müştəri sifarişləri üçün tortlara mesaj yazmağı öyrənirlər.",
     text4: "Mağazamız həm yerli, həm də milli mətbuatda müntəzəm olaraq işıqlandırılır. Tatli Tort Dükanı tarixi Qapalı Şəhərlər daxilində yerləşir və şəhərdən keçən bir çox bələdçili gəzinti turlarının mərkəzidir, həmçinin yerli sakinlərə və turistlərə bizim bacarıqlı tort sənətçilərimizi iş yerində izləmək imkanı verir. Tortlarımız Böyük Britaniyanın ən yaxşı istehsalçılarından təzə alınmış yüksək keyfiyyətli inqrediyentlərdən hazırlanır və onların bir çoxu ilə biznesin başlandığı gündən əməkdaşlıq edirik.",
     footerContact: "Əlaqə",
     footerAbout: "Haqqinda",
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
     text1: "The 'Treats' Shop specialises in exquisitely hand-crafted, premium celebration cakes for any occasion. We have a team of highly skilled cake designers and decorators who can create a truly personalised and  memorable cake which is bound to delight at your special occasion. he Cake Shop sells a wide range of cake decorating accessories including edible goods, ribbons, sugarcraft materials, tools and equipment. To discuss your requirements in more detail with our team of designers.",
     text2: "We have been trading since 2000 in the historic city of Baku, Our shop is regularly featured in both local and national media. The Tatli Cake Shop is located within the historic Covered Towns and is a focal point for many of the guided walking tours that pass through the city as well as providing locals and tourists with an opportunity to watch our skilled cake artists at work. Our cakes are made from the highest quality ingredients sourced fresh from the best UK producers, many of which we have been working in partnership with since the business began",
     text3: "You can choose and order any type of cake decoration in our cake shop . We are working professional , enthusiastic and energetic individuals team. So, they are ready to decorate, learning new decorating skills alongside experienced decorators, learning how to write messages on cakes for customer orders",
     text4: "Our shop is regularly featured in both local and national media. The Tatli Cake Shop is located within the historic Covered Towns and is a focal point for many of the guided walking tours that pass through the city as well as providing locals and tourists with an opportunity to watch our skilled cake artists at work. Our cakes are made from the highest quality ingredients sourced fresh from the best UK producers, many of which we have been working in partnership with since the business began",
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
 document.querySelector('[data-i18n="footerContact"]').textContent = i18next.t('footerContact');
 document.querySelector('[data-i18n="footerAbout"]').textContent = i18next.t('footerAbout');
 document.querySelector('[data-i18n="footerVacancies"]').textContent = i18next.t('footerVacancies');
 document.querySelector('[data-i18n="footerHome"]').textContent = i18next.t('footerHome');
 document.querySelector('[data-i18n="Nizami"]').textContent = i18next.t('Nizami');
 document.querySelector('[data-i18n="Merdakan"]').textContent = i18next.t('Merdakan');
 document.querySelector('[data-i18n="Yasamal"]').textContent = i18next.t('Yasamal');
 document.querySelector('[data-i18n="Bakixanov"]').textContent = i18next.t('Bakixanov');
 document.querySelector('[data-i18n="text1"]').textContent = i18next.t('text1');
 document.querySelector('[data-i18n="text2"]').textContent = i18next.t('text2');
 document.querySelector('[data-i18n="text3"]').textContent = i18next.t('text3');
 document.querySelector('[data-i18n="text4"]').textContent = i18next.t('text4');
};
// =========================================== Change Language ========================