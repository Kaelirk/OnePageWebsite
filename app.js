const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('activated');
    menuLinks.classList.toggle('active');
});


const modal = document.getElementById("myModal");
const btn = document.querySelectorAll(".myBtn");
const psubtn = document.querySelectorAll(".PSU_Btn");
const mobobtn = document.querySelectorAll(".MoBo_Btn");
const cpubtn = document.querySelectorAll(".CPU_Btn");
const rambtn = document.querySelectorAll(".RAM_Btn");
const ssdbtn = document.querySelectorAll(".SSD_Btn");
const gpubtn = document.querySelectorAll(".GPU_Btn");
const cartbtn = document.querySelectorAll(".shopping_Btn");
const span = document.getElementsByClassName("close")[0];
const psu = document.querySelectorAll(".PSU_supply");
const mobo = document.querySelectorAll(".MoBo_supply");
const cpu = document.querySelectorAll(".CPU_supply");
const ram = document.querySelectorAll(".RAM_supply");
const ssd = document.querySelectorAll(".SSD_supply");
const gpu = document.querySelectorAll(".GPU_supply");
const cart = document.querySelectorAll(".shopping_cart");
const qty = document.getElementById("quantity");
const counter = document.querySelectorAll(".counter");
const minusbtn = document.querySelectorAll(".minusBtn");
const plusbtn = document.querySelectorAll(".plusBtn");

btn.forEach(function (element){
    element.addEventListener('click', function() {
        modal.style.display = "block";
    });
});

psubtn.forEach(function (element){
  element.addEventListener('click', function() {
      psu[0].style.display = "block";
});
});

mobobtn.forEach(function (element){
  element.addEventListener('click', function() {
      mobo[0].style.display = "block";
});
});

cpubtn.forEach(function (element){
  element.addEventListener('click', function() {
      cpu[0].style.display = "block";
});
});

rambtn.forEach(function (element){
  element.addEventListener('click', function() {
      ram[0].style.display = "block";
});
});

ssdbtn.forEach(function (element){
  element.addEventListener('click', function() {
      ssd[0].style.display = "block";
});
});

gpubtn.forEach(function (element){
  element.addEventListener('click', function() {
      gpu[0].style.display = "block";
});
});

cartbtn.forEach(function (element){
  element.addEventListener('click', function() {
      cart[0].style.display = "block";
});
});

span.onclick = function() {
  modal.style.display = "none";
  psu[0].style.display = "none";
  mobo[0].style.display = "none";
  cpu[0].style.display = "none";
  ram[0].style.display = "none";
  ssd[0].style.display = "none";
  gpu[0].style.display = "none";
  cart[0].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it and set all display styles back to none
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    psu[0].style.display = "none";
    mobo[0].style.display = "none";
    cpu[0].style.display = "none";
    ram[0].style.display = "none";
    ssd[0].style.display = "none";
    gpu[0].style.display = "none";
    cart[0].style.display = "none";
  }
}
minusbtn.forEach(function (element){
  let relativecounter = element.parentElement.getElementsByTagName("input")[0];
  console.log(relativecounter.value);
  element.addEventListener('click', function() {
    console.log(element.parentElement.parentElement.id);
    if (relativecounter.value > 0){
    relativecounter.value = parseInt(relativecounter.value) -1;
    }
  });
});

plusbtn.forEach(function (element){
  let relativecounter = element.parentElement.getElementsByTagName("input")[0];
  console.log(relativecounter.value);
  element.addEventListener('click', function() {
    console.log(element.parentElement.parentElement.id);
    relativecounter.value = parseInt(relativecounter.value) +1;
  });
});


/*JS for shoppingcart:
Requires each item to become visible when counter > 0
Each item's name should be visible
Cost of each item mutiplied by counter value
Total cost to be calculated at the end by adding each row cost together*/