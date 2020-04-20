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

storeItem[0].onmouseover = function() {hiddenProdInf[0].classList.remove('visually-hidden');};
storeItem[0].onmouseout = function () {hiddenProdInf[0].classList.add('visually-hidden');};

storeItem[1].onmouseover = function() {hiddenProdInf[1].classList.remove('visually-hidden');};
storeItem[1].onmouseout = function () {hiddenProdInf[1].classList.add('visually-hidden');};

storeItem[2].onmouseover = function() {hiddenProdInf[2].classList.remove('visually-hidden');};
storeItem[2].onmouseout = function () {hiddenProdInf[2].classList.add('visually-hidden');};

storeItem[3].onmouseover = function() {hiddenProdInf[3].classList.remove('visually-hidden');};
storeItem[3].onmouseout = function () {hiddenProdInf[3].classList.add('visually-hidden');};

storeItem[4].onmouseover = function() {hiddenProdInf[4].classList.remove('visually-hidden');};
storeItem[4].onmouseout = function () {hiddenProdInf[4].classList.add('visually-hidden');};

storeItem[5].onmouseover = function() {hiddenProdInf[5].classList.remove('visually-hidden');};
storeItem[5].onmouseout = function () {hiddenProdInf[5].classList.add('visually-hidden');};
