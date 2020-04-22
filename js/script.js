let hiddenProdInf = document.querySelectorAll('.hidden-prod-inf');
let storeItem = document.querySelectorAll('.product-store-item');
let buttonPost = document.querySelector('.contact-red-button');
let postWindow = document.querySelector('.post-window');
buttonPost.onclick = function () {
  postWindow.classList.remove('visually-hidden');
};

let close = document.querySelector('.close');
close.onclick = function() {
  postWindow.classList.add('visually-hidden');
};

//  storeItem[0].onmouseover = function() {hiddenProdInf[0].classList.remove('visually-hidden');};
//  storeItem[0].onmouseout = function () {hiddenProdInf[0].classList.add('visually-hidden');};
//
// storeItem[0].onmouseover = function() {hiddenProdInf[0].classList.remove('visually-hidden');};
// storeItem[0].onmouseout = function () {hiddenProdInf[0].classList.add('visually-hidden');};
//
// storeItem[0].onmouseover = function() {hiddenProdInf[0].classList.remove('visually-hidden');};
// storeItem[0].onmouseout = function () {hiddenProdInf[0].classList.add('visually-hidden');};
//
// storeItem[0].onmouseover = function() {hiddenProdInf[0].classList.remove('visually-hidden');};
// storeItem[0].onmouseout = function () {hiddenProdInf[0].classList.add('visually-hidden');};
//
// storeItem[0].onmouseover = function() {hiddenProdInf[0].classList.remove('visually-hidden');};
// storeItem[0].onmouseout = function () {hiddenProdInf[0].classList.add('visually-hidden');};
//
// storeItem[0].onmouseover = function() {hiddenProdInf[0].classList.remove('visually-hidden');};
// storeItem[0].onmouseout = function () {hiddenProdInf[0].classList.add('visually-hidden');};
storeItem.onmouseout = function () {
  for (i = 0, i <= storeItem.length) {
    hiddenProdInf[0].classList.add('visually-hidden');
    i++;
  }
}




