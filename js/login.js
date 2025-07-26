// =========================================== Variables ==============================
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const snow = document.querySelector('#snow');
const darkMood = document.querySelector('.darkmood');
const headerContainer = document.querySelector('.header_container');
const change = document.querySelector(".change")
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const login = document.querySelector(".login");
let flag = true;
let snowNumber = 150;
// =========================================== Variables ===============================

// =========================================== Register JS ================================
signUpButton.addEventListener("click", () => {
 container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
 container.classList.remove("right-panel-active");
});


function handleCredentialResponse(response) {
 const data = jwt_decode(response.credential);
 console.log("Google user data:", data);
 alert(`Salam ${data.name}!\nEmail: ${data.email}`);
}
// =========================================== Register JS ================================


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
  login.style.backgroundColor = "black";
  login.style.color = "white";
  login.style.boxShadow = "10px 5px 5px #33BCD0";
  darkMood.style.backgroundColor = "black";
  darkMood.style.color = "white";
  darkMood.style.boxShadow = "10px 5px 5px #33BCD0";
  change.style.boxShadow = "10px 5px 5px #33BCD0";
  headerContainer.style.backgroundColor = "black";
  change.style.backgroundColor = "black";
  change.style.color = "white";
  footer.style.backgroundColor = "rgb(38, 38, 38)";
  flag = false;
 } else if (flag == false) {
  login.style.backgroundColor = "#313B90";
  login.style.color = "white";
  login.style.boxShadow =
   "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
  darkMood.style.backgroundColor = "#313B90";
  darkMood.style.color = "white";
  darkMood.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
  change.style.backgroundColor = "#313B90"
  change.style.color = "white"
  change.style.boxShadow = ""
  headerContainer.style.backgroundColor = "#1A2255";
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

// =========================================== Change Language ========================
i18next
 .use(i18nextBrowserLanguageDetector)
 .init({
  resources: {
   az: {
    translation: {
     headerHome: "Ana səhifə",
     Login: "Daxil ol",
     headerAbout: "Haqında",
     headerVacancies: "Vakansiya",
     headerContact: "Əlaqə",
     headerChange: "Dili Dəyişdirin",
     Signin: "Daxil olun",
     forget: "Parolunuzu unutmusunuz?",
     Welcome: "Xoş gəlmisiniz!",
     text1: "Bizimlə əlaqə saxlamaq üçün şəxsi məlumatlarınızla daxil olun",
     hello: "Salam, Dost!",
     text2: "Şəxsi məlumatlarınızı daxil edin və səyahətinizə bizimlə başlayın",
     signup: "qeydiyyatdan keçin",
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
     Login: "Login",
     headerAbout: "About",
     headerVacancies: "Vacancies",
     headerContact: "Contact",
     headerChange: "Change Language",
     Signin: "Sign in",
     forget: "Forgot your password?",
     Welcome: "Welcome Back!",
     text1: "To keep connected with us please login with your personal info",
     hello: "Hello, Friend",
     text2: "Enter your personal details and start your journey with us",
     signup: "sign up",
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

 }, function () {
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
 document.querySelectorAll('[data-i18n="Signin"]').forEach(item => {
  item.textContent = i18next.t('Signin')
 })
 document.querySelector('[data-i18n="forget"]').textContent = i18next.t('forget');
 document.querySelector('[data-i18n="Welcome"]').textContent = i18next.t('Welcome');
 document.querySelector('[data-i18n="text1"]').textContent = i18next.t('text1');
 document.querySelector('[data-i18n="hello"]').textContent = i18next.t('hello');
 document.querySelector('[data-i18n="text2"]').textContent = i18next.t('text2');
 document.querySelector('[data-i18n="signup"]').textContent = i18next.t('signup');
 document.querySelector('[data-i18n="footerContact"]').textContent = i18next.t('footerContact');
 document.querySelector('[data-i18n="footerAbout"]').textContent = i18next.t('footerAbout');
 document.querySelector('[data-i18n="footerVacancies"]').textContent = i18next.t('footerVacancies');
 document.querySelector('[data-i18n="footerHome"]').textContent = i18next.t('footerHome');
 document.querySelector('[data-i18n="Nizami"]').textContent = i18next.t('Nizami');
 document.querySelector('[data-i18n="Merdakan"]').textContent = i18next.t('Merdakan');
 document.querySelector('[data-i18n="Yasamal"]').textContent = i18next.t('Yasamal');
 document.querySelector('[data-i18n="Bakixanov"]').textContent = i18next.t('Bakixanov');
 document.querySelector('[data-i18n="Login"]').textContent = i18next.t('Login');
};
// =========================================== Change Language ========================


// =========================================== Change Body Color ========================
function getRandomDarkColor() {
 let r, g, b;
 do {
  r = Math.floor(Math.random() * 200);
  g = Math.floor(Math.random() * 200);
  b = Math.floor(Math.random() * 200);
  const isGray = Math.abs(r - g) < 20 && Math.abs(g - b) < 20 && Math.abs(b - r) < 20;
  const isTooBright = r + g + b > 600;

  if (!isGray && !isTooBright) break;
 } while (true);
 return `rgb(${r}, ${g}, ${b})`;
}

function setRandomGradient() {
 const color1 = getRandomDarkColor();
 const color2 = getRandomDarkColor();
 const angle = Math.floor(Math.random() * 360);
 body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}
body.style.background = 'linear-gradient(135deg, #2c2c54, #5959a4)';
setInterval(setRandomGradient, 2000);
// =========================================== Change Body Color ========================