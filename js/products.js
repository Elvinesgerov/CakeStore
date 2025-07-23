const sup = document.querySelector("#sup");

let mehsul = [
 { id: 1, name_en: "Chocolate cake", name_az: "Şokoladlı tort", prize: 60, foto: "../image/Foto3.jpg" },
 { id: 2, name_en: "Fruit cake", name_az: "Meyvəli tortu", prize: 70, foto: "../image/Foto2.jpg" },
 { id: 3, name_en: "Strawberry cake", name_az: "Çiyələkli tortu", prize: 50, foto: "../image/Foto1.jpg" },
 { id: 4, name_en: "Winter cake", name_az: "Qış tortu", prize: 80, foto: "../image/Winter.jpg" },
 { id: 5, name_en: "Birthday cake (1)", name_az: "Ad günü tortu (1)", prize: 60, foto: "../image/Birthday.jpg" },
 { id: 6, name_en: "Birthday cake (2)", name_az: "Ad günü tortu (2)", prize: 70, foto: "../image/Birthday2.jpg" },
 { id: 7, name_en: "Birthday cake (3)", name_az: "Ad günü tortu (3)", prize: 50, foto: "../image/Birthday3.jpg" },
 { id: 8, name_en: "Fruit cake(1)", name_az: "Meyvə tortu(1)", prize: 49, foto: "../image/Fruit.jpg" },
 { id: 9, name_en: "Fruit cake(2)", name_az: "Meyvə tortu(2)", prize: 65, foto: "../image/çilek.jpg" },
 { id: 10, name_en: "Fruit cake(3)", name_az: "Meyvə tortu(3)", prize: 50, foto: "../image/Fruit3.jpg" },
 { id: 11, name_en: "Chocolate cake(1)", name_az: "Şokoladlı tort(1)", prize: 60, foto: "../image/Chocolate.jpg" },
 { id: 12, name_en: "Chocolate cake(2)", name_az: "Şokoladlı tort(2)", prize: 70, foto: "../image/Chocolate2.jpg" },
 { id: 13, name_en: "Chocolate cake(3)", name_az: "Şokoladlı tort(3)", prize: 70, foto: "../image/Chocolate3.jpg" },
 { id: 14, name_en: "Cristmas cake(1)", name_az: "Milad tortu (1)", prize: 59, foto: "../image/Chiristmas.jpg" },
 { id: 15, name_en: "Cristmas cake(2)", name_az: "Milad tortu (2)", prize: 65, foto: "../image/Chiristmas2.jpg" },
 { id: 16, name_en: "Cristmas cake(3)", name_az: "Milad tortu (3)", prize: 60, foto: "../image/Chiristmas3.jpg" },
];

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
  span.textContent = ` ${i18next.language == "az" ? `${mehsul[i].name_az}` : `${mehsul[i].name_en}`}`;
  let p = document.createElement("p")
  p.innerHTML = `${i18next.language == "az" ? "Qiymet" : "Prize"}: ${mehsul[i].prize}`
  let divButtons = document.createElement("div")
  divButtons.classList.add("buttons")
  let buttonBasket = document.createElement("button")
  buttonBasket.innerHTML = "Add Basket"
  let buttonfavori = document.createElement("button")
  buttonfavori.innerHTML = "Add Favori"

  // buttonBasket.addEventListener("click", () => { sebetfunc(buttonBasket) })


  divButtons.append(buttonBasket, buttonfavori)
  h3.appendChild(span);
  div.append(img, h3, p, divButtons);
  productscontainer.appendChild(div);
 }
}

document.addEventListener("DOMContentLoaded", productsfunc);

// let basket;

// function sebetfunc(params) {
//  const id = parseInt(params.getAttribute("data-id"));
//  const product = mehsul.find((item) => item.id == id);
//  basket = JSON.parse(localStorage.getItem("basket"));
//  if (!basket.find((b) => b.id == product.id)) {
//   basket.push(product);
//  }
//  localStorage.setItem("basket", JSON.stringify(basket));
//  basketFunc();
// }

// function basketFunc() {
//  basket = JSON.parse(localStorage.getItem("basket"));
//  sup.innerHTML = basket.length;
// }
// basketFunc();