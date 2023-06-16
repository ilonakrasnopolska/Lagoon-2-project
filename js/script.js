const $burger = document.getElementById("burger");
const $header = document.querySelector(".header");
const btnMore = document.querySelector('.benefits__btn');
const benefitsItems = document.querySelectorAll('.list__item-benefits');
const btnHotel = document.querySelector('.hotels__btn-apartment');
const hotelItems = document.querySelectorAll('.list__item-hotels');


btnMore.addEventListener('click', () => {
  benefitsItems.forEach(el => { el.classList.add('list__item-benefits--visible') });
  btnMore.closest('.benefits__btn-wrapper').classList.add('.benefits__btn-wrapper--hidden');
});

btnHotel.addEventListener('click', () => {
  hotelItems.forEach(el => { el.classList.add('list__item-hotels--visible') });
  btnHotel.closest('.hotels__btn-pack').classList.add('.hotels__btn-pack--hidden');
});

document.addEventListener("DOMContentLoaded", function () {
  $burger.addEventListener("click", function () {
    $header.classList.toggle("open")
  })
})